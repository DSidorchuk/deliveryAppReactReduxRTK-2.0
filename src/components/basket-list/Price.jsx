import { styled } from "styled-components";

export const Price = styled.div`
   margin: 0 auto;
   display: flex;
   align-items: center;
   text-align: right;
   font-size: var(--fs-basket-item-price);

   @media(max-width: 992px) {
      font-size: var(--fs-basket-item-price-tab);
   }
`;