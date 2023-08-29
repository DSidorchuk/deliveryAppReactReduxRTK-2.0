import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { addItem, setSelectedShop, selectOrderFromShop, selecQttyOfGood } from "../basket/basket-slice";
import { Image } from "../../components/single-good/Image";
import { Title } from "../../components/single-good/Title";
import { Description } from "../../components/single-good/Description";
import { Price } from "../../components/single-good/Price";
import { Qtty } from "../../components/single-good/Qtty";
import { Button } from "../../components/single-good/Button";

const Wrapper = styled.div`
   margin-top: 30px;
   display: grid;
   grid-template-columns: 500px 580px;
   column-gap: 60px;

   @media(max-width: 1200px) {
      grid-template-columns: 400px 500px;
   }
   @media(max-width: 992px) {
      grid-template-columns: 300px 380px;
      column-gap: 40px;
   }
   @media(max-width: 768px) {
      grid-template-columns: 200px 320px;
      column-gap: 20px;
   }
   @media(max-width: 576px) {
      grid-template-columns: 1fr;
      grid-template-rows: 200px 1fr;
      row-gap: 20px;
   }
`;

const Grid = styled.div`
   padding: 20px;
   display: grid;
   grid-template-rows: 30px 1fr 30px;
   row-gap: 30px;
   border: 1px solid var(--grey-color);
   border-radius: var(--border-single-item-radius);
   &:hover {
      transition: all 0,5s;
      border: 1px solid var(--red-color-dark);
   }

   @media(max-width: 768px) {
      padding: 10px;
      grid-template-rows: 20px 1fr 30px;
      row-gap: 10px;
   }
   @media(max-width: 576px) {
      row-gap: 30px;
   }
`;

const OrderBox = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

const SingleGoodData = ({item, shop}) => {
   const dispatch = useDispatch();
   const {id, name, description, image, price} = item;
   const selectedShop = useSelector(selectOrderFromShop);
   const qtty = useSelector((state) => selecQttyOfGood(state, id));
   

   const addToBasket = () => {
      if(selectedShop === '') {
         dispatch(setSelectedShop(shop));
      } 
      dispatch(addItem(item))
   }

   return (
      <Wrapper>
         <Image src={image} alt={name}/>
         <Grid>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <OrderBox>
               <Price>{price} ГРН</Price>
               <Qtty>{qtty}</Qtty>
               <Button onClick={addToBasket}>Замовити</Button>
            </OrderBox>
         </Grid>
      </Wrapper>
   )
}

export {SingleGoodData};