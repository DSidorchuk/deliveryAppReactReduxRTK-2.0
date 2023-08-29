import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Menu } from "./Menu";
import { Hamburger } from "./Hamburger";
import home from "../../assets/home.svg";

const HomeIcon = styled.img`
   position: absolute;
   top: 10px;
   left: 10px;
   width: 30px;
   height: 30px;
`;

const Navigation = styled.nav`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 30px;
   background-color: var(--bg-color-dark);
   opacity: 0.9;
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: ${({active}) => active ? 0 : "-100%"};
   z-index: 10;
   transition: left 1s;
`;

const MobileMenu = () => {
   const [active, setActive] = useState(false);

   const toggleClass = () => {
       setActive(!active);
   }

   return (
      <>
         <NavLink to='/'>
            <HomeIcon src={home} alt='home'/>
         </NavLink>
         <Navigation active={active} onClick={toggleClass}>
            <Menu/>
         </Navigation>
         <Hamburger active={active} onClick={toggleClass}/>
      </>
   )
}

export {MobileMenu};