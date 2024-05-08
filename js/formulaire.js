    // Code JavaScript pour soumettre le formulaire via AJAX (facultatif)
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        fetch('votre_script_de_traitement.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            responseMessage.innerText = data;
            responseMessage.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            responseMessage.innerText = 'Une erreur s\'est produite. Veuillez réessayer.';
            responseMessage.style.display = 'block';
        });
    });