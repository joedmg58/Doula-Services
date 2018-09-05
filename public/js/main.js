$(document).ready(function () {

    // var homeMenu = " ";
    // var aboutMeMenu = "A propos";
    // var readingsMenu = "Livres & Autres Ressources";
    // var translation = "English";
    
      
    
    
    // $("#translation-button").on("click",function translate(){
    //         console.log("button works");
    //     $("#home-link").text("Accueil");
        
    //     console.log(homeMenu);
    //     $("#about-me-link").text(aboutMeMenu);
        
    //     console.log(aboutMeMenu);
    //     $("#readings-link").text(readingsMenu);

    //     console.log(readingsMenu);
    //     $("#translation-button").text(translation);
    //     console.log("Translated menu in French.")
        
    // });

    // Get the modal
var modal = document.getElementById('adminLoginModal');

// Get the button that opens the modal
var btn = document.getElementById("AdminBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    console.log("I opened my modal");
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});

