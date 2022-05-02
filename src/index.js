import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApzgAdwnp05qEanF-2tUDCnoxijDgpo5w",
  authDomain: "ilearn-e7b3d.firebaseapp.com",
  projectId: "ilearn-e7b3d",
  storageBucket: "ilearn-e7b3d.appspot.com",
  messagingSenderId: "464432025727",
  appId: "1:464432025727:web:5ed3579f0f655c230caf4a",
  measurementId: "G-C9H6GGY63D"
};


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// const auth = firebase.auth();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
