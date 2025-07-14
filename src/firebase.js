import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator  } from 'firebase/firestore';
import { getAuth, connectAuthEmulator  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApiKHNztUO1N6_YcDpscj_T1iCNkiUcSQ',
  authDomain: 'products-system-test.firebaseapp.com',
  databaseURL: 'https://products-system-test-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'products-system-test',
  storageBucket: 'products-system-test.firebasestorage.app',
  messagingSenderId: '228233423569',
  appId: '1:228233423569:web:faaa49cef98a36cb86b3f0'
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// connectFirestoreEmulator(db, '127.0.0.1', 8080);

const auth = getAuth(app);
// connectAuthEmulator(auth, 'http://127.0.0.1:9099');

export {
    db,
    auth
}