// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var currentuser = "Hayden";
var currentemail = "theonehayden@gmail.com";

// Check if the 
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    currentuser=  user.displayName;
    currentemail = user.email;
    console.log("Logged in:", currentuser, currentemail);
  }
  else{
    console.log("User is logged out");
    window.location.href="Login.html";
  }


});

$("#signout").click(function(){
  firebase.auth().signOut().then(()=>{
    console.log("User Sign Out");
    window.location.href="index.html";
  }).catch((error)=>{
    console.log(error,message);
  });
});






// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
