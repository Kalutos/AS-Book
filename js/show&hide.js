var position_div_about_us = $('#about').position().top;
$('#hide').hide();

// quand on scrolle
$(window).scroll(function() {
    // On compare la position de la barre de 
    // défilement en hauteur par rapport au div
    // about_us
    // Si la barre de défilement est plus basse
    // on fait apparaître le bouton #hide
    if ($(this).scrollTop() >= position_div_about_us ) {
        $('#hide').fadeIn();
    } else {
    // sinon on le cache
        $('#hide').fadeOut();
    }
});


// Quand on clique sur le bouton #hide
$('#hide').toggle(function() {
    
    // on décale la sidebar de 232px vers la gauche
    $('#sidebar').animate({left:'-232'});
    
    // on redécale le bouton #hide de 70px vers la droite
    $('#hide').animate({right:'-70'});
    
    // on lui ajoute la classe .show
    $('#hide').addClass('show');
    
    // on décale le contenu vers la gauche
    $('.content').animate({'margin-left':'25%'});

}, function() {
    
// Quand on re-clique sur le bouton show
// on remet les éléments à leur place initiale
    $('#sidebar').animate({left:'0'});
    $('#hide').animate({right:'-30'});
    
// on retire la classe .show au bouton #hide
    $('#hide').removeClass('show');
    
// on remet la marge du bloc à sa valeur initiale
    $('.content').animate({'margin-left':'365'});

});