/*
** Train Schedule App
** Application for Homework Week 7
** Joseph Ragno, Jose De Las Salas, Raul and Joed Machado. 2018 UM Coding Boot Camp.
*/

//some global variables
addButtonId = '#submitBtn'; //The ID name for the button designated to add train schedule
bodyTableId ='#tableBody'; //The ID of the table body where the train schedule is shown
trainNameInput = '#trainName'; //ID of the input text to collect the train name
trainDestinationInput = '#destination'; // id of the destination input text
trainFirstTimeInput = '#firstTrain'; // id of the first time input
trainFrequencyInput = '#frequency'; // id of the frequency input

//It will start when the document will finish to load
$(document).ready( function() {

    // Initialize Firebase
    var databaseName = 'trainsystemhw'; //we need to fill this

    var config = {
        apiKey: "AIzaSyBdoJiMy_PFktLmrveH0A2nbbj8wtvur_o", //we need to fill this
        authDomain: databaseName + ".firebaseapp.com",
        databaseURL: "https://" + databaseName + ".firebaseio.com",
        projectId: databaseName,
        storageBucket: "",
        messagingSenderId: "695028065097" //we need to fill this 
    };

    firebase.initializeApp(config);

    //Reference to the train schedule database
    var fbTrainSchedule = firebase.database();
    console.log( fbTrainSchedule );

    //Registering onclick event for adding train
    $( addButtonId ).click( addTrain );

    //Function for adding a train to the database
    function addTrain( event ) {
        event.preventDefault();
    
        var trainName = $( trainNameInput ).val().trim();
        var trainDestination = $( trainDestinationInput ).val().trim();
        var trainFirstTime = moment( $( trainFirstTimeInput ).val().trim(), 'MM/DD/YYYY' ).format('HH:mm');
        var trainFrequency = $( trainFrequencyInput ).val().trim();
    
        fbTrainSchedule.ref().push( {
            name: trainName,
            destination: trainDestination,
            first: trainFirstTime,
            frequency: trainFrequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        } );
    
        clearInputs();
    }

    //clear all the text inputs of the form
    function clearInputs() {
        $( trainNameInput ).val('');
        $( trainDestinationInput ).val('');
        $( trainFirstTimeInput ).val('');
        $( trainFrequencyInput ).val('');
    }

    //Its triggers when a new child (element) to the database is added
    fbTrainSchedule.ref().on( "child_added", function( snapshot ) {
        //get values from snapshot
        var name = snapshot.val().name;
        var dest = snapshot.val().destination;
        var first = snapshot.val().first;
        var freq = parseInt( snapshot.val().frequency );
        //calculated values
        var departureTimes = Math.abs( Math.ceil( moment( first, 'HH:mm').diff( moment(), 'minutes' ) / freq ) );
        console.log(departureTimes);
        var na = moment( first, 'HH:mm').add( ((departureTimes+1) * freq), 'minutes' );
        var nextArr = moment( na, 'HH:mm' ).format('hh:mm a');
        var minAway = moment( na, 'HH:mm' ).diff( moment(), 'minutes') + 1;

        //add data to the table
        var row = $('<tr>').appendTo( $( bodyTableId ) );
        $('<td>').text( name ).appendTo( row );
        $('<td>').text( dest ).appendTo( row );
        $('<td>').text( freq ).appendTo( row );
        $('<td>').text( nextArr ).appendTo( row );
        $('<td>').text( minAway ).appendTo( row );

    } );

} );