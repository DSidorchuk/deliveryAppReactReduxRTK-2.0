import { styled } from 'styled-components';

export const Info = styled.p`
   text-transform: uppercase;
   font-size: var(--fs-order-item-info);
   font-weight: 700;

   @media(max-width: 992px) {
      font-size: var(--fs-order-item-info-desk);
   }
`;