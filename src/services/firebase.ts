import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDX2q170AXgE9NdyGV5SiblGLNueFqexYY',
  authDomain: 'auth-55a52.firebaseapp.com',
  projectId: 'auth-55a52',
  storageBucket: 'auth-55a52.appspot.com',
  messagingSenderId: '1072076360210',
  appId: '1:1072076360210:web:51f52ea9ef8c101ee726cb'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//recebe os parametro de autenticação da aplicação
export const auth = getAuth(app);