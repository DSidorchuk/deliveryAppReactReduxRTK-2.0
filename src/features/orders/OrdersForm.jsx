import { styled } from 'styled-components';
import { Formik, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { phoneRegExp } from "../phone-regexp";
import { loadOrders } from './orders-slice';
import { InputLg } from '../../components/form/Input';
import { LabelLg } from '../../components/form/Label';
import { SubmitLg } from '../../components/form/SubmitButton';

const FormWrapper = styled(Form)`
   margin: 0 auto;
   padding: 15px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   background-color: var(--red-color-dark);
   width: 950px;
   height: calc(100% - 30px);
   border-radius: var(--border-wrapper-rad);

   @media(max-width: 1200px) {
      width: 930px;
   }
   @media(max-width: 992px) {
      width: calc(100% - 30px);
   }
   @media(max-width: 576px) {
      height: calc(100% - 20px);
      padding: 10px 0;
      display: grid;
      grid-template-rows: 20px 30px 25px;
      row-gap: 10px;
   }
`;


const OrdersForm = () => {
   const dispatch = useDispatch();

   const handleSearch = (data) => {
      dispatch(loadOrders(data.phone));
   }

   return (
      <Formik
         initialValues={{
            phone: ''
         }}
         validationSchema={Yup.object({
               phone: Yup.string()
                  .min(10, "Неповний номер")
                  .matches(phoneRegExp, "Некоректний номер")
         })}
         onSubmit = {(data, {resetForm}) => {
               handleSearch(data); 
               resetForm();
         }}
      >
         <FormWrapper>
            <LabelLg htmlFor='phone'>Номер телефону:</LabelLg>
            <InputLg
               id="phone"
               name="phone"
               type="phone"
               placeholder="Номер за яким ви робили замовлення"
            />
            <ErrorMessage name="phone" component="div"/>
            <SubmitLg>Пошук</SubmitLg>
         </FormWrapper>
      </Formik>
   )
}

export {OrdersForm};