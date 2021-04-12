import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3MnqTk2CWlfXwPZWjV9uK-tgFLYM46oI",
    authDomain: "chatbox-app-a9f4c.firebaseapp.com",
    databaseURL: "https://chatbox-app-a9f4c-default-rtdb.europe-west1.firebasedatabase.app",
})

// constante permettant de linker rebase avec fire base
const base = Rebase.createClass(firebase.database())

// initialisation de l'application
export { firebaseApp }

export default base