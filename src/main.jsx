// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ This wraps the app with context */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
