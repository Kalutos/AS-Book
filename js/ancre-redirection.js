function scrollToDiv(divId) {
    // Récupérer l'élément de la div cible en utilisant son ID
    var div = document.getElementById(divId);

    // Faire défiler la page jusqu'à la div cible
    div.scrollIntoView({ behavior: "smooth" });
}