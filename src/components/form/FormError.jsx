import { styled } from 'styled-components';
import { ErrorMessage } from 'formik';

export const FormError = styled(ErrorMessage)`
   height: 15px;
   text-align: center;
   font-size: var(--fs-error-sm);
`;