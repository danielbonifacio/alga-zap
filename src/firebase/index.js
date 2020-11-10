import firebase from "firebase";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDK5dIpQHjYXeZ4ErWxsZu3TE611FeN8Fo",
  authDomain: "alga-zap-c7aa4.firebaseapp.com",
  databaseURL: "https://alga-zap-c7aa4.firebaseio.com",
  projectId: "alga-zap-c7aa4",
  storageBucket: "alga-zap-c7aa4.appspot.com",
  messagingSenderId: "281051438793",
  appId: "1:281051438793:web:6cf89ea664b557752d3718",
  measurementId: "G-YDR89YJGT5"
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()
