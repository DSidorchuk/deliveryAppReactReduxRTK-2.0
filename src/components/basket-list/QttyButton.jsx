import { styled } from "styled-components";

export const QttyButton = styled.button`
   padding: 0;
   background-color: var(--red-color-dark);
   display: flex;
   justify-content: center;
   align-items: center;
   width: 30px;
   height: 30px;
   border: none;
   border-radius: 100%;
   text-align: center;
   font-size: var(--fs-basket-item-btn);
   font-weight: 700;
   color: var(--bg-color);

   @media(max-width: 992px) {
      width: 20px;
      height: 20px;
      font-size: var(--fs-basket-item-btn-tab);
   }
`;