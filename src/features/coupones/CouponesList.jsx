import { styled } from "styled-components";

import { Spinner } from '../../components/Spinner';
import { Error } from '../../components/Error';
import { useCoupones } from "./use-coupones";

const List = styled.ul`
   margin: 0 auto;
   margin-top: 30px;
   display: grid;
   grid-template-rows: repeat(3, minmax(60px,auto));
   grid-auto-rows: 60px;
   row-gap: 30px;
   width: 800px;

   @media(max-width: 992px) {
      margin-top: 20px;
      grid-template-rows: repeat(3, minmax(50px, auto));
      grid-auto-rows: 50px;
      width: 100%;
   }
`;

const ListItem = styled.li`
   padding: 0 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid var(--grey-color);
   border-radius: var(--border-item-rad);
   text-align: center;
   font-size: var(--fs-descr-xl);
   &:nth-child(odd) {
      background-color: var(--red-color-dark);
      border: none;
      color: var(--bg-color);
   }

   @media(max-width: 992px) {
      font-size: var(--fs-descr-lg);
   }
   @media(max-width: 768px) {
      font-size: var(--fs-descr-md);
   }
`;

const CouponesList = () => {
   const [list, status, error] = useCoupones();

   return (
      <List>
         {status === 'loading' && !error && <Spinner/>}
         {status === 'error' && error && <Error/>}
         {status === 'fulfilled' && !error && list.length > 0 && list.map((item) => {
            return (
               <ListItem key={item.id}> {item.description}</ListItem>
            )
         })}
      </List>
   )
}

export {CouponesList};