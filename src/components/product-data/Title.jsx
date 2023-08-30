import { styled } from "styled-components";

const Title = styled.h3`
   text-align: center;
   font-weight: 700;
`;

// basket
export const TitleXs = styled(Title)`
   margin: 0 auto;
   display: flex;
   align-items: center;
   font-size: var(--fs-title-lg);

   @media(max-width: 1200px) {
      font-size: var(--fs-title-md);
   }
   @media(max-width: 992px) {
      font-size: var(--fs-title-sm);
   }
`;

// short product
export const TitleSm = styled(Title)`
   font-size: var(--fs-title-lg);

   @media(max-width: 768px) {
      font-size: var(--fs-title-md);
   }
`;

// full product
export const TitleLg = styled(Title)`
   font-size: var(--fs-title-xxl);

   @media(max-width: 768px) {
      font-size: var(--fs-title-xl);
   }
   @media(max-width: 576px) {
      font-size: var(--fs-title-md);
   }
`;