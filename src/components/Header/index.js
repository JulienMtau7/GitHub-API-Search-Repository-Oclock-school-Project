import React from 'react';

// Import du composant Image depuis semantic ui
import { Image } from 'semantic-ui-react';

// Import de l'image
import logo from 'src/assets/images/logo-github.png';

const Header = () => (
  <Image src={logo} centered size="small" />
);

export default Header;
