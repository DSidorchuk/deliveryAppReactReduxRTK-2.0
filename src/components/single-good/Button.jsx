import { styled } from "styled-components";

export const Button = styled.button`
   background-color: var(--red-color-dark);
   width: 140px;
   height: 30px;
   border: none;
   border-radius: var(--border-single-btn-radius);
   text-transform: uppercase;
   font-weight: 700;
   color: var(--bg-color);

   @media(max-width: 576px) {
      font-size: var(--fs-single-btn);
   }
`;