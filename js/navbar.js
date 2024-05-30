// Get the current URL
var currentURL = window.location.href;

// Check if the URL contains 'all-products.html'
if (currentURL.includes('all-products.html')) {
    // If the URL matches, display the search bar
    document.querySelector('.searchBar').style.display = 'block';
}


// -----------------mobile-nav--------------
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
// -----------------mobile-nav--------------