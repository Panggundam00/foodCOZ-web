import * as firebase from "firebase"
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCtK_AireD4R2owm0zRmbrINNTWGVQiwBY",
    authDomain: "devfoodcoz.firebaseapp.com",
    databaseURL: "https://devfoodcoz.firebaseio.com",
    projectId: "devfoodcoz",
    storageBucket: "devfoodcoz.appspot.com",
    messagingSenderId: "589174080947",
    appId: "1:589174080947:web:af4f701c5076e0a2"
});

const db = firebase.firestore()

export { db }
export default firebase;