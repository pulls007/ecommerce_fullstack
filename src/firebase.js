import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgy2U0Lsp9_Mh3P19p9gACtU2XE3BsXP8',
  authDomain: 'react-ecommerce-70ae8.firebaseapp.com',
  projectId: 'react-ecommerce-70ae8',
  storageBucket: 'react-ecommerce-70ae8.appspot.com',
  messagingSenderId: '1050908464201',
  appId: '1:1050908464201:web:941ffee25c77ff194c9b98',
  measurementId: 'G-2CXSBTXFJ9',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
