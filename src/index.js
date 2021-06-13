import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { AppCopy } from 'components/App/AppCopy';

// import { ContainerD } from './MediaQryStyel'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <AppCopy /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
