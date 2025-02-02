let slideIndex = 0;
let imageSlideIndex = 0;
let bgSlideIndex = 0;

// Function to cycle through text slides
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to cycle through image slides
function showImageSlides() {
    let imgSlides = document.getElementsByClassName("image-slide");
    for (let i = 0; i < imgSlides.length; i++) {
        imgSlides[i].style.display = "none";
    }
    imageSlideIndex++;
    if (imageSlideIndex > imgSlides.length) { imageSlideIndex = 1 }
    imgSlides[imageSlideIndex - 1].style.display = "block";
    setTimeout(showImageSlides, 3000); // Change image slide every 3 seconds
}

// Function to cycle through background slides
function showBackgroundSlides() {
    let bgSlides = document.getElementsByClassName("bg-slide");
    for (let i = 0; i < bgSlides.length; i++) {
        bgSlides[i].classList.remove("active-bg");
    }
    bgSlideIndex++;
    if (bgSlideIndex > bgSlides.length) { bgSlideIndex = 1 }
    bgSlides[bgSlideIndex - 1].classList.add("active-bg");
    setTimeout(showBackgroundSlides, 5000); // Change background slide every 5 seconds
}

// Initialize all slideshows
showSlides();
showImageSlides();
showBackgroundSlides();