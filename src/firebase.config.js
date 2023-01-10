
import {getApp , getApps , initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxWSzfyX2ZY8iGG8GeFTrNdP0qPd9bBmU",
    authDomain: "restaurantapp-41a23.firebaseapp.com",
    databaseURL: "https://restaurantapp-41a23-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-41a23",
    storageBucket: "restaurantapp-41a23.appspot.com",
    messagingSenderId: "533247186664",
    appId: "1:533247186664:web:d9e0742df1bea4aff3db5d"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export{app, firestore , storage};