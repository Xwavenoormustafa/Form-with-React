import React from 'react';
import ReactDOM from 'react-dom/client';
import FormComponent from './FormComponent';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormComponent />
    <App />
  </React.StrictMode>
);


