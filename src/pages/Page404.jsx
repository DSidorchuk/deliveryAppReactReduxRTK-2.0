import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   margin-top: var(--margin-page);
   
   @media(max-width: 576px) {
      margin-top: var(--margin-page-mob);
   }
`;

const Title = styled.h1`
   margin-top: 30px;
   text-align: center;
   text-transform: uppercase;
   font-size: var(--fs-error-lg);
   font-weight: 700;
`;

const HomeLink = styled(Link).attrs({to: '/'})`
   margin-top: 30px;
   display: block;
   text-align: center;
   text-decoration: none;
   text-transform: uppercase;
   font-size: var(--fs-error-lg);
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