import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   list: [],
   status: 'idle',
   error: null,
   activeShop: 'mcdonalds'
};

// 'http://18.193.94.131/shopslist'
export const loadShops = createAsyncThunk(
   '@@shops/load-shops',
   (_, {extra}) => {
      return extra('http://localhost:3001/shops')
   }
);

const shopsSlice = createSlice({
   name: '@@shops',
   initialState,
   reducers: {
      setActiveShop: (state, action) => {state.activeShop = action.payload}
   },
   extraReducers: (builder) => {
      builder
         .addCase(loadShops.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadShops.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || action.meta.error;
         })
         .addCase(loadShops.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.list = action.payload;
         })
   }
})

export const {setActiveShop} = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;

export const selectShopsList = (state) => state.shops.list;
export const selectShopsStatus = (state) => state.shops.status;
export const selectActiveShop = (state) => state.shops.activeShop;
export const selectError = (state) => state.shops.error;


