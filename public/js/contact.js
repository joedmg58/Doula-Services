function submitBtnClick( event ){
    event.preventDefault();

    var contactInfo = {
        firstName: $('#firstName').val().trim(),
        lastName: $('#lastName').val().trim(),
        phoneNumber: $('#phoneNumber').val().trim(),
        email: $('#email').val().trim(),
        dueDate: $('#dueDate').val().trim(),
        message: $('#message').val().trim()
    };

    console.log( 'AJAX POST request to \'/api/contacts\'' );
    $.ajax({
        url: '/api/contacts',
        method: 'POST',
        data: contactInfo
    }).then( function( response ){
        console.log( 'AJAX data response = %s', response.data );
    } );
}


$(document).ready( function(){

    //register listener por submit button click
    $('submitBtn').on('click', submitBtnClick ); 

});