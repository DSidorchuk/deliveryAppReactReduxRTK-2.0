import { styled } from "styled-components";

export const Description = styled.p`
   text-align: justify;
   font-size: var(--fs-single-descr);

   @media(max-width: 992px) {
      font-size: var(--fs-single-descr-tab);
   }
   @media (max-width: 576px) {
      font-size: var(--fs-single-descr-mob);
   }
`;