// Accessibility Menu Toggle
const accBtn = document.getElementById('accBtn');
const accMenu = document.getElementById('accMenu');
if (accBtn) {
    accBtn.addEventListener('click', () => {
        accMenu.classList.toggle('active');
    });
}

// Accessibility Functions
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function toggleLargeFont() {
    document.body.classList.toggle('large-font');
}

function resetAcc() {
    document.body.classList.remove('high-contrast');
    document.body.classList.remove('large-font');
}

// Close accessibility menu on click outside
document.addEventListener('click', (e) => {
    if (accMenu && !accMenu.contains(e.target) && e.target !== accBtn) {
        accMenu.classList.remove('active');
    }
});

// Active Link Highlighting (Current Page)
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
