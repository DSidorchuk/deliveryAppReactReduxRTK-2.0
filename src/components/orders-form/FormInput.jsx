import { styled } from 'styled-components';
import { Field } from 'formik';

export const FormInput = styled(Field)`
   margin: 0 auto;
   padding: 0;
   padding-left: 15px;
   display: block;
   background-color: var(--bg-color);
   width: 508px;
   height: 30px;
   border: none;
   border-radius: var(--border-order-input-radius);
   font-size: var(--fs-order-input);

   @media(max-width: 992px) {
      width: 380px;
      height: 25px;
   }
   @media(max-width: 768px) {
      padding-left: 5px;
      width: 250px;
      height: 25px;
      font-size: var(--fs-order-input-tab);
   }
`;