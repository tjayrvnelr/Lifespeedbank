// Sidebar toggle for desktop
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
mobileToggle.addEventListener('click', function() {
    sidebar.classList.toggle('mobile-open');
});

// Sign out button
document.getElementById('signOutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to sign out?')) {
        alert('Signing out...');
        window.location.href = '/public/index.html';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('mobile-open');
        }
    }
});

// Smooth scroll animation on load
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});