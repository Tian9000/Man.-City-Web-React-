import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCMaFqKID_76BD7jIdP188umPdrF5gdSfo",
    authDomain: "man-city-web.firebaseapp.com",
    databaseURL: "https://man-city-web.firebaseio.com",
    projectId: "man-city-web",
    storageBucket: "",
    messagingSenderId: "876253697425",
    appId: "1:876253697425:web:1699708dee1a142c67f630",
    measurementId: "G-2J37GKFK1V"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
}