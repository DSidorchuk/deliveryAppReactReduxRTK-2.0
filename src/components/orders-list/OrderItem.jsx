import { styled } from 'styled-components';

import { Address } from './Address';
import { Shop } from './Shop';
import { Info } from './Info';
import { Id } from './Id';

const Wrapper = styled.div`
   &:after {
      content: '';
      margin: 0 auto;
      margin-top: 10px;
      display: block;
      background-color: var(--red-color);
      width: 100%;
      height: 1px;
   }
`;

const DataBox = styled.div`
   display: flex;
   justify-content: space-between;

   @media(max-width: 768px) {
      flex-direction: column;
      gap: 7px;
   }
`;

const List = styled.ul`
   list-style: none;

   @media(max-width: 576px) {
      margin-top: 10px;
   }
`;

const Item = styled.li`
   margin-left: 10px;
   display: flex;
   justify-content: space-between;
   width: 320px;
   font-size: var(--fs-order-item-prod);

   @media(max-width: 576px) {
      margin-left: 0;
      width: 300px;
      justify-content: space-around;
   }
`;

const OrderItem = ({date, id, address, amount, shop, orderList}) => {
   return (
      <Wrapper>
         <DataBox>
            <Info>{date}</Info>
            <Id>Номер: {id}</Id>
            <Info>Сума: {amount} ГРН</Info>
         </DataBox>
         <Address>Адреса: {address}</Address>
         <Shop>{shop}</Shop>
         <List>
            {orderList.map((item) => {
               return (
                  <Item key={item.item.id}>
                     <p>{item.item.name}</p>
                     <p>{item.qtty}</p>
                  </Item>
               )
            })}
         </List>
      </Wrapper>
   )
}

export { OrderItem };