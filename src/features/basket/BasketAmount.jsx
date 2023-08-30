import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

import { selectBasketData } from './basket-slice';

const Wrapper = styled.div`
   margin: 20px 60px 0 0;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: space-between;

   @media(max-width: 992px) {
      margin: 20px 20px 0 0;
   }
   @media(max-width: 768px) {
      margin: 20px 0;
      align-items: center;
   }
`;

const NumBox = styled.div`
   display: flex;
   justify-content: space-between;
   width: 250px;
   font-size: var(--fs-descr-xl);
   font-weight: 700;
   &:nth-last-child(2) {
      color: $red-color-dark;
   }

   @media(max-width: 992px) {
      width: 200px;
      font-size: var(--fs-descr-lg);
   }
   @media(max-width: 768px) {
      display: flex;
      justify-content: space-between;
      font-size: var(--fs-descr-md);
   }
`;

const BasketAmount = () => {
   const {amount, discount} = useSelector(selectBasketData);

   return (
      <Wrapper>
         <NumBox>
            <p>Всього:</p>
            <div>{amount} ГРН</div>
         </NumBox>
         <NumBox>
            <p>Знижка:</p>
            <div>{discount} ГРН</div>
         </NumBox>
         <NumBox>
            <p>До сплати:</p>
            <div>{amount - discount} ГРН</div>
         </NumBox>
      </Wrapper>
   )
}

export { BasketAmount }; 