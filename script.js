document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function updateButtons() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;
    }

    showSlide(currentSlide);
    updateButtons();

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
            updateButtons();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
            updateButtons();
        }
    });
});


// --- Example of Basic Expandable Sections (Accordions) ---

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const accordionContent = this.nextElementSibling;

        // Close any other open accordion items
        accordionHeaders.forEach(otherHeader => {
            if(otherHeader !== this && otherHeader.parentElement.classList.contains('open')) {
                otherHeader.parentElement.classList.remove('open');
                otherHeader.nextElementSibling.style.maxHeight = null;
            }
        })

        if (accordionItem.classList.contains('open')) {
            accordionItem.classList.remove('open');
            accordionContent.style.maxHeight = null;
        } else {
            accordionItem.classList.add('open');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
    });
});

