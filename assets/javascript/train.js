var firebaseConfig = {
    apiKey: "AIzaSyAX6od0OHtQlYpCIH12Ci4cdNmLIJM_flU",
    authDomain: "thomas-train-schedule.firebaseapp.com",
    databaseURL: "https://thomas-train-schedule.firebaseio.com",
    projectId: "thomas-train-schedule",
    storageBucket: "thomas-train-schedule.appspot.com",
    messagingSenderId: "526250712769",
    appId: "1:526250712769:web:661f2fbcf3a2448d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   create a variable to store firebase data
var database = firebase.database();

// the entire program is contained within the submit button for adding new trains
$("#add-train-btn").on("click", function(event) {

    event.preventDefault();
    // so that the page won't reload upon form submission

    // grabs user input
    var trnName = $("#train-name-input").val().trim();
    var trnDestination = $("#destination-input").val().trim();
    var trnFirst = moment($("#first-train-input").val().trim(), "HH:mm").format("X");
    var trnFreq = $("#frequency-input").val().trim();

    // local "temporary" object for holding the train values
    var newTrain = {
        name: trnName,
        destination: trnDestination,
        firstTrain: trnFirst,
        frequency: trnFreq,
    };

    // uploads new train data to the database
    database.ref().push(newTrain);

    // Now we test for the values
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequenc);

})