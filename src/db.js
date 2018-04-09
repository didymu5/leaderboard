import * as firebase from 'firebase';
import 'firebase/firestore';
import config from './firebase-config';

firebase.initializeApp(config);

const db = firebase.firestore();
// Vue.prototype.$firebase = firebase.initializeApp(config); // should i do this?

export default db;
