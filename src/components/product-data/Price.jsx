import { styled } from "styled-components";

export const PriceSm = styled.p`
   padding-left: 10px;
   font-size: var(--fs-digit-xl);
   font-weight: 700;
   line-height: 30px;

   @media(max-width: 768px) {
      font-size: var(--fs-digit-md);
   }
`;

export const PriceLg = styled.p`
   font-size: var(--fs-digit-xl);
   font-weight: 700;

   @media(max-width: 576px) {
      font-size: var(--fs-digit-lg);
   }
`;