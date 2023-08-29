import { styled } from "styled-components";

export const Title = styled.div`
   margin: 0 auto;
   display: flex;
   align-items: center;
   text-align: center;
   font-size: var(--fs-basket-item-title);
   font-weight: 700;

   @media(max-width: 1200px) {
      font-size: var(--fs-basket-item-title-desk);
   }
   @media(max-width: 992px) {
      font-size: var(--fs-basket-item-title-tab);
   }
`;