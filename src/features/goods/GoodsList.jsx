import { styled } from "styled-components";
import { Transition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { useGoods } from "./use-goods";
import { Spinner } from "../../components/Spinner";
import { Error } from "../../components/Error";
import { GoodsItem } from "./GoodsItem";
import { selectOrderFromShop, addItem, setSelectedShop } from "../basket/basket-slice";


const Wrapper = styled.div`
   padding: 10px;
   display: grid;
   grid-template-columns: repeat(3, 280px);
   column-gap: 20px;
   row-gap: 20px;
   justify-content: center;
   border: 1px solid  var(--red-color-dark);
   border-radius: var(--border-goods-radius);

   @media(max-width: 1200px){
      padding: 20px 10px 20px 10px;
      grid-template-columns: repeat(3, 235px);
      column-gap: 10px;
   }
   @media(max-width: 992px){
      grid-template-columns: repeat(2, 250px);
   }
   @media(max-width: 576px){
      padding: 10px;
      grid-template-columns: 1fr;
   }
`;

const GoodsList = () => {
   const desktopSm = useMediaQuery({minWidth: 769, maxWidth: 1200});
   const tablet = useMediaQuery({minWidth: 577, maxWidth: 768});
   const mobile = useMediaQuery({minWidth: 320, maxWidth: 576});
   const dispatch = useDispatch();

   const [goodsList, status, error, activeShop] = useGoods();
   const selectedShop = useSelector(selectOrderFromShop);

   const convertText = (text) => {
      const length = (desktopSm && 95) || (tablet && 120) || (mobile && 150) || 110;
      return text.length > length ? text.slice(0, length) + '...' : text;
   }

   const handleClick = (item) => {
      if(!selectedShop) {
         dispatch(setSelectedShop(activeShop));
      }
      dispatch(addItem(item));
   }

   return (
      <Wrapper>
         {status === 'loading' && <Spinner/>}
         {error && <Error/>}
         <TransitionGroup component={null}>
            {status === 'received' && !error && goodsList.map(
               (obj) => {
                  return (
                     <Transition timeout={300} key={obj.id}>
                        <GoodsItem
                           item={obj}
                           shortDescr={convertText(obj.description)}
                           handleClick={() => handleClick(obj)}
                           activeShop={activeShop}
                           appear={goodsList.length ? true : false}
                        />
                     </Transition>
                  )
            })}
         </TransitionGroup>
      </Wrapper>
   )
}

export {GoodsList};