document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', function(event) {
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        
        // Basic validation
        if(username.trim() === '') {
            alert('Please enter a username');
            event.preventDefault(); // Stop form submission
            return;
        }
        
        if(password.length < 6) {
            alert('Password must be at least 6 characters');
            event.preventDefault();
            return;
        }
        
        // If validation passes, the form will submit normally
    });
});