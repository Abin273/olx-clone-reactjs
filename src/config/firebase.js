import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBEFm4ki6-IRyiUUTles1ZVaKZiSR1CaTI",
  authDomain: "olx-clone-reactjs-884eb.firebaseapp.com",
  projectId: "olx-clone-reactjs-884eb",
  storageBucket: "olx-clone-reactjs-884eb.appspot.com",
  messagingSenderId: "408219310694",
  appId: "1:408219310694:web:3bb514a2c889a74b796ba7",
  measurementId: "G-L7V1L4R9YP"
};


export default firebase.initializeApp(firebaseConfig);