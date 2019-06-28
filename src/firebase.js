import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-ghXoR3XSXP6ulSiG6xRn78229fzox20",
  authDomain: "weld-8235b.firebaseapp.com",
  databaseURL: "https://weld-8235b.firebaseio.com",
  projectId: "weld-8235b",
  storageBucket: "",
  messagingSenderId: "261175345220",
  appId: "1:261175345220:web:e799836421818b63"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.database();
