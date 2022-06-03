// import firebase services
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCMwMasJY10kZpkVy0r7OoKqoIlrHV_Ovo",
  authDomain: "clubhouse-aaf8b.firebaseapp.com",
  projectId: "clubhouse-aaf8b",
  storageBucket: "clubhouse-aaf8b.appspot.com",
  messagingSenderId: "886682409906",
  appId: "1:886682409906:web:6457aff316c1b64074a2ab"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize firebase services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

// export services
export { projectAuth, projectFirestore, timestamp }