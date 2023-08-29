import { styled } from "styled-components";

export const SubmitButton = styled.button.attrs(({type: "submit"}))`
   background-color: var(--bg-color-dark);
   width: 140px;
   height: 30px;
   border: none;
   border-radius: var(--border-order-btn-radius);
   font-size: var(--fs-order-btn);
   font-weight: 700;

   @media(max-width: 992px) {
      width: 120px;
      height: 25px;
   }
   @media(max-width: 768px) {
      width: 70px;
      height: 25px;
      font-size: var(--fs-order-btn-tab);
   }
   @media(max-width: 576px) {
      margin: 0 auto;
      display: block;
   }
`;