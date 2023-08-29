import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   margin-top: 30px;
`;

const Title = styled.h1`
   margin-top: 30px;
   text-align: center;
   text-transform: uppercase;
   font-size: var(--fs-404-title);
   font-weight: 700;

   @media(max-width: 576px) {
      margin-top: 70px;
   }
`;

const HomeLink = styled(Link).attrs({to: '/'})`
   margin-top: 30px;
   display: block;
   text-align: center;
   text-decoration: none;
   text-transform: uppercase;
   font-size: var(--fs-404-link);
   font-weight: 700;
   color: var(--red-color-dark);
`;

const Page404 = () => {
   return (
      <Wrapper>
         <Title>Такої сторінки не існує</Title>
         <HomeLink>На головну</HomeLink>
      </Wrapper>
   )
}

export default Page404;