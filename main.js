
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// this function displays the first image in the slideshow when the page loads

var slideIndex = 1;
showSlides(slideIndex);

// this function changes the slide when the left or right arrows are clicked

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// this function changes the slide when the dots are clicked function currentSlide(n)
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");

    var dots = document.getElementsByClassName("dot"); 

    if (n> slides.length){slideIndex = 1};

    if(n < 1) {slideIndex = slides.length};

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}

document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")
    //here we state that if the click happens on the cancel button OR anywhere outside of the contact form AND the click does not happen on the contact button or any of the contact links then call the closeform function
    ){
        closeForm()
    }
}, false )

