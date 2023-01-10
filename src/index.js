import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app"; // Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGjLw3Z5mJOxI0JxZgaS49ZImDXE8EGhk",
  authDomain: "react-coder-5150.firebaseapp.com",
  projectId: "react-coder-5150",
  storageBucket: "react-coder-5150.appspot.com",
  messagingSenderId: "839507103148",
  appId: "1:839507103148:web:8b139ca3e16ec9cb3b3e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  ///<React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
