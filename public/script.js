// Simple interactivity: Alert on button click and link clicks
document.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Welcome to LifeSpeed Bank! Redirecting to sign-up page...');
    // In a real app, this could redirect to a sign-up form
});

document.getElementById('signUpLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Sign Up form would open here. (Placeholder for dynamic modal or page redirect)');
});

document.getElementById('signInLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Sign In form would open here. (Placeholder for dynamic modal or page redirect)');
});

// Add dynamic hover effect to service items (already in CSS, but JS for extra interactivity)
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e9ecef';
    });
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});