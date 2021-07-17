const firebaseAdmin = require('firebase-admin');
const firebase = require('firebase');

import * as serviceAccount from './mercy-project-kr-firebase-adminsdk-zs6lq-417a131a3f.json';
import * as firebaseConfig from './firebaseapp.json';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://mercy-project-kr-default-rtdb.firebaseio.com'
});

firebase.initializeApp(firebaseConfig);

export { firebaseAdmin, firebase };