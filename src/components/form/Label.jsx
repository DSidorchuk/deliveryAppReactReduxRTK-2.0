import { styled } from 'styled-components';

export const LabelSm = styled.label`
   font-size: var(--fs-label);
   color: var(--bg-color);

   @media(max-width: 992px) {
      font-size: var(--fs-label-sm);
   }
`;

export const LabelLg = styled(LabelSm)`
   text-align: center;
   text-transform: uppercase;
`;