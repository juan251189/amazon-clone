// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBRevAssyQTpMlh9RR27ou5bgra-8uBjBo",
//   authDomain: "clone-2-6a437.firebaseapp.com",
//   projectId: "clone-2-6a437",
//   storageBucket: "clone-2-6a437.appspot.com",
//   messagingSenderId: "793189745109",
//   appId: "1:793189745109:web:c9048d8aea8852fa4a7d5c",
//   measurementId: "G-YK5H6RENZ6",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRevAssyQTpMlh9RR27ou5bgra-8uBjBo",
  authDomain: "clone-2-6a437.firebaseapp.com",
  projectId: "clone-2-6a437",
  storageBucket: "clone-2-6a437.appspot.com",
  messagingSenderId: "793189745109",
  appId: "1:793189745109:web:c9048d8aea8852fa4a7d5c",
  measurementId: "G-YK5H6RENZ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
