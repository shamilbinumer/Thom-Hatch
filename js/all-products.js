// function filterSelection(category) {
//     // Remove the 'selected' class from all categories
//     document.querySelectorAll('.prod-nav p').forEach(item => {
//         item.classList.remove('selected');
//     });

//     // Add the 'selected' class to the clicked category
//     let selectedCategory = document.querySelector('.prod-nav p[data-category="' + category + '"]');
//     if (selectedCategory) {
//         selectedCategory.classList.add('selected');
//     }

//     let cards = document.querySelectorAll('.prod-card');
//     let hiddenIndexes = [];
//     cards.forEach((card, index) => {
//         if (category === 'all' || card.querySelector('.category').innerText.toLowerCase() === category) {
//             card.parentNode.style.display = 'block';
//         } else {
//             card.parentNode.style.display = 'none';
//             hiddenIndexes.push(index);
//         }
//     });
//     // Reinitialize the slick carousel
//     $('.slick-carousel').slick('slickRemove', hiddenIndexes);
//     $('.slick-carousel').slick('slickUnfilter');
//     $('.slick-carousel').slick('slickFilter', ':not(.slick-cloned)');
//     $('.slick-carousel').slick('setPosition');
// }


 