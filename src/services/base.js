import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCBEcGJnLkF6ZLr-m20Hq2yKFuqHWLWK8Y",
    authDomain: "tiksort-5a6d2.firebaseapp.com",
    projectId: "tiksort-5a6d2",
    storageBucket: "tiksort-5a6d2.appspot.com",
    messagingSenderId: "38226866827",
    appId: "1:38226866827:web:764df3958c84354f87da8e",
    measurementId: "G-24CREEYHK0"
  })
 export default app;