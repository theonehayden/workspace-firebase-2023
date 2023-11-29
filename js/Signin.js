const firebaseConfig = {
  apiKey: "AIzaSyDZIAVnBvB-GHlaDDO2GbOFjQhVvleb344",
  authDomain: "database-hayden.firebaseapp.com",
  projectId: "database-hayden",
  storageBucket: "database-hayden.appspot.com",
  messagingSenderId: "352598568614",
  appId: "1:352598568614:web:b1acd2e65514f8050f8e67",
  measurementId: "G-6EF9ZJX352"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = 'yilianz4@gmail.com';
  var password = 'ddsgagafda';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      var user = result.user;
      console.log("sign in through google", user);
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAutProvider();

  firebase.auth().signInWithPopup(provider).then();

});