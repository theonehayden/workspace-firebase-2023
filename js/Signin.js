// ***** Use your configuration

const firebaseConfig = {
  apiKey: "AIzaSyBM-NVoLNDx0_5552eDPhEuZGNj6TmuOJA",
  authDomain: "database-hayden.firebaseapp.com",
  projectId: "database-hayden",
  storageBucket: "database-hayden.appspot.com",
  messagingSenderId: "1078597180300",
  appId: "1:1078597180300:web:cece622d5550773d04d4a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from the form
  // You need to change this.
  var email = 'hayden@gmail.com';
  var password = 'Hayden1';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successfully');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
        window.location.href="Surveyresult.html";
      }
    })
    .catch((error) => {
      console.log(email,password);
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});