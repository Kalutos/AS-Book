    // Fonction pour télécharger le CV au lieu de rediriger
    function scrollToDiv(divId) {
        // Récupérer l'élément de la div cible en utilisant son ID
        var div = document.getElementById(divId);

        // Faire défiler la page jusqu'à la div cible
        div.scrollIntoView({ behavior: "smooth" });
    };


    // Fonction pour télécharger le CV au lieu de rediriger
    document.getElementById('cv-download-link').addEventListener('click', function(event) {
        // Annuler le comportement par défaut du lien
        event.preventDefault();
        // Télécharger le fichier CV
        window.location.href = this.href;
    });
