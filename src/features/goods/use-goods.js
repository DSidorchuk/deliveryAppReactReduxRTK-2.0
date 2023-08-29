import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadGoods, selectGoodsList, selectGoodsStatus, selectGoodsError } from "./goods-slice";
import { selectActiveShop } from "../shops/shops-slice";

const useGoods = () => {
   const dispatch = useDispatch();
   const goodsList = useSelector(selectGoodsList);
   const status = useSelector(selectGoodsStatus);
   const error = useSelector(selectGoodsError);
   const activeShop = useSelector(selectActiveShop);

   useEffect(() => {
      dispatch(loadGoods(activeShop));
   }, [activeShop]);

   return [goodsList, status, error, activeShop];

}

export {useGoods};
