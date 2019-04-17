import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
var config = {
    apiKey: "AIzaSyBox70dzjlUS2gq94qgodGgzTq8DJnceMo",
    authDomain: "tom-rem-app.firebaseapp.com",
    databaseURL: "https://tom-rem-app.firebaseio.com",
    projectId: "tom-rem-app",
    storageBucket: "",
    messagingSenderId: "779794338846"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;