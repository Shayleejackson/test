// script.js

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const confirmationMessage = `Thank you, ${name}! We have received your message and will get back to you at ${email}.`;
    document.getElementById('contact-confirmation').innerText = confirmationMessage;
    document.getElementById('contact-form').reset();
});
