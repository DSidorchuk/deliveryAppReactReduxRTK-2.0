import { styled } from "styled-components";
import { Helmet } from "react-helmet";

import { Container } from "../components/Container";
import { ShopsList } from "../features/shops/ShopsList";
import { GoodsList } from "../features/goods/GoodsList";

const ContainerGrid = styled(Container)`
   margin-top: var(--margin-page);
   display: grid;
   grid-template-columns: 200px 900px;
   column-gap: 40px;
   justify-content: center;

   @media(max-width: 1200px) {
      grid-template-columns: 160px 780px;
      column-gap: 20px;
   }
   @media(max-width: 992px) {
      margin-top: 30px;
      grid-template-columns: 155px 550px;
      column-gap: 15px;
   }
   @media(max-width: 768px) {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(50px, auto) 1fr;
      row-gap: 20px;
   }
   @media(max-width: 576px) {
      margin-top: var(--margin-page-mob);
   }
`;

const meta = (
   <Helmet>
      <meta
         name="description"
         content="Main page of food delivery app, which contains restaurants names and list of their products" 
         />
      <title>Доставка їжі</title>
   </Helmet>
)

const MainPage = () => {
   return (
      <>
         {meta}
         <ContainerGrid>
            <ShopsList/>
            <GoodsList/>
         </ContainerGrid>
      </>
   )
}

export default MainPage;