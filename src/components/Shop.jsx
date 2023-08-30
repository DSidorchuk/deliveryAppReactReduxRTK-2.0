import { styled } from "styled-components";

export const Shop = styled.li`
   padding-left: 10px;
   border-radius: var(--border-item-rad);
   font-size: var(--fs-sho);
   box-shadow: ${({id, active}) => id === active 
      ? '0 0 2px white' 
      : 'unset'};
   pointer-events: ${({id, select}) => 
   (!select && 'unset') || (select && id !== select && 'none') || 'unset'};
   opacity: ${({id, select}) => 
   (!select && 'unset') || (select && id !== select && '0.6') || 'unset'};
   &:hover {
      transition: all 0.6s;
      scale: 110%;
   }
   @media(max-width: 768px) {
      padding: 0 10px;
      font-size: var(--fs-shop-sm);
   }
`;





