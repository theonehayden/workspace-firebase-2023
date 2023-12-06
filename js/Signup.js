//$npm install firebase
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailaddress = $('input[name="username"]').val();
  var password = $('input[name="password"]').val();
  var confirmedPassword = $('input[name="cpassword"]').val();
  console.log(username, emailaddress, password, confirmedPassword);


  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(()=>{
        console.log(user.displayName, "You are signed up");
       // window.location.href = "Login.html";
        var date = "Wed, 29 Nov 2023 07:28:00 GMT";
        var userinformation ={
          "username": user.displayName,
          "email": emailaddress,
          "signupDate": date,
          "password":password
        };
  
    var db = firebase.firestore();
    db.collection("usertable").doc(user.displayName).set(userinformation).then();
  
      });

      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
