import { styled } from 'styled-components';


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

const Id = styled.p`
   font-size: var(--fs-digit-md);
   color: var(--grey-color);

   @media(max-width: 992px) {
      font-size: var(--fs-digit-sm);
   }
`;

const Info = styled.p`
   text-transform: uppercase;
   font-size: var(--fs-digit-lg);
   font-weight: 700;

   @media(max-width: 992px) {
      font-size: var(--fs-digit-md);
   }
`;

const Address = styled.div`
   margin-top: 5px;
   font-size: var(--fs-descr-md);
`;

const Shop = styled.div`
   margin-top: 5px;
   text-transform: uppercase;
   font-size: var(--fs-descr-lg);
   color: var(--red-color);

   @media(max-width: 992px) {
      font-size: var(--fs-descr-md);
   }
`;

const Item = styled.li`
   margin-left: 10px;
   display: flex;
   justify-content: space-between;
   width: 320px;
   font-size: var(--fs-descr-md);

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