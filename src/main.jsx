import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA0UVyM7WgIm0QQDw2ds01mQxZ19ag7dVI",
  authDomain: "venusapp-cb3af.firebaseapp.com",
  projectId: "venusapp-cb3af",
  storageBucket: "venusapp-cb3af.appspot.com",
  messagingSenderId: "383901164771",
  appId: "1:383901164771:web:7ab5b64a709ea3810531d6"
};

console.log("FORZADO:", firebaseConfig);

const app = initializeApp(firebaseConfig);
window.firebaseApp = app;

createRoot(document.getElementById('root')).render(<App />);