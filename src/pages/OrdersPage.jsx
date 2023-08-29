import { Helmet } from 'react-helmet';
import { styled } from 'styled-components';

import { Container } from '../components/Container';
import { OrdersForm } from '../features/orders/OrdersForm';
import { OrdersList } from '../features/orders/OrdersList';

const Wrapper = styled.div`
   margin-top: 30px;
   display: grid;
   grid-template-rows: 70px 1fr;
   row-gap: 40px;

   @media(max-width: 992px) {
      margin-top: 30px;
      grid-template-rows: 50px 1fr;
      row-gap: 20px;
   }
   @media(max-width: 576px) {
      margin-top: 70px;
      grid-template-rows: minmax(100px, auto) 1fr;
      grid-template-columns: 1fr;
      row-gap: 20px;
   }
`;

const meta = (
   <Helmet>
      <meta
         name="description"
         content="History page of present and past orders" 
         />
      <title>Замовлення</title>
   </Helmet>
)

const OrdersPage = () => {
   return (
      <>
         {meta}
         <Container>
            <Wrapper>
               <OrdersForm/>
               <OrdersList/>
            </Wrapper>
         </Container>
      </>
   )
}

export default OrdersPage;