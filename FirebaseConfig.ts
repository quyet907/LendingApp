import * as firebaseApp from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyADbFdZ2YMcvT_LFNCINnO4f2Lc-6-MO1M",
    authDomain: "lgnv-9e224.firebaseapp.com",
    databaseURL: "https://lgnv-9e224.firebaseio.com",
    projectId: "lgnv-9e224",
    storageBucket: "lgnv-9e224.appspot.com",
    messagingSenderId: "415340794690",
    appId: "1:415340794690:web:1cfa4d5613ce9d49e9eedb",
    measurementId: "G-N0RQ9W15Z1"
  };

export const firebase =  firebaseApp.initializeApp(firebaseConfig)