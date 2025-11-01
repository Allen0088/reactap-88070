import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initializeApp } from "firebase/app";
import App from './App.jsx'


const firebaseConfig = {
  apiKey: "AIzaSyAOUVyM7WgimOqQDw2dsO1mQxZi9ag7dvI",
  authDomain: "venusapp-cb3af.firebaseapp.com",
  projectId: "venusapp-cb3af",
  storageBucket: "venusapp-cb3af.firebasestorage.app",
  messagingSenderId: "303901164771",
  appId: "1:303901164771:web:7ab5b64a709ea3810531d6"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
