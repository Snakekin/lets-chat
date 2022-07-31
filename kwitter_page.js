var  firebaseConfig = {
    apiKey: "AIzaSyCeoS5C7DUpQWWylnBZ-ed7PuZNsAQa6jo",
    authDomain: "lets-chat-117fb.firebaseapp.com",
    databaseURL: "https://lets-chat-117fb-default-rtdb.firebaseio.com",
    projectId: "lets-chat-117fb",
    storageBucket: "lets-chat-117fb.appspot.com",
    messagingSenderId: "1010755394248",
    appId: "1:1010755394248:web:0cd882dfd3ed2fbe9263fd"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value = ""; 
}
