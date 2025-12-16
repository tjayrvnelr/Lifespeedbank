document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Placeholder for sign-in logic (e.g., API call)
    alert('Sign-in successful!');
    // Redirect to dashboard or main page
    window.location.href = '/public/pages/Dashboard/Dashboard.html';
});