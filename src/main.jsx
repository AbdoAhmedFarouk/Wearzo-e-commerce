import React from 'react';
import { RecoilRoot } from 'recoil';

import ReactDOM from 'react-dom/client';

import AppRouter from './routes/AppRouter';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>,
);
