
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA7x4Dgc3BPwki3mtxM1u-VuOC11SPXhQc",
  authDomain: "venus-app222.firebaseapp.com",
  projectId: "venus-app222",
  storageBucket: "venus-app222.firebasestorage.app",
  messagingSenderId: "1050247711989",
  appId: "1:1050247711989:web:3610bc2795853987b749bc"
};


initializeApp(firebaseConfig);


const root = createRoot(document.getElementById('root'));
root.render(<App />);