/*fade in animation*/

document.addEventListener('DOMContentLoaded', () => {
    // Setup the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is visible on the screen
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger animations -> visible animation
                entry.target.classList.add('visible');
             } 
                // Optional: Remove 'visible' class if you want animations to reset when the element goes out of view
                //  entry.target.classList.remove('visible');
          
         });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    // Observe elements that should trigger animations on scroll
    document.querySelectorAll('.image-section, .text-section-container, .project-section, .buttons, .skills-section, .footer-icons, .footer-text').forEach(animationElement => {
        observer.observe(animationElement);
    });
});

