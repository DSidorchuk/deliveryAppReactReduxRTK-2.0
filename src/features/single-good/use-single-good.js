import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';

import { loadGoodData, selectSingleGood} from './single-good-slice';

const useSingleGood = (shop, id) => {
   const dispatch = useDispatch();
   const {item, status, error} = useSelector(selectSingleGood);

   useEffect(() => {
      dispatch(loadGoodData({shop, id}));
   }, [])

   return [item, status, error]
}

export { useSingleGood };