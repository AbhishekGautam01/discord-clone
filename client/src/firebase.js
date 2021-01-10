import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDvsnSmqDMp1k9-b25nqLhoLfqUHlTQy3Q',
  authDomain: 'discord-clone-79071.firebaseapp.com',
  projectId: 'discord-clone-79071',
  storageBucket: 'discord-clone-79071.appspot.com',
  messagingSenderId: '93999234149',
  appId: '1:93999234149:web:1bc378e150fa704ff05a8c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
