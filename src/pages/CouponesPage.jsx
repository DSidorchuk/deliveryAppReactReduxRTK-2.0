import { styled } from "styled-components";
import { Helmet } from 'react-helmet';

import { Container } from "../components/Container";
import { CouponesList } from "../features/coupones/CouponesList";

const Wrapper = styled.div`
   margin-top: 30px;

   @media(max-width: 768px) {
      margin-top: 10px;
   }
   @media(max-width: 576px) {
      margin-top: 70px;
   }
`;

const Title = styled.h1`
   text-align: center;
   font-size: var(--fs-coupones-title);
   font-weight: 700;

   @media(max-width: 992px) {
      font-size: var(--fs-coupones-title-tab);
   }
   @media(max-width: 768px) {
      font-size: var(--fs-coupones-title-mob);
   }
`;

const Info = styled.p`
   margin-top: 50px;
   text-align: center;
   text-transform: uppercase;
   font-size: var(--fs-coupones-info);

   @media(max-width: 992px) {
      margin-top: 30px;
      font-size: var(--fs-coupones-info-tab);
   }
`;

const meta = (
   <Helmet>
      <meta
         name="description"
         content="Coupones and sales page" 
         />
      <title>Акції та знижки</title>
   </Helmet>
)

const CouponesPage = () => {
   return (
      <>
         {meta}
         <Wrapper>
            <Container>
               <Title>Акції та знижки</Title>
               <CouponesList/>
               <Info>Знижки не сумуються. Найбільша знижка буде застосована автоматично.</Info>
            </Container>
         </Wrapper>
      </>
   )
}

export default CouponesPage;