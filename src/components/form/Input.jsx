import { styled } from "styled-components";
import { Field } from 'formik';

const Input = styled(Field)`
   margin: 0 auto;
   padding: 0;
   background-color: var(--bg-color);
   border: none;
   border-radius: var(--border-input-rad);
   height: 30px;
   font-size: var(--fs-input);
`;
// basket
export const InputSm = styled(Input)`
   padding-left: 10px;
   width: 230px;

   @media(max-width: 1200px) {
      width: 210px;
   }

   @media(max-width: 992px) {
      width: 170px;
      height: 25px;
   }
`;
// order
export const InputLg = styled(Input)`
   padding-left: 15px;
   width: 508px;

   @media(max-width: 992px) {
      width: 380px;
      height: 25px;
   }
   @media(max-width: 768px) {
      padding-left: 5px;
      width: 250px;
      height: 25px;
      font-size: var(--fs-input-sm);
   }
`;