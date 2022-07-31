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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}