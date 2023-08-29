import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

import { Spinner } from '../../components/Spinner';
import { Error } from '../../components/Error';
import { Title } from '../../components/orders-list/Title';
import { selectOrders, selectPresentOrders } from './orders-slice';
import { OrderItem } from '../../components/orders-list/OrderItem';
import { dateParser } from './date-parser';


const Wrapper = styled.div`
   margin: 0 auto;
   margin-top: 20px;
   padding: 30px 20px;
   display: grid;
   grid-template-rows: repeat(2, minmax(120px, auto));
   row-gap: 30px;
   width: calc(100% - 40px);
   border: 1px solid  var(--red-color-dark);
   border-radius: var(--border-order-list-radius);

   @media(max-width: 1200px) {
      width: 918px;
   }
   @media(max-width: 992px) {
      padding: 20px 10px;
      width: calc(100% - 22px);
      row-gap: 20px;
   }
   @media(max-width: 576px) {
      padding: 20px 5px;
      width: calc(100% - 10px);
      border: none;
   }
`;

const Grid = styled.div`
   margin-top: 15px;
   display: grid;
   grid-template-rows: minmax(120px, auto);
   grid-auto-rows: minmax(120px, auto);
   row-gap: 15px;
`;

const OrdersList = () => {
   const {pastList, status, error} = useSelector(selectOrders);
   const present = useSelector(selectPresentOrders);

   const parseData = (arr) => arr.map((obj) => {
         return (
            <OrderItem
               key={obj.id}
               {...obj}
               date={dateParser(obj.date)}
            />
         )
      })
   
   return (
      <Wrapper>
         <div>
            <Title>Замовлення в обробці:</Title>
            <Grid>
               {present.length > 0 && parseData(present)}
            </Grid>
         </div>
         <div>
            <Title>Історія замовлень:</Title>
            <Grid>
               {status === 'loading' && !error && <Spinner/>}
               {status === 'error' && error && <Error/>}
               {status === 'fulfilled' && !error && pastList.length > 0 && parseData(pastList)}
            </Grid>
         </div>
      </Wrapper>
   )
}

export {OrdersList};