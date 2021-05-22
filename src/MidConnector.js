
import React from 'react';

import { App } from 'components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppHome from 'src copy/AppHome';
// import { ContainerD } from './MediaQryStyel'

export const MidConnector = () => {
  return(
    <Router>
    <Switch>
      {/* <ContainerD > */}
      <AppHome />
      {/* <App /> */}
      {/* </ContainerD> */}
      </Switch>
    </Router>
  
  )
};
