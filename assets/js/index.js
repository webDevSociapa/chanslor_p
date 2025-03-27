document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;
    const totalSlides = radioButtons.length;

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        radioButtons[currentIndex].checked = true;
        slides.style.transform = `translateX(-${currentIndex * 50}%)`;
    }



    let slideInterval = setInterval(autoSlide, 5000);


    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            clearInterval(slideInterval);
            currentIndex = index;
            slides.style.transform = `translateX(-${currentIndex * 50}%)`;
            slideInterval = setInterval(autoSlide, 5000);
        });
    });

 
    
});
