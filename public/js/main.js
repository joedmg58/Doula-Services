$(document).ready(function () {

    var homeMenu = " ";
    var aboutMeMenu = "A propos";
    var readingsMenu = "Livres & Autres Ressources";
    var translation = "English";
    
      
    
    
    $("#translation-button").on("click",function translate(){
            console.log("button works");
        $("#home-link").text("Accueil");
        
        console.log(homeMenu);
        $("#about-me-link").text(aboutMeMenu);
        
        console.log(aboutMeMenu);
        $("#readings-link").text(readingsMenu);

        console.log(readingsMenu);
        $("#translation-button").text(translation);
        console.log("Translated menu in French.")
        
    });

    
});