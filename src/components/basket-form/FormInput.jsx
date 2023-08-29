import { styled } from "styled-components";
import { Field } from 'formik';

export const FormInput = styled(Field)`
   padding-left: 10px;
   background-color: var(--bg-color);
   width: 230px;
   height: 30px;
   border: none;
   border-radius: var(--border-form-input-radius);
   font-size: var(--fs-form-input);

   @media(max-width: 992px) {
      width: 180px;
      height: 25px;
   }
`;