

const toggleButton = document.getElementById('day-night');

// toggleButton.addEventListener('click', function() {}
// Event Listener: Using onclick is fine, but you could also use addEventListener for consistency with other event listeners you might have.
toggleButton.onclick= function() {
    document.body.classList.toggle("night-mode")
    if (document.body.classList.contains("night-mode")){
        toggleButton.src="../icon/icons8-sun-48.png";
        toggleButton.alt = "Switch to day mode";
    }  else{
        toggleButton.src="../icon/icons8-moon-48.png";
        toggleButton.alt = "Switch to night mode";
    }
}

