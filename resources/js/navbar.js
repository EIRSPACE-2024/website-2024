/* ------------------------------------------------------------------------- */
/*   TO PUT AWAY THE NAVBAR WHEN SCROLLING DOWN, AND RETRIEVE IT WHEN S UP   */
/* ------------------------------------------------------------------------- */

let lastScrollTop = 0;
let lastClick = 0;
const navbar = document.getElementById('navbar');
const dropdownLinks = document.querySelector('.dropdown-links');

/* ------------------------------------------------------------------------- */

window.addEventListener('click', () => {
    if (lastClick == 0) {
        lastClick += 1;
        return;
    }

    if (dropdownLinks.classList.contains('active')) {
        lastClick = 0;
        closeMenu();
    }
});

/* ------------------------------------------------------------------------- */

window.addEventListener('scroll', () => {
    // Close the possible drop down menu.
    if (dropdownLinks.classList.contains('active')) {
        lastClick = 0;
        closeMenu();
    }

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Bottom.
        navbar.style.transform = 'translateY(-140%)';


    } else {
        // Upper.
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

/* ------------------------------------------------------------------------- */
/*                      DROP DOWN MENU ANIMATION                             */
/* ------------------------------------------------------------------------- */

function toggleMenu() {
    if (dropdownLinks.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    dropdownLinks.classList.add('active');
}

function closeMenu() {
    dropdownLinks.classList.add('closing');
    
    setTimeout(() => {
        dropdownLinks.classList.remove('active', 'closing');
    }, 200);
}

/* ------------------------------------------------------------------------- */

