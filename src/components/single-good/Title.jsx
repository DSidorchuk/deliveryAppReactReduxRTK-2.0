import { styled } from "styled-components";

export const Title = styled.h1`
   text-align: center;
   font-size: var(--fs-single-title);
   font-weight: 700;

   @media(max-width: 768px) {
      font-size: var(--fs-single-title-tab);
   }
   @media(max-width: 576px) {
      font-size: var(--fs-single-title-mob);
   }
`;