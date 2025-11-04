import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { connectAuthEmulator } from 'firebase/auth';

console.log("🔥 Firebase Config:", {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID
});


const firebaseConfig = {
  apiKey: "AIzaSyAOUVyM7WgimOqQDw2dsO1mQxZi9ag7dvI",
  authDomain: "venusapp-cb3af.firebaseapp.com",
  projectId: "venusapp-cb3af",
  storageBucket: "venusapp-cb3af.firebasestorage.app",
  messagingSenderId: "303901164771",
  appId: "1:303901164771:web:7ab5b64a709ea3810531d6"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  console.log("🔌 Emulador de Auth activado");
}

signInAnonymously(auth)
  .then(() => {
    console.log("Usuario autenticado de forma anónima");
  })
  .catch((error) => {
    console.error("Error en la autenticación:", error.message);
  });


window.firebaseApp = app;
createRoot(document.getElementById('root')).render(<App />);