const searchIcon = document.getElementById('search-img');
const searchArea = document.querySelector('.search-area'); 
const inputArea = document.querySelector('.input-area');

let searchAreaVisible = false;

searchIcon.addEventListener('click', function() {
    if (!searchAreaVisible) {
        searchAreaVisible = true;
        searchArea.style.display = 'grid';
    } else {
        searchAreaVisible = false;
        searchArea.style.display = 'none';
    }
});


const top_nav = document.querySelector('.top');
const bottom_nav = document.querySelector('.bottom');


function stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) bottom_nav.classList.add('sticky');
    else bottom_nav.classList.remove('sticky');
};

const topObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});

topObserver.observe(top_nav);