// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { AppConfig } from "./config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: AppConfig.firebaseApiKey,
  authDomain: AppConfig.firebaseAuthDomain,
  projectId: AppConfig.firebaseProjectId,
  storageBucket: AppConfig.firebaseStorageBucket,
  messagingSenderId: AppConfig.firebaseMessagingSenderId,
  appId: AppConfig.firebaseAppId,
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
