import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBMltdAJA3FqXm6Ez5PqJxe44wVUm08mHM",
  authDomain: "reddit-clone-5e2cf.firebaseapp.com",
  databaseURL: "https://reddit-clone-5e2cf.firebaseio.com",
  projectId: "reddit-clone-5e2cf",
  storageBucket: "reddit-clone-5e2cf.appspot.com",
  messagingSenderId: "116806682901"
  };

  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();