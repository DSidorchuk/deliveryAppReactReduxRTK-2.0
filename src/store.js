import { configureStore } from "@reduxjs/toolkit";

import { httpRequest } from "./api";
import { goodsReducer } from "./features/goods/goods-slice";
import { shopsReducer } from "./features/shops/shops-slice";
import { basketReducer } from "./features/basket/basket-slice";
import { couponesReducer } from "./features/coupones/coupones-slice";
import { ordersReducer } from "./features/orders/orders-slice";
import { singleGoodReducer } from "./features/single-good/single-good-slice";

const store = configureStore({
   reducer: {
      goods: goodsReducer,
      shops: shopsReducer,
      basket: basketReducer,
      coupones: couponesReducer,
      orders: ordersReducer,
      singleGood: singleGoodReducer,
   },
   devTools: true,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
         extraArgument: httpRequest,
      }
   })
})

export {store};