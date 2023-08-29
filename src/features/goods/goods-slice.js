import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   list: [],
   status: 'idle',
   error: null,
}

// `http://18.193.94.131/products?shop=${shop}`
export const loadGoods = createAsyncThunk(
   '@@goods/load-goods',
   (shop, {extra}) => {
      return extra(`http://localhost:3001/${shop}`)
   }
)

const goodsSlice = createSlice({
   name: '@@goods',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadGoods.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadGoods.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || action.meta.error;
         })
         .addCase(loadGoods.fulfilled, (state, action) => {
            state.status = 'received';
            state.list = action.payload;
         })
   }
})

export const goodsReducer = goodsSlice.reducer;

export const selectGoodsList = (state) => state.goods.list;
export const selectGoodsStatus = (state) => state.goods.status;
export const selectGoodsError = (state) => state.goods.error;
