import { styled } from "styled-components";

import { Container } from "../Container";
import { ClearButton } from "../ClearButton";
import { Menu } from "./Menu";


const Wrapper = styled.header`
   margin-top: 30px;
`;

const ContainerGrid = styled(Container)`
   display: grid;
   grid-template-columns: 600px auto;
   align-items: center;

   @media(max-width: 992px) {
      grid-template-columns: 500px auto;
   }
   @media(max-width: 768px) {
      grid-template-columns: 1fr;
   }
`;

const Navigation = styled.nav`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 60px;
   border: 2px solid  var(--red-color-dark);
   border-radius: var(--border-wrapper-rad);

   @media(max-width: 768px) {
      height: 40px;
   }
`;

const BtnWrapper = styled.div`
   background-color: var(--red-color-dark);
   position: relative;
   width: 100%;
   height: 1px;

   @media(max-width: 768px) {
      display: none;
   }
`;

const DesktopMenu = () => {
   return (
      <Wrapper>
         <ContainerGrid>
            <Navigation>
               <Menu/>
            </Navigation>
            <BtnWrapper>
               <ClearButton/>
            </BtnWrapper>
         </ContainerGrid>
      </Wrapper>
   )
}

export {DesktopMenu};