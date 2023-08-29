import { styled } from 'styled-components';

export const FormLabel = styled.label`
   text-align: center;
   text-transform: uppercase;
   font-size: var(--fs-order-label);
   color: var(--bg-color);

   @media(max-width: 992px) {
      font-size: var(--fs-order-label-desk);
   }
   @media(max-width: 768px) {
      font-size: var(--fs-order-label-tab);
   }
`;