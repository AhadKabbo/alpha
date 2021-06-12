import React from 'react';

import { ImgLogo1, NavLogoNew1 } from '../Info/InfoElements.jsx';

const Logo = ({ alt, img }) => {
  return (
    <NavLogoNew1 to="/">
      <ImgLogo1 src={img} alt={alt} />
    </NavLogoNew1>
  );
};

export default Logo;
