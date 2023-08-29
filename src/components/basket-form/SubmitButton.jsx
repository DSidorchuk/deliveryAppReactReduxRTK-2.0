import { styled } from "styled-components";

export const SubmitButton = styled.button.attrs(({type: "submit"}))`
   margin: 0 auto;
   margin-top: 20px;
   display: block;
   background-color: var(--bg-color-dark);
   width: 205px;
   height: 35px;
   border: none;
   border-radius: var(--border-form-btn-radius);
   text-align: center;
   font-size: var(--fs-form-btn);
   font-weight: 700;

   @media(max-width: 992px) {
      padding: 0;
      width: 192px;
      height: 30px;
      font-size: var(--fs-form-btn-desk);
   }
   @media(max-width: 768px) {
      margin-top: 10px
   }
`;