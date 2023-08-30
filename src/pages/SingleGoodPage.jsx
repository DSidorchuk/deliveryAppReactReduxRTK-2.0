import { styled } from "styled-components";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { Container } from '../components/Container';
import { SingleGoodData } from "../features/single-good/SingleGoodData";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import { useSingleGood } from "../features/single-good/use-single-good";

const Wrapper = styled(Container)`
   margin-top: var(--margin-page);
   @media(max-width: 576px) {
      margin-top: var(--margin-page-mob);
   }
`;

const meta = (name) => {
   return (
      <Helmet>
         <meta
            name="description"
            content="Full description page of product" 
            />
         <title>{name}</title>
      </Helmet>
   )  
}

const SingleGoodPage = () => {
   const {shop, id} = useParams();
   const [item, status, error] = useSingleGood(shop, id);

   return (
      <>
         {meta(item.name)}
         <Wrapper>
            {status === 'loading' && <Spinner/>}
            {status === 'rejected' && error && <Error/>}
            {status === 'fulfilled' && !error && <SingleGoodData item={item} shop={shop}/>}
         </Wrapper>
      </>
   )
}

export default SingleGoodPage;