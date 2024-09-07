import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoONZXcNc5rRUHXZ6qrlKzSgXTKQMndcA',
  authDomain: 'invoice-app-66c09.firebaseapp.com',
  projectId: 'invoice-app-66c09',
  storageBucket: 'invoice-app-66c09.appspot.com',
  messagingSenderId: '465383666319',
  appId: '1:465383666319:web:914996c9181670cfc4f6fa',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
