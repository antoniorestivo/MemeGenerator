import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "memegenerator-ec89b.firebaseapp.com",
    projectId: "memegenerator-ec89b",
    storageBucket: "memegenerator-ec89b.appspot.com",
    messagingSenderId: "530309977446",
    appId: "1:530309977446:web:d885cb4aadbe82fe1324a7",
    measurementId: "G-GHXF7SPC78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  const db =  firebase.firestore()
  export default db
