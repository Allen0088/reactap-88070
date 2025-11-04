import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

console.log("VITE_API_KEY:", import.meta.env.VITE_API_KEY);
console.log("VITE_PROJECT_ID:", import.meta.env.VITE_PROJECT_ID);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
};

if (!firebaseConfig.apiKey) {
  throw new Error("Falta VITE_API_KEY en .env");
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    signInAnonymously(auth)
      .then(() => console.log("Login anónimo OK"))
      .catch((err) => console.error("Error en login anónimo:", err));
  } else {
    console.log("Usuario ya autenticado:", user.uid);
  }
});

window.firebaseApp = app;
window.firebaseAuth = auth;

createRoot(document.getElementById('root')).render(<App />);