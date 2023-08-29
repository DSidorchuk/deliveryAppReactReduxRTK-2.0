import { styled } from "styled-components";
import { useDispatch } from "react-redux";

import { useBasketList } from "./use-basket-list";
import { incrQtty, decrQtty } from "./basket-slice";
import { BasketItem } from "../../components/basket-list/BasketItem";

const Wrapper = styled.div`
   padding: 30px 20px;
   display: grid;
   grid-template-rows: repeat(4, 80px);
   grid-auto-rows: 80px;
   row-gap: 10px;
   border: 1px solid  var(--red-color-dark);
   border-radius: var(--border-basket-list-radius);

   @media(max-width: 992px) {
      padding: 20px 10px;
   }
   @media(max-width: 768px) {
      grid-template-rows: repeat(auto-fit, 80px);
   }
   @media(max-width: 576px) {
      padding: 20px 0;
      grid-template-rows: repeat(auto-fit, 40px);
   }
`;

const BasketList = () => {
   const dispatch = useDispatch();
   const [list] = useBasketList();

   const onIncr = (item) => {
      dispatch(incrQtty(item));
   }
   const onDecr = (item) => {
      dispatch(decrQtty(item));
   }

   return (
      <Wrapper>
         {list.map((obj) => {
            return (
               <BasketItem 
                  key={obj.item.id}
                  {...obj.item}
                  qtty={obj.qtty}
                  onIncr={() => onIncr(obj.item)}
                  onDecr={() => onDecr(obj.item)}
               />
            )
         })}
      </Wrapper>
   )
}

export {BasketList};