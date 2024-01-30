function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    
    sidebar.style.display = 'flex'; // Show sidebar
    hamburgerMenu.style.display = 'none'; // Hide hamburger icon
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    sidebar.style.display = 'none'; // Hide sidebar
        // Show the hamburger menu only if the screen width is 932px or less
    if (window.innerWidth <= 932) {
        hamburgerMenu.style.display = 'block';
    }
}

function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    if (window.innerWidth > 932) {
        // If the screen is wider than 932px, ensure sidebar is hidden and the hamburger menu is not shown
        sidebar.style.display = 'none';
        hamburgerMenu.style.display = 'none';
    } else {
        // If the screen is narrow, show the hamburger menu only if the sidebar is not shown
        if (sidebar.style.display === 'none') {
            hamburgerMenu.style.display = 'block';
        }
    }
}

// Add event listeners for load and resize
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

