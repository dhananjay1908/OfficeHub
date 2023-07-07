import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import { AuthContextProvider } from './Context/AuthContext';
import { ChatsContextProvider } from './Context/ChatsContext';
// import store from "./Redux/store";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatsContextProvider>
      <App />
    </ChatsContextProvider>
  </AuthContextProvider>
);


