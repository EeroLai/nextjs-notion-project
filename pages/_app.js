import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1EYujncTVqFE88hbpi7yjxkitMeVV8ZA",
  authDomain: "nextjs-notion-project.firebaseapp.com",
  projectId: "nextjs-notion-project",
  storageBucket: "nextjs-notion-project.appspot.com",
  messagingSenderId: "974469934337",
  appId: "1:974469934337:web:939ffcc22f1f679b14bf00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);