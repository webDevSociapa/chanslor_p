// Add JS (index.js)

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.navigation');
    const totalSlides = document.querySelectorAll('.slide').length;
    let index = 0;

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        }
        dotsContainer.children[0].classList.add('active');
    }

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        dotsContainer.children[index].classList.add('active');
    }

    function autoSlide() {
        index = (index + 1) % totalSlides;
        updateSlide();
    }

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            index = parseInt(e.target.dataset.index);
            updateSlide();
        }
    });

    createDots();
    setInterval(autoSlide, 3000);
});
