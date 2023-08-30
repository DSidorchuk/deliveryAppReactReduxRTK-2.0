import { styled } from "styled-components";

import { ImageXs } from "./product-data/Image";
import { TitleXs } from "./product-data/Title";
import { QttyXs } from "./product-data/Qtty";


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

const Number = styled.div`
   margin: 0 auto;
   display: flex;
   align-items: center;
   text-align: right;
   font-size: var(--fs-digit-lg);

   @media(max-width: 992px) {
      font-size: var(--fs-digit-md);
   }
`;

const QttyButton = styled.button`
   padding: 0;
   background-color: var(--red-color-dark);
   display: flex;
   justify-content: center;
   align-items: center;
   width: 30px;
   height: 30px;
   border: none;
   border-radius: 100%;
   text-align: center;
   font-size: var(--fs-btn-lg);
   font-weight: 700;
   color: var(--bg-color);

   @media(max-width: 992px) {
      width: 20px;
      height: 20px;
      font-size: var(--fs-btn-md);
   }
`;

const BasketItem = ({image, name, price, qtty, onIncr, onDecr}) => {
   return (
      <Wrapper>
         <GridDescr>
            <ImageXs src={image} alt={name}/>
            <TitleXs>{name}</TitleXs>
         </GridDescr>
         <GridVolume>
            <Number>{price} ГРН</Number>
            <QttyBox>
               <QttyButton onClick={onDecr}>-</QttyButton>
               <QttyXs>{qtty}</QttyXs>
               <QttyButton onClick={onIncr}>+</QttyButton>
            </QttyBox>
            <Number>{price * qtty} ГРН</Number>
         </GridVolume>
      </Wrapper>
   )
}

export {BasketItem};