import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO8t04XScZUAKPveOIcluDzMx8biMMuc4",
    authDomain: "instagram-6693a.firebaseapp.com",
    projectId: "instagram-6693a",
    storageBucket: "instagram-6693a.appspot.com",
    messagingSenderId: "54607024931",
    appId: "1:54607024931:web:7c025568ced6899bac3296"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue }