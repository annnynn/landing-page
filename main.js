/*button*/
const navToggle = document.querySelector('.mobile-nav-toggle');
/*nav*/
const primaryNavigation = document.querySelector(
    '.primary-navigation');


navToggle.addEventListener('click', () => {
    primaryNavigation.hasAttribute('data-visible') ?
        navToggle.setAttribute('aria-expanded', false) :
        navToggle.setAttribute('aria-expanded', true);
    primaryNavigation.toggleAttribute("data-visible");
});