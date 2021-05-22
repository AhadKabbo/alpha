import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { MidConnector } from './MidConnector';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import { ContainerD } from './MediaQryStyel'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <ContainerD > */}
      <App />
      {/* <MidConnector/> */}
      {/* </ContainerD> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
