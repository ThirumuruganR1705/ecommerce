// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT-pCpu3nhaMcyCZDQDjJkAN0NreOGUj8",
  authDomain: "ecom-bc013.firebaseapp.com",
  projectId: "ecom-bc013",
  storageBucket: "ecom-bc013.appspot.com",
  messagingSenderId: "495351340160",
  appId: "1:495351340160:web:9e3b47c78b4dd6603a5a65",
  measurementId: "G-0P3MQG8B96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const storage = getStorage(app);

export default storage;