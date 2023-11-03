document.addEventListener("DOMContentLoaded", function() {
    // Add a class to trigger the transition effect after the page is loaded
    document.querySelector(".section1").classList.add("loaded");
    const scrollButtons = document.querySelectorAll('.scroll-button');

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

slidePics = [
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/pizza-6_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4985_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_2008_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4976_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5006_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4987_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4989_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4992_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4999_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5014_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5031_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5036_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5037_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5046_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5047_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5054_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5084_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5101_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/p1100005_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/p1100206_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/pizza-2_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/pizza-4_large.jpg"
]

function slideShow() {
    var slide = document.getElementById("slide");
    var i = 0;
    setInterval(function() {
        slide.src = slidePics[i];
        i = i + 1;
        if (i == slidePics.length) {
            i = 0;
        }
    }, 3000);
}

slideShow();

