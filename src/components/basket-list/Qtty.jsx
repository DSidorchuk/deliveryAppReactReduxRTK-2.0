import { styled } from "styled-components";

export const Qtty = styled.p`
   font-size: var(--fs-basket-item-price);
   font-weight: 700;

   @media(max-width: 992px) {
      font-size: var(--fs-basket-item-price-tab);
   }
`;