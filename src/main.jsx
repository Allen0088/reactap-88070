import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || "AIzaSyAOUVyM7WgimOqQDw2dsO1mQxZi9ag7dvI",
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || "venusapp-cb3af.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID || "venusapp-cb3af",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || "venusapp-cb3af.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER || "303901164771",
  appId: import.meta.env.VITE_APP_ID || "1:303901164771:web:7ab5b64a709ea3810531d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

if (import.meta.env.DEV || true) { 
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  console.log("Emuladores locales activados: Auth (9099), Firestore (8080)");
}

(async () => {
  try {
    await signInAnonymously(auth);
    console.log("✅ Usuario autenticado de forma anónima");
  } catch (error) {
    console.error("❌ Error en la autenticación:", error.message);
  }

  createRoot(document.getElementById('root')).render(<App />);
})();

window.firebaseApp = app;