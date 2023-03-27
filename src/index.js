import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'rsuite/styles/index.less'; 
import "rsuite/dist/rsuite.min.css";

import { CustomProvider } from 'rsuite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider>
  </React.StrictMode>
);
