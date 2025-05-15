const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const message = {
  token: 'DEVICE_FCM_TOKEN',
  notification: { title: 'Hello', body: 'This is a push!' },
};

admin.messaging().send(message)
  .then(response => console.log('Sent:', response))
  .catch(console.error);
