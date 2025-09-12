import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// Enable Hot Module Replacement (HMR) for development
if (import.meta.hot) {
  import.meta.hot.accept();
}