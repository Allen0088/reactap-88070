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

console.log("🔥 Firebase Config:", {
  apiKey: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID
});

const app = initializeApp(firebaseConfig);

window.firebaseApp = app;

createRoot(document.getElementById('root')).render(<App />);