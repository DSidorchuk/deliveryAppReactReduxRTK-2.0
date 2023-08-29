import { styled } from 'styled-components';

export const Shop = styled.div`
   margin-top: 5px;
   text-transform: uppercase;
   font-size: var(--fs-order-item-shop);
   color: var(--red-color);

   @media(max-width: 992px) {
      font-size: var(--fs-order-item-shop-tab);
   }
`;