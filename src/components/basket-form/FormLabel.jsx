import { styled } from "styled-components";

export const FormLabel = styled.label`
   font-size: var(--fs-form-label);
   color: var(--bg-color);

   @media(max-width: 992px) {
      font-size: var(--fs-form-input);
   }
`;