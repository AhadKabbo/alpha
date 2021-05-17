import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ContainerD } from './MediaQryStyel'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <ContainerD > */}
      <App />
      {/* </ContainerD> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
