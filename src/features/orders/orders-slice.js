import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   presentList: [],
   pastList: [],
   status: 'idle',
   error: null,
};

//http://18.193.94.131/order
export const postOrder = createAsyncThunk(
   '@@order/post-order',
   async (order, {extra}) => {
      return extra(`http://localhost:3001/orders`, 'POST', JSON.stringify(order));
   }
);

//http://18.193.94.131/history/
export const loadOrders = createAsyncThunk(
   '@@orders/load-orders',
   (phone, {extra}) => {
      return extra(`http://localhost:3001/orders/?phone=${phone}`)
   }
);

const ordersSlice = createSlice({
   name: '@@orders',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(postOrder.fulfilled, (state, action) => {
            state.presentList.push(action.payload);
         })
         .addCase(loadOrders.fulfilled, (state, action) => {
            state.pastList = action.payload;
         })
         .addMatcher((action) => action.type.endsWith('/fulfilled'), (state) => {
            state.status = 'fulfilled';
         })
         .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
            state.status = 'error';
            state.error = action.payload || action.meta.error;
         })
   }
});

export const ordersReducer = ordersSlice.reducer;

export const selectOrdersStatus = (state) => state.orders.status;
export const selectPresentOrders = (state) => state.orders.presentList;
export const selectOrders = (state) => state.orders;