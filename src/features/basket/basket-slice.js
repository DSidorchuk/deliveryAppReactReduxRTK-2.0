import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   list: [],
   amount: 0,
   discount: 0,
   selectedShop: '',
}

const basketSlice = createSlice({
   name: '@@basket',
   initialState,
   reducers: {
      clearBasket: () => initialState,
      addItem: (state, action) => {
         if(state.list.some((obj) => obj.item.id === action.payload.id)) {
            state.list = state.list.map((obj) => {
               if (obj.item.id === action.payload.id) {
                  obj.qtty++
               }
               return obj;
            })
         } else {
            state.list.push({
               item: action.payload,
               qtty: 1,
            })
         }
         state.amount = state.list.reduce((amount, obj) => amount + (obj.qtty * obj.item.price), 0);
      },
      incrQtty: (state, action) => {
         state.list.forEach((obj) => {
            if (obj.item.id === action.payload.id) {
               obj.qtty++
            }
         })
         state.amount = state.list.reduce((amount, obj) => amount + (obj.qtty * obj.item.price), 0);
      },
      decrQtty: (state, action) => {
         let updated = state.list.map((obj) => {
            return obj.item.id === action.payload.id
                   ? {item: obj.item, qtty: obj.qtty - 1}
                   : obj
         });
         updated = updated.filter((obj) => obj.qtty > 0);
         state.list = updated;
         state.amount = updated.reduce((amount, obj) => amount + (obj.qtty * obj.item.price), 0);
      },
      setSelectedShop: (state, action) => {
         state.selectedShop = action.payload;
      },
      setDiscount: (state, action) => {
         state.discount = action.payload
      }
   }
})

export const {clearBasket, addItem, incrQtty, decrQtty, setSelectedShop, setDiscount} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const selectBasketData = (state) => state.basket;
export const selectBasketItems = (state) => state.basket.list;
export const selectBasketAmount = (state) => state.basket.amount;
export const selectBasketQtty = (state) => state.basket.list.length;
export const selectOrderFromShop = (state) => state.basket.selectedShop;
export const selecQttyOfGood = (state, id) => {
   const item = state.basket.list.find((obj) => obj.item.id === id);
   return item ? item.qtty : 0;
}