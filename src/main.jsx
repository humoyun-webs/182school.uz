import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as LangProvider } from './Context/Lang';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LangProvider>
        <App />
      </LangProvider>
    </Router>
  </React.StrictMode>
);
