import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   item: {},
   status: 'idle',
   error: null,
}

export const loadGoodData = createAsyncThunk(
   '@@single-good/load-data',
   async ({shop, id}, {extra}) => {
      return extra(`http://localhost:3001/${shop}/${id}`)
   }
)

const singleGoodSlice = createSlice({
   name: '@@single-good',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadGoodData.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadGoodData.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || action.meta.error;
         })
         .addCase(loadGoodData.fulfilled, (state, action) => {
            state.item = action.payload;
            state.status = 'fulfilled';
         })
   }
})

export const singleGoodReducer = singleGoodSlice.reducer;
export const selectSingleGood = (state) => state.singleGood;