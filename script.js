// Create a 'Back to Top' button element
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '14px';
backToTopButton.style.backgroundColor = '#E91E63';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.zIndex = '1000';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust the scroll threshold as needed
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
