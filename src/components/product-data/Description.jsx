import { styled } from "styled-components";

// full data
export const DescriptionLg = styled.p`
   text-align: justify;
   font-size: var(--fs-descr-xxl);

   @media(max-width: 992px) {
      font-size: var(--fs-descr-lg);
   }
   @media (max-width: 576px) {
      font-size: var(--fs-descr-md);
   }
`;

// short data
export const DescriptionSm = styled.p`
   text-align: justify;
   font-size: var(--fs-descr-md);

   @media(max-width: 768px) {
      font-size: var(--fs-descr-sm);
   }
`;