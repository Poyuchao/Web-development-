
document.getElementById('slide-left').addEventListener('click', function () {
    // If slide1 is checked, do nothing. Otherwise, check slide1.
    if (!document.getElementById('slide1').checked) {
        document.getElementById('slide1').checked = true;
    }
});

document.getElementById('slide-right').addEventListener('click', function () {
    // If slide2 is checked, do nothing. Otherwise, check slide2.
    if (!document.getElementById('slide2').checked) {
        document.getElementById('slide2').checked = true;
    }
});
