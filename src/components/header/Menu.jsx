import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Link = styled(NavLink)`
   text-transform: uppercase;
   font-size: var(--fs-link);
   font-weight: 700;
   color: black;

   &:hover {
      transition: all 0.6s;
      color: var(--red-color-dark);
   }

   &.active {
      color: var(--red-color-dark);
   }

   @media(max-width: 768px) {
      font-size: var(--fs-link-sm);
   }
`;

const Menu = () => {
   return (
      <>
         <Link to="/">заклади</Link>
         <Link to="/basket">кошик</Link>
         <Link to="/orders">замовлення</Link>
         <Link to="/coupones">акції</Link>
      </>
   )
}

export {Menu};