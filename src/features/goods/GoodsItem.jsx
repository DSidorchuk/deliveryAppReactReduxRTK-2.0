import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Transition } from 'react-transition-group';
import { useRef } from "react";

import { selecQttyOfGood } from "../basket/basket-slice";
import { ImageSm } from "../../components/product-data/Image";
import { TitleSm } from "../../components/product-data/Title";
import { DescriptionSm } from "../../components/product-data/Description";
import { PriceSm } from "../../components/product-data/Price";
import { QttySm } from "../../components/product-data/Qtty";
import { ButtonSm } from "../../components/Button";

const Wrapper = styled.div`
   padding: 10px;
   display: grid;
   grid-template-rows: 200px 20px 80px auto;
   row-gap: 12px;
   min-height: 280px;
   border: 1px solid var(--grey-color);
   border-radius: var(--border-wrapper-rad);

   &:hover {
      transition: all 0,5s;
      border: 1px solid var(--red-color-dark);
   }

   @media(max-width: 768px) {
      grid-template-rows: 200px 20px 60px auto;
      row-gap: 12px;
      min-height: 280px;
   }
`;

const PriceBox = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-end;

   @media(max-width: 576px) {
      align-items: center;
   }
`;


const GoodsItem = ({item, shortDescr, handleClick, activeShop, appear}) => {
   const {id, name, image, price} = item;
   const qtty = useSelector((state) => selecQttyOfGood(state, id));

   const duration = 100;

   const defaultStyle = {
      transition: `opacity ${duration}s ease-in-out`,
      opacity: 0,
    };

   const animationStyles = {
      entering: {
         opacity: 0.1,
         scale: '50%',
         transition: 'all 0.2s ease-in',
      },
      entered: {
         opacity: 1,
         scale: '100%',
         transition: 'all 0.1s ease-in',
      },
   };
   const nodeRef = useRef(null);

   return (
      <Transition 
         nodeRef={nodeRef} 
         timeout={duration} 
         in={appear}
         appear={appear}
      > 
         {(state) => (
            <Wrapper ref={nodeRef} style={{...defaultStyle, ...animationStyles[state]}}>
               <Link to={`/${activeShop}/${id}`}>
                  <ImageSm src={image} alt={name}/>
               </Link>
               <TitleSm>{name}</TitleSm>
               <DescriptionSm>{shortDescr}</DescriptionSm>
               <PriceBox>
                  <PriceSm>{price} грн</PriceSm>
                  <QttySm>{qtty}</QttySm>
                  <ButtonSm onClick={handleClick}>замовити</ButtonSm>
               </PriceBox>
            </Wrapper>
         )}
      </Transition>
   )
}

export {GoodsItem};