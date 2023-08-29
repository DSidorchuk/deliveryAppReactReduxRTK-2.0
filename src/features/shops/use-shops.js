import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShopsStatus, loadShops, selectError, selectShopsList } from "./shops-slice";

export const useShops = () => {
   const dispatch = useDispatch();
   const shopsList = useSelector(selectShopsList);
   const status = useSelector(selectShopsStatus);
   const error = useSelector(selectError);

   useEffect(() => {
      dispatch(loadShops());
   }, [])

   return [shopsList, status, error];
}