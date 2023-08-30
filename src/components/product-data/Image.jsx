import { styled } from "styled-components";

// basket product data
export const ImageXs = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   object-fit: fill;
   border-radius: 10px;

   @media(max-width: 576px) {
      display: none;
   }
`;

// short product data
export const ImageSm = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

// full product data
export const ImageLg = styled(ImageSm)`
   border: 1px solid var(--red-color-dark);
   border-radius: var(--border-single-item-radius);
`;

