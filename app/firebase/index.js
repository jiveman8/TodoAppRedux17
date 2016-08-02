import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAd3PE343HGPI1TRuMbNOT3RONiY6At7a8",
    authDomain: "jess-todoapp.firebaseapp.com",
    databaseURL: "https://jess-todoapp.firebaseio.com",
    storageBucket: "jess-todoapp.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
