const toggleButton = document.getElementById('day-night');
const gitcontrol=document.getElementById("git");
const linkIcon=document.getElementById('linked');
const emailIcon=document.getElementById('e-mail');
// toggleButton.addEventListener('click', function() {}
// Event Listener: Using onclick is fine, but you could also use addEventListener for consistency with other event listeners you might have.
toggleButton.onclick= function() {
    document.body.classList.toggle("night-mode")
    if (document.body.classList.contains("night-mode")){
        toggleButton.src="../icon/icons8-sun-48.png";
        toggleButton.alt = "Switch to day mode";
        linkIcon.src="../icon/icons8-linkedin-50-night.png";
        emailIcon.src="../icon/icons8-gmail-50-night.png";
        gitcontrol.src="../icon/icons8-github-50.png";
    } else{
        toggleButton.src="../icon/icons8-moon-48.png";
        toggleButton.alt = "Switch to night mode";
        linkIcon.src="../icon/icons8-linkedin-logo-50.png";
        emailIcon.src="../icon/icons8-email-50.png";
        gitcontrol.src="../icon/icons8-github-50-day.png";
    }
}



/*fade in animation*/

document.addEventListener('DOMContentLoaded', () => {
    // Setup the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is visible on the screen
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger animations -> visible animation
                entry.target.classList.add('visible');
             } else {
                // Optional: Remove 'visible' class if you want animations to reset when the element goes out of view
                 entry.target.classList.remove('visible');
             }
         });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    // Observe elements that should trigger animations on scroll
    document.querySelectorAll('.about-me, .footer-icons, .footer-text, .contact-form-container').forEach(animationElement => {
        observer.observe(animationElement);
    });
});