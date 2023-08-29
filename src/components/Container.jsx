import {styled} from "styled-components";

export const Container = styled.div`
   margin: 0 auto;
   width: 1140px;

   @media(max-width: 1200px){
      width: 960px;
   }
   @media(max-width: 992px){
      width: 720px;
   }
   @media(max-width: 768px){
      width: 540px;
   }
   @media(max-width: 576px){
      width: 100%;
   }
`;