import { styled } from "styled-components";

export const Price = styled.p`
   font-size: var(--fs-single-descr);
   font-weight: 700;

   @media(max-width: 576px) {
      font-size: var(--fs-single-descr-tab);
   }
`;