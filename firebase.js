const firebase = require('firebase')

const config = {
  apiKey: 'AIzaSyDIgmzQWZtjRq3NLa8gZG85dHardJHxWVI',
  authDomain: 'chloe-rice.firebaseapp.com',
  databaseURL: 'https://chloe-rice.firebaseio.com',
  projectId: 'chloe-rice',
  storageBucket: 'chloe-rice.appspot.com'
}

firebase.initializeApp(config)
