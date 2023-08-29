import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { clearBasket, selectBasketQtty } from "../features/basket/basket-slice";

const Button = styled.button`
   margin: 0 auto;
   display: ${props => props.active ? 'block' : 'none'};
   background-color: var(--bg-color);
   position: absolute;
   right: 50%;
   top: -15px;
   transform: translateX(50%);
   width: 200px;
   height: 30px;
   border: 1px solid var(--red-color-dark);
   border-radius: var(--border-btn-radius);
   text-transform: uppercase;
   font-size: var(--fs-clear-btn);
   font-weight: 700;

   @media(max-width: 768px) {
      margin-top: 10px;
      position: relative;
      right: unset;
      top: unset;
      transform: unset;
      width: 125px;
      border: none;
      border-radius: var(--border-btn-radius-mob);
      font-size: var(--fs-clear-btn-mob);
      color: var(--red-color-dark);
   }

   @media(max-width: 576px) {
      margin-top: 20px;
   }
`;

const ClearButton = () => {
   const dispatch = useDispatch();
   const emptyBasket = useSelector(selectBasketQtty);

   const onClick = () => {
      dispatch(clearBasket());
   }

   return (
      <Button
         active={emptyBasket}
         onClick={onClick}
      >
         очистити кошик
      </Button>
   )
}

export {ClearButton};