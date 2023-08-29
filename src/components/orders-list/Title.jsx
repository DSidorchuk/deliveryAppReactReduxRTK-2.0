import { styled } from 'styled-components';

export const Title = styled.h3`
   text-transform: uppercase;
   font-size: var(--fs-order-title);
   font-weight: 700;
   color: var(--red-color-dark);

   @media(max-width: 992px) {
      font-size: var(--fs-order-title-desk);
   }
   @media(max-width: 768px) {
      font-size: var(--fs-order-title-tab);
   }
`;