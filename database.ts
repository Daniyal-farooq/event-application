
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDRnWDX5802XEwIPjKIdUS_HMlxfoGKSxI",
  authDomain: "my-osm-f7e9d.firebaseapp.com",
  projectId: "my-osm-f7e9d",
  storageBucket: "my-osm-f7e9d.appspot.com",
  messagingSenderId: "520670151478",
  appId: "1:520670151478:web:f618fe3cfa374ad3d7e997"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);
const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,db,storage}