import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectBasketData, setDiscount } from "./basket-slice";
import { selectCouponesList, loadCoupones } from "../coupones/coupones-slice";
import { calculateDiscount} from "./calculate-discount";

const useBasketList = () => {
   const dispatch = useDispatch();
   const {list, amount, selectedShop} = useSelector(selectBasketData);
   const coupones = useSelector(selectCouponesList);

   useEffect(() => {
      if(!coupones.lenght){
         dispatch(loadCoupones());
      }
      const discount = calculateDiscount(list, coupones, selectedShop, amount);
      dispatch(setDiscount(discount))
   }, [selectedShop])

   return [list]
} 

export {useBasketList};

