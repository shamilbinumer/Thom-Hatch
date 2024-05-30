

// Get all small images
const smallImages = document.querySelectorAll('.prod-small-img img');
// Get the big image element
const bigImage = document.querySelector('.big-image img');

// Add click event listener to each small image
smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', () => {
        // Remove the 'active' class from all small images
        smallImages.forEach(img => img.parentElement.classList.remove('active'));
        // Add the 'active' class to the clicked small image parent element
        smallImg.parentElement.classList.add('active');
        // Set the src attribute of the big image to the clicked small image src
        bigImage.src = smallImg.src;
    });
});

function increment() {
    var quantityElement = document.getElementById("quantity");
    var quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
}

// Function to decrement the quantity
function decrement() {
    var quantityElement = document.getElementById("quantity");
    var quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;
    }
}

function showDescription(element) {
    document.getElementById("description").style.display = "block";
    document.getElementById("additionalInformation").style.display = "none";
    setActive(element);
}

function showAdditionalInformation(element) {
    document.getElementById("description").style.display = "none";
    document.getElementById("additionalInformation").style.display = "block";
    setActive(element);
}

function setActive(element) {
    var navItems = document.querySelectorAll('.additional-nav-items span');
    navItems.forEach(function(item) {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var hiddenContent = button.previousElementSibling;
            if (hiddenContent && hiddenContent.classList.contains('hidden-content')) {
                hiddenContent.style.display = 'block'; // Show the full content
                button.parentNode.removeChild(button); // Remove the "Read More" link
            }
        });
    });
});
