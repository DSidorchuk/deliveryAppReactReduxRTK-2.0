import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   list: [],
   status: 'idle',
   error: null,
}

//http://18.193.94.131/coupones
export const loadCoupones = createAsyncThunk(
   '@@coupones/load-coupones',
   async (_, {extra}) => {
      return extra(`http://localhost:3001/coupones`);
   }
)

const couponesSlice = createSlice({
   name: '@@coupones',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadCoupones.pending, (state, payload) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadCoupones.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || action.meta.error;
         })
         .addCase(loadCoupones.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.list = action.payload;
         })
   }
});

export const couponesReducer = couponesSlice.reducer;

export const selectCouponesList = (state) => state.coupones.list;
export const selectCoupones = (state) => state.coupones;