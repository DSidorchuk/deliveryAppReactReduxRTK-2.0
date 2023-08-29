import { styled } from 'styled-components';

export const Id = styled.p`
   font-size: var(--fs-order-item-id);
   color: var(--grey-color);

   @media(max-width: 992px) {
      font-size: var(--fs-order-item-id-tab);
   }
`;