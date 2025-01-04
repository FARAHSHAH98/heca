
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 
  
  const firebaseConfig = {
    apiKey: "AIzaSyBh_amtYyT9qICfngUgDEOfMxZtanqlvxE",
    authDomain: "mypro-65498.firebaseapp.com",
    projectId: "mypro-65498",
    storageBucket: "mypro-65498.firebasestorage.app",
    messagingSenderId: "965330997025",
    appId: "1:965330997025:web:fa96d1934f2a6ce7117860",
    measurementId: "G-DYDE4T53NZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAuth(app);