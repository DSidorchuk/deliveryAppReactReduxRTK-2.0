import { styled } from "styled-components";

const Button = styled.button`
   background-color: var(--red-color-dark);
   border: none;
   border-radius: var(--border-btn-rad);
   text-transform: uppercase;
   color: var(--bg-color);
   cursor: pointer;

   &:active {
      transition: all 0.2s;
      scale: 0.75;
   }
`;

export const ButtonLg = styled(Button)`
   width: 140px;
   height: 30px;
   font-weight: 700;
   @media(max-width: 576px) {
      font-size: var(--fs-btn-md);
   }
`;

export const ButtonSm = styled(Button)`
   font-size: var(--fs-goods-item-price);
   @media(max-width: 768px) {
      font-size: var(--fs-btn-sm);
   }
`;