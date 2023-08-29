import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Transition } from 'react-transition-group';
import { useRef } from "react";

import { selecQttyOfGood } from "../basket/basket-slice";


const Wrapper = styled.div`
   padding: 10px;
   display: grid;
   grid-template-rows: 200px 20px 80px auto;
   row-gap: 12px;
   min-height: 280px;
   border: 1px solid var(--grey-color);
   border-radius: var(--border-goods-item-radius);

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

const Image = styled.img`
   display: block;
   width: 100%;
   height: 200px;
   object-fit: cover;
`;

const Title = styled.h3`
   text-align: center;
   font-size: var(--fs-goods-item-title);
   font-weight: 700;

   @media(max-width: 768px) {
      font-size: var(--fs-goods-item-title-tab);
   }
`;

const Descr = styled.p`
   font-size: var(--fs-goods-item-descr);

   @media(max-width: 768px) {
      font-size: var(--fs-goods-item-descr-tab);
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

const Price = styled.p`
   padding-left: 10px;
   font-size: var(--fs-goods-item-price);
   font-weight: 700;
   line-height: 30px;

   @media(max-width: 768px) {
      font-size: var(--fs-goods-item-price-tab);
   }
`;

const Qtty = styled.p`
   font-size: var(--fs-goods-item-price);
   line-height: 30px;
   color: var(--grey-color);

   @media(max-width: 768px) {
      font-size: var(--fs-goods-item-descr-tab);
   }
`;

const Button = styled.button`
   background-color: var(--red-color-dark);
   border: none;
   border-radius: var(--border-goods-item-btn-radius);
   text-transform: uppercase;
   font-size: var(--fs-goods-item-price);
   color: var(--bg-color);
   cursor: pointer;

   &:active {
      transition: all 0.2s;
      scale: 0.75;
   }

   @media(max-width: 768px) {
      font-size: var(--fs-goods-item-price-tab);
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
                  <Image src={image} alt={name}/>
               </Link>
               <Title>{name}</Title>
               <Descr>{shortDescr}</Descr>
               <PriceBox>
                  <Price>{price} грн</Price>
                  <Qtty>{qtty}</Qtty>
                  <Button onClick={handleClick}>замовити</Button>
               </PriceBox>
            </Wrapper>
         )}
      </Transition>
   )
}

export {GoodsItem};