// Create on click jQuery function which identifies specific button class and grabs corresponding ID which it then stores into an array called userHistory.  userHistory is then used to update database through firebase. userHistory contains no more than 5 varibales at which point it will then pop() the last variable in the array and push() the new one.  This information is then updated instantly from firebase to history section of webpage.


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAeB0cUPLbZ8YhhMLH3KC0gWQ4CCeDjmkA",
    authDomain: "team5project-168df.firebaseapp.com",
    databaseURL: "https://team5project-168df.firebaseio.com",
    projectId: "team5project-168df",
    storageBucket: "team5project-168df.appspot.com",
    messagingSenderId: "739426590803"
};
firebase.initializeApp(config);


// Database reference
var database = firebase.database();

// Initial arrays to store user data
var userHistory = [];
var watchLater = [];


$(document).ready(function() {

// Grab play button IDs
  $(".btn.btn-default.btn-sm").click(function() {
    alert(this.id);
  });

 //ini function to load youtube api library and set apikey
 function init() {

   gapi.client.setApiKey("AIzaSyB7k3BdTyD9f5tWCsHU32gYD7rPOqY-IeQ");

   gapi.client.load("youtube", "v3", function() {

   });

 };

// on click for play button
$(".btn btn-default btn-sm").on("click", function() {
    // Grabs input from user
    var userPicks = $(".btn.btn-default.btn-sm").val().trim();
    // Upload data to database
    database.ref().push(userPicks);

  });
});



//Firebase event for addings vid History to database
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    //variable storing
    var userName = childSnapshot.val().name;
    var userHistory = childSnapshot.val().history;



});


/*

buttonIDs [
#MhkGQAoc7bc value='click'.btn.btn-default.btn-sm,
#vZBCTc9zHtI value='click'.btn.btn-default.btn-sm,
#XL9Ri8pO68w value='click'.btn.btn-default.btn-sm,
#hMxGhHNOkCU value='click'.btn.btn-default.btn-sm,
#Ukg_U3CnJWI value='click'.btn.btn-default.btn-sm,
#_cLvpJY2deo value='click'.btn.btn-default.btn-sm,
#yQaAGmHNn9s value='click'.btn.btn-default.btn-sm,
#3JluqTojuME value='click'.btn.btn-default.btn-sm,
#2MsN8gpT6jY
];

====================================

var quotations = [];

$("#addquotation").click(function () {
        debugger;
        var data = {};
        var itemname = $("#itemname").val();
        var cost =parseFloat( $("#cost").val());
        var notes = $("#notes").val();
        var date = $("#date").val();


        data.Item = itemname;
        data.Cost = cost;
        data.Notes = notes;
        data.Date = date;

        quotations.push(data);
)};




*/