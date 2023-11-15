
window.addEventListener('scroll', function () {
    const sectionIds = ['description', 'features', 'screens', 'extras'];
    const menuLinks = document.querySelectorAll('nav ul li a'); 

    sectionIds.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);

        if (section) {
            const top = section.offsetTop;
            const height = section.clientHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {

                if (menuLinks[index] === menuLinks[2]) {
                    menuLinks[index].classList.add('active');
                } else {
                    menuLinks[index].classList.add('active');
                    menuLinks[index].textContent = sectionId.toUpperCase();        
                }

                
            } else {
                menuLinks[index].classList.remove('active');
                menuLinks[index].textContent = sectionId.toUpperCase();

            }
        }
    });
});




