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
 apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
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