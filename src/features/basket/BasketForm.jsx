import { v4 as uuidv4 } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectBasketData, clearBasket } from "./basket-slice";
import { selectOrdersStatus, postOrder } from "../orders/orders-slice";
import { FormLabel } from '../../components/basket-form/FormLabel';
import { FormInput } from '../../components/basket-form/FormInput';
import { SubmitButton } from '../../components/basket-form/SubmitButton';
import { FormError } from '../../components/basket-form/FormError'
import { phoneRegExp } from '../phone-regexp';

const Wrapper = styled.div`
   padding: 30px;
   background-color: var(--red-color-dark);
   border-radius: var(--border-form-radius);

   @media(max-width: 992px) {
      padding: 20px 10px 30px 10px;
   }
   @media(max-width: 768px) {
      padding: 20px 10px 20px 10px;
      grid-row: 2;
   }
   @media(max-width: 576px) {
      padding: 20px 0;
   }
`;

const FormGrid = styled(Form)`
   display: grid;
   grid-template-rows: repeat(4, 55px);
   row-gap: 20px;

   @media(max-width: 992px) {
      grid-template-rows: repeat(4, 40px);
   }
   @media(max-width: 768px) {
      margin: 0 auto;
      display: grid;
      grid-template-rows: repeat(4, 25px);
      justify-content: center;
      align-items: center;
   }
`;

const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media(max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 300px;
   }
`;

const BasketForm = () => {
   const dispatch = useDispatch();
   const {list, amount, discount, selectedShop} = useSelector(selectBasketData);
   const postStatus = useSelector(selectOrdersStatus);

   const handleSubmit = (data) => {
      dispatch(postOrder({
         ...data,
         id: uuidv4(),
         orderList: list,
         shop: selectedShop,
         amount: amount + discount,
         date: new Date().toString(),
      }));
      dispatch(clearBasket());
   }


   return (
      <Wrapper>
         <Formik 
            initialValues={{
               name: '',
               phone: '',
               email: '',
               address: '',
            }} 
            validationSchema={Yup.object({
               name: Yup.string()
                     .min(2, "Мінімум 2 символи")
                     .required("Необхідно заповнити"),
               phone: Yup.string()
                     .min(10, "Неповний номер")
                     .matches(phoneRegExp, "Некоректний номер")
                     .required("Необхідно заповнити"),
               email: Yup.string()
                     .email("Некоректний e-mail")
                     .required("Необхідно заповнити"),
               address: Yup.string()
                     .min(20, "Мінімум 20 символів")
                     .required("Необхідно заповнити")
            })}
            onSubmit = {(data, {resetForm}) => {
               handleSubmit(data);
               resetForm();
            }}
         >
            <FormGrid>
               <InputWrapper>
                  <FormLabel htmlFor='name'>Ваше ім'я</FormLabel>
                  <FormInput 
                     id="name"
                     name="name"
                     type="text"
                     placeholder="Введіть ваше ім'я"
                  />
                  <FormError name='name' component='div'/>
               </InputWrapper>
               <InputWrapper>
                  <FormLabel htmlFor='name'>Ваш телефон</FormLabel>
                  <FormInput 
                     id="phone"
                     name="phone"
                     type="phone"
                     placeholder="Введіть ваш телефон"
                  />
                  <FormError name='phone' component='div'/>
               </InputWrapper>
               <InputWrapper>
                  <FormLabel htmlFor='name'>Ваш e-mail</FormLabel>
                  <FormInput 
                     id="email"
                     name="email"
                     type="email"
                     placeholder="Введіть вашу пошту"
                  />
                  <FormError name='email' component='div'/>
               </InputWrapper>
               <InputWrapper>
                  <FormLabel htmlFor='name'>Ваша адреса</FormLabel>
                  <FormInput 
                     id="address"
                     name="address"
                     type="text"
                     placeholder="Введіть вашу пошту"
                  />
                  <FormError name='address' component='div'/>
               </InputWrapper>
               <SubmitButton
                  disabled={postStatus === 'loading' || !list.length}
               >
                  Підтвердити замовлення
               </SubmitButton>
            </FormGrid>
         </Formik>
      </Wrapper>
   )
}

export {BasketForm}