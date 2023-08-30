import { styled } from "styled-components";
import { Helmet } from 'react-helmet';

import { Container } from "../components/Container";
import { BasketForm } from "../features/basket/BasketForm";
import { BasketList } from "../features/basket/BasketList";
import { BasketAmount } from "../features/basket/BasketAmount";

const Wrapper = styled.div`
   margin-top: var(--margin-page);
   display: grid;
   grid-template-columns: 300px 800px;
   column-gap: 40px;

   @media(max-width: 1200px) {
      grid-template-columns: 280px 650px;
      column-gap: 30px;
   }
   @media(max-width: 992px) {
      margin-top: 30px;
      grid-template-columns: 200px 500px;
      column-gap: 20px;
   }
   @media(max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, minmax(200px, auto));
      row-gap: 50px;
   }
   @media(max-width: 576px) {
      margin-top: var(--margin-page-mob);
   }
`;

const meta = (
   <Helmet>
      <meta
         name="description"
         content="Shopping cart or basket page" 
         />
      <title>Кошик</title>
   </Helmet>
)

const BasketPage = () => {
   return (
      <>
         {meta}
         <Container>
            <Wrapper>
               <BasketForm/>
               <BasketList/>
            </Wrapper>
            <BasketAmount/>
         </Container>
      </>
   )
}

export default BasketPage;