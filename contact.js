document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const serviceID = 'service_njtagp5'; // Replace with your EmailJS service ID
    const templateID = 'template_hefuchi'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message failed to send. Please try again.');
        });
});
