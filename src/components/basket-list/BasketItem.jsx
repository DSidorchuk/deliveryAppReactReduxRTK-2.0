import { styled } from "styled-components";

import { Image } from "./Image";
import { Title } from "./Title";
import { Price } from "./Price";
import { QttyButton} from "./QttyButton";
import { Qtty } from "./Qtty";
import { Amount } from "./Amount";

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 360px 360px;
   column-gap: 40px;
   height: 80px;

   @media(max-width: 1200px) {
      grid-template-columns: 300px 300px;
      column-gap: 0;
   }
   @media(max-width: 992px) {
      grid-template-columns: 280px 200px;
   }
   @media(max-width: 768px) {
      justify-content: center;
   }
   @media(max-width: 576px) {
      grid-template-columns: 125px 190px;
      height: 40px;
   }
`;
const GridDescr = styled.div`
   display: grid;
   grid-template-columns: 100px 260px;

   @media(max-width: 1200px) {
      grid-template-columns: 80px 220px;
      column-gap: 10px
   }
   @media(max-width: 992px) {
      grid-template-columns: 80px 200px;
   }
   @media(max-width: 576px) {
      grid-template-columns: 1fr;
   }
`;

const GridVolume = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 100px);
   column-gap: 15px;

   @media(max-width: 1200px) {
      grid-template-columns: 80px 100px 80px;
      column-gap: 10px;
   }
   @media(max-width: 992px) {
      grid-template-columns: 60px 70px 60px;
      column-gap: 5px;
   }
   @media(max-width: 576px) {
      grid-template-columns: 55px 68px 55px;
      column-gap: 5;
   }
`;

const QttyBox = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const BasketItem = ({image, name, price, qtty, onIncr, onDecr}) => {
   return (
      <Wrapper>
         <GridDescr>
            <Image src={image} alt={name}/>
            <Title>{name}</Title>
         </GridDescr>
         <GridVolume>
            <Price>{price} ГРН</Price>
            <QttyBox>
               <QttyButton onClick={onDecr}>-</QttyButton>
               <Qtty>{qtty}</Qtty>
               <QttyButton onClick={onIncr}>+</QttyButton>
            </QttyBox>
            <Amount>{price * qtty} ГРН</Amount>
         </GridVolume>
      </Wrapper>
   )
}

export {BasketItem};