var firebaseConfig = {
      apiKey: "AIzaSyAxrFX-ytpCE57rLMn-T3Nh3j6Y0GGou8c",
      authDomain: "pro-kwitter.firebaseapp.com",
      databaseURL: "https://pro-kwitter-default-rtdb.firebaseio.com",
      projectId: "pro-kwitter",
      storageBucket: "pro-kwitter.appspot.com",
      messagingSenderId: "334075946539",
      appId: "1:334075946539:web:cba484fc08dfa342a62c6e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("Kwitter Website User Name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      var room_key = document.getElementById("room_name").value;

      firebase.database().ref("kwitter/").child(room_key).update({
            purpose: "adding room key",
            status: "under development"
      });

      localStorage.setItem("Kwitter Room_Key", room_key);

      window.location.replace("chat.html");
}

function getData() {
      firebase.database().ref("kwitter/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room names ", Room_names);

                  var row = "<div class='room_name' id=" + Room_names + " onclick='redirectTo(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
      });});
}

function redirectTo(name) {
      console.log(name);
      localStorage.setItem("Kwitter Room_Key", name);
      window.location.replace("chat.html");
}

getData();

function log_out() {
      localStorage.removeItem("Kwitter Website User Name");
      localStorage.removeItem("Kwitter Room_Key");
      window.location.replace("index.html");
}