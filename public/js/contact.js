function submitBtnClick( event ){
    
    event.preventDefault();

    var htmlFirstName = $('#firstName');
    var htmlLastName = $('#lastName');
    var htmlPhoneNumber = $('#phoneNumber');

    //validate inputs, if not valid don't send POST request
    if ( !contactForm.valid() ) {
        $('#errorMsg').text('Enter valid data !');
        return;
    } else {
        $('#errorMsg').text('');
    }

    //the properties of 'contactInfo' object has to match with table 'contacts' field names
    var contactInfo = {
        clientName: htmlFirstName.val().trim(),
        clientLastName: htmlLastName.val().trim(),
        clientPhoneNumber: htmlPhoneNumber.val().trim(),
        clientEmail: $('#email').val().trim(),
        clientDueDate: $('#dueDate').val().trim(),
        clientMessage: $('#message').val().trim()
    };

    console.log( 'AJAX POST request to \'/api/contacts\'' );
    $.ajax('/api/contacts', {
        type: 'POST',
        data: contactInfo
    }).then( function( response ){
        console.log( 'AJAX data response = %s', response.data );
        location.reload(); //reloads the current page
    } );
}


$(document).ready( function(){

    //Reference to contact form for validation process
    var contactForm = $( '#contactForm' );
    contactForm.Validate();

    //register listener por submit button click
    $('#submitBtn').on('click', submitBtnClick ); 

});