// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeRJ4IyUWRYSNlPV8M8KTsvJo_lBNFaOg",
  authDomain: "ecommerce-32ea8.firebaseapp.com",
  projectId: "ecommerce-32ea8",
  storageBucket: "ecommerce-32ea8.appspot.com",
  messagingSenderId: "1060648258935",
  appId: "1:1060648258935:web:5a24255b748212abe16572",
  measurementId: "G-P423W6FW2J"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()

export {auth,db}