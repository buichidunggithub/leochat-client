import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDyLTh41X34FQQ_5wza2rXube-CXCuJHeM",
    authDomain: "leo-chat-d9425.firebaseapp.com",
    projectId: "leo-chat-d9425",
    storageBucket: "leo-chat-d9425.appspot.com",
    messagingSenderId: "415952447606",
    appId: "1:415952447606:web:6f31dbfb5f514ddb481757",
    measurementId: "G-74YFSCFDZN"
}).auth();