import { styled } from "styled-components";

const Wrapper = styled.div`
   margin: 0 auto;
   text-align: center;
   font-size: var(--fs-error-md);
`;

const Error = () => {
   return (
      <Wrapper>
         Упс, щось пішло не так ...
      </Wrapper>
   )
}

export {Error};