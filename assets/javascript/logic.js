// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlkYNeBhSsGT4LhzZRYjJV4GvTIhJkwHQ",
    authDomain: "rock-paper-s.firebaseapp.com",
    databaseURL: "https://rock-paper-s.firebaseio.com",
    projectId: "rock-paper-s",
    storageBucket: "",
    messagingSenderId: "15086273281"
};
firebase.initializeApp(config);

var database = firebase.database();
// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");
// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

    // If they are connected..
    if (snap.val()) {
        // Add user to the connections list.
        var con = connectionsRef.push(true);
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
    }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {
    // The number of online users is the number of children in the connections list.
    if (snap.numChildren() <= 2){
        // User is a valid player
    }

});

