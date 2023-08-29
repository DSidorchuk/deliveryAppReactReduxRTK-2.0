import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectCoupones, loadCoupones } from './coupones-slice';

export const useCoupones = () => {
   const dispatch = useDispatch();
   const {list, status, error} = useSelector(selectCoupones);

   useEffect(() => {
      if(list.length === 0) {
         dispatch(loadCoupones());
      }
   }, [])

   return [list, status, error]
}