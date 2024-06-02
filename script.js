// JavaScript for portfolio website

// Form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Send the form data (you can implement your own logic here)
        // For demonstration purposes, let's just log the data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
