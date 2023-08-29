import { styled } from "styled-components";

export const Image = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   object-fit: fill;
   border-radius: 10px;

   @media(max-width: 576px) {
      display: none;
   }
`;