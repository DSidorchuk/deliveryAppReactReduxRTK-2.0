import { styled } from "styled-components";
import MediaQuery from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';

import { selectActiveShop, setActiveShop} from "./shops-slice";
import { selectOrderFromShop} from "../basket/basket-slice";
import { Spinner } from "../../components/Spinner";
import { Error } from "../../components/Error";
import { Shop } from "../../components/Shop";
import { useShops } from "./use-shops";
import { ClearButton } from "../../components/ClearButton";

const Wrapper = styled.div`
   border-radius: 20px;
   background-color: var(--red-color-dark);
   min-height: 400px;

   @media(max-width: 768px) {
      padding: 10px;
      min-height: 50px;
   }
`;

const List = styled.ul`
   padding: 20px;
   border-radius: var(--border-wrapper-rad);
   text-align: left;
   font-weight: 700;
   line-height: 40px;
   color: var(--bg-color);
   cursor: pointer; 

   @media(max-width: 992px) {
      padding: 20px 10px;
   }
   @media(max-width: 768px) {
      padding: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
   }
   @media(max-width: 576px) {
      flex-direction: column;
   }
`;


const ShopsList = () => {
   const dispatch = useDispatch();
   const [shopsList, status, error] = useShops();
   const activeShop = useSelector(selectActiveShop);
   const selectedShop = useSelector(selectOrderFromShop);

   const selectShop = (id) => {
      dispatch(setActiveShop(id))
   } 


   return (
      <Wrapper>
         <List>
            {status === 'loading' && <Spinner/>}
            {error && <Error/>}
            {status === 'fulfilled' && !error && shopsList.map(
               (shop) => {
                  return (
                        <Shop
                           key={shop.id}
                           id={shop.id}
                           active={activeShop}
                           select={selectedShop}
                           onClick={() => selectShop(shop.id)}
                        >
                           {shop.name}
                        </Shop>
                  )
               })
            }
         </List>
         <MediaQuery maxWidth={768}>
                  <ClearButton/>
         </MediaQuery>
      </Wrapper>
   )
}

export {ShopsList};