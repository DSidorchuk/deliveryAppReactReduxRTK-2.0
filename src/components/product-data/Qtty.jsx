import { styled } from "styled-components";

export const Qtty = styled.p`
   color: var(--grey-color);  
`;

export const QttySm = styled(Qtty)`
   font-size: var(--fs-digit-xl);
   line-height: 30px;

   @media(max-width: 768px) {
      font-size: var(--fs-digit-lg);
   }
`;

export const QttyXs = styled.p`
   font-size: var(--fs-digit-lg);
   font-weight: 700;

   @media(max-width: 992px) {
      font-size: var(--fs-digit-md);
   }
`;