// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { render } from "react-dom";
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

export default function firebase(req, res) {
    if (req.method === 'POST') {
        console.log('test');
        res.status(200).json({ name: 'John Doe' })
      // Process a POST request
    } else {
        return render('test');
      // Handle any other HTTP method
    }
  }
