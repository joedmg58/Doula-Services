function addData2Table( data ) {
    var table = $('#clientTable');

    for( var i=0; i<data.length; i++){

        var row = $('<tr>');
        var col1 = $('<td>').text( data[i].clientName );
        var col2 = $('<td>').text( data[i].clientLastName );
        var col3 = $('<td>').text( data[i].clientPhoneNumber );
        var col4 = $('<td>').text( data[i].clientEmail );

        var d = new Date( data[i].clientDueDate );
        var col5 = $('<td>').text( d.toLocaleDateString() );

        var col6 = $('<td>').text( data[i].clientWeeks );
        var col7 = $('<td>').text( data[i].clientHasAppointment );
        var col8 = $('<td>').text( data[i].clientContactOption );
        var col9 = $('<td>').html( '<button type="button" class="btn btn-secondary shModal" '+
                                   'data-name="'+ data[i].clientName + '"' + 
                                   'data-id="'+ data[i].id + '">View Message</button>' );

        row.append( col1 );
        row.append( col2 );
        row.append( col3 );
        row.append( col4 );
        row.append( col5 );
        row.append( col6 );
        row.append( col7 );
        row.append( col8 );
        row.append( col9 );

        table.append( row );

        //registering an event listening for button click
        //this handler has to be declared here after the button class has created
        $(".shModal").on('click', showMessage );

    }
}

function showMessage( event ) {
    console.log('Show message button pressed');

    var name = $(this).attr('data-name');
    var id = $(this).attr('data-id');

    $('#cli-name').text( name );

    //make ajax request GET for obtain the message from the client   <--------------------- working here
    console.log( 'AJAX GET request to \'/api/contacts:%s\'', id );
    $.ajax('/api/contacts/'+id, {
        type: 'GET'
    }).then( function( response ){
        console.log( 'AJAX data response = %s', response );
        
        $('#cli-msg').text( response.clientMessage );

        //show modal dialog
        $('#messageModal').modal({
            show: true,
            keyboard: true
        });

    });

    
}

$(document).ready( function(){

    console.log( 'AJAX GET request to \'/api/contacts\'' );
    $.ajax('/api/contacts', {
        type: 'GET'
    }).then( function( response ){
        console.log( 'AJAX data response = %s', response );
        addData2Table( response );
    });

    
     

});

