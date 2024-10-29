document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".animate-btn");
    buttons.forEach(button => {
        const originalText = button.textContent;
        button.onmouseover = () => button.textContent = button.dataset.hover;
        button.onmouseout = () => button.textContent = originalText;
    });

    const footerButtons = document.querySelectorAll(".footer-btn");
    footerButtons.forEach(btn => {
        btn.onclick = () => scrollToSection(btn.dataset.target);
    });
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Section with ID "${id}" not found.`);
    }
}

// Debounce function to limit the rate at which a function can fire.
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Example usage of debounce with a scroll event
window.addEventListener('scroll', debounce(() => {
    console.log('Scroll event triggered!');
}, 100));
