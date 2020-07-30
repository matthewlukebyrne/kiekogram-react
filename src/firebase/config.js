import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDjF-tYOFKB1zjYt6zcMDKHjNY3qjVEZ8c",
  authDomain: "reactgram-39f7f.firebaseapp.com",
  databaseURL: "https://reactgram-39f7f.firebaseio.com",
  projectId: "reactgram-39f7f",
  storageBucket: "reactgram-39f7f.appspot.com",
  messagingSenderId: "392933537",
  appId: "1:392933537:web:9d205184a2b8b45f1400e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Invokes the storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Export
export { projectStorage, projectFirestore, timestamp };