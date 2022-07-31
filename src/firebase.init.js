// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLGM55CrKBxxKbbP8BdtGJ09EKPaoCTtA",
  authDomain: "softitcare-9df3d.firebaseapp.com",
  projectId: "softitcare-9df3d",
  storageBucket: "softitcare-9df3d.appspot.com",
  messagingSenderId: "734874952116",
  appId: "1:734874952116:web:7c2498fa7d45d02dfe92e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth