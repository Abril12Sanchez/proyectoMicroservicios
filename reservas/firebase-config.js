// /backend/reservas/firebase-config.js
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://database-url.firebaseio.com'
});

const db = admin.firestore();
module.exports = db;
