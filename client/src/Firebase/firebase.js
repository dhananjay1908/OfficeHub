import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyB58x_8xsDQXbN_Wfeh6xPePqP5B-tv3fg',
    authDomain: "officehub-e5a2a.firebaseapp.com",
    projectId: "officehub-e5a2a",
    storageBucket: "officehub-e5a2a.appspot.com",
    messagingSenderId: "946880426335",
    appId: "1:946880426335:web:f396ee07744b182d3706ea"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();