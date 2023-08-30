import { styled } from "styled-components";

const Submit = styled.button.attrs(({type: "submit"}))`
   margin: 0 auto;
   background-color: var(--bg-color-dark);
   height: 30px;
   border: none;
   border-radius: var(--border-btn-rad);
   font-size: var(--fs-submit);
   font-weight: 700;
`;

//basket
export const SubmitSm = styled(Submit)`
   margin-top: 20px;
   width: 205px;
   text-align: center;
   
   @media(max-width: 992px) {
      padding: 0;
      width: 180px;
      height: 30px;
      font-size: var(--fs-submit-sm);
   }
   @media(max-width: 768px) {
      margin-top: 10px
   }
`;

// order
export const SubmitLg = styled(Submit)`
   width: 140px;

   @media(max-width: 992px) {
      width: 120px;
      height: 25px;
   }
   @media(max-width: 768px) {
      width: 70px;
      height: 25px;
      font-size: var(--fs-submit-sm);
   }
`;