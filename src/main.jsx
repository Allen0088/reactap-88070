import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';

console.log("🔥 Firebase Config:", {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID
});


const firebaseConfig = {
apiKey: import.meta.env.VITE_API_KEY || "AIzaSyA0UVyM7WgIm0QQDw2ds01mQxZ19ag7dVI",
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || "venusapp-cb3af.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID || "venusapp-cb3af",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || "venusapp-cb3af.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER || "383901164771",
  appId: import.meta.env.VITE_APP_ID || "1:383901164771:web:7ab5b64a709ea3810531d6"
};

console.log("FORZADO:", firebaseConfig);

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


signInAnonymously(auth)
  .then(() => {
    console.log("Usuario autenticado de forma anónima");
  })
  .catch((error) => {
    console.error("Error en la autenticación:", error.message);
  });


window.firebaseApp = app;
createRoot(document.getElementById('root')).render(<App />);