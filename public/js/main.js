var extraLink = document.getElementById('extra');
var menu = document.getElementById('extra_menu_options');

extraLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!extraLink.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});