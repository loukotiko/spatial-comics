import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBxnt2nrpmuErku1YVAy7ApxfmZum8Ix2M",
    authDomain: "spatial-comics.firebaseapp.com",
    databaseURL: "https://spatial-comics.firebaseio.com",
    projectId: "spatial-comics",
    storageBucket: "spatial-comics.appspot.com",
    messagingSenderId: "101465014601"
};

firebase.initializeApp(config);

export default firebase;