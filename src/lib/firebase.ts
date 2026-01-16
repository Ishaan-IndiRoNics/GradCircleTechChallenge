import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDp_xFLo8-uABbPe8N37Xo-fqKPyJCp7E8",
    authDomain: "petconnect-29149.firebaseapp.com",
    projectId: "petconnect-29149",
    storageBucket: "petconnect-29149.firebasestorage.app",
    messagingSenderId: "165297069841",
    appId: "1:165297069841:web:9f74bb705df813a6c9b6b0",
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
