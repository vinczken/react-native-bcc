import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
    apiKey: "AIzaSyCDP4ZzLjMWrQIwuKhiLEmH-Y73XIP7yx4",
    authDomain: "react-pocketcards.firebaseapp.com",
    projectId: "react-pocketcards",
    storageBucket: "react-pocketcards.firebasestorage.app",
    messagingSenderId: "577093295151",
    appId: "1:577093295151:web:2ca2d19047c3dcd7113ada",
    measurementId: "G-B69BX318VS"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
}); 
export const db = getFirestore(app);
