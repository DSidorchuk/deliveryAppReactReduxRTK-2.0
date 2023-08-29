import { styled } from "styled-components";

const Wrapper = styled.div`
   position: absolute;
   top: 10px;
   right: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-end;
   width: 30px;
   height: 30px;
   z-index: 11;
`;

const Line = styled.span`
   display: block;
   background-color: ${({active}) => active 
      ? 'var(--red-color-dark)' 
      : 'black'};
   transform: ${({active}) => active ? 'rotate(45deg)' : 'unset'};
   width: 30px;
   height: 2px;
   transition: all 0.5s;

   &:nth-child(3){
      display: ${({active}) => active 
         ? 'none' 
         : 'block'};
   }
   &:nth-child(2){
      transform: ${({active}) => active 
         ? 'translateY(-15px) rotate(-45deg)' 
         : 'unset'};
   }
`;

const Hamburger = ({active, onClick}) => {
   return (
      <Wrapper active={active} onClick={onClick}>
         <Line active={active}/>
         <Line active={active}/>
         <Line active={active}/>
      </Wrapper>
   )
}

export {Hamburger};