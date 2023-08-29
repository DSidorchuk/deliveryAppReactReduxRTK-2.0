import MediaQuery from 'react-responsive';

import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";


const Header = () => {
   return (
      <>
         <MediaQuery minWidth={577}>
            <DesktopMenu/>
         </MediaQuery>
         <MediaQuery maxWidth={576}>
            <MobileMenu/>
         </MediaQuery>
      </>
   )
}

export {Header};