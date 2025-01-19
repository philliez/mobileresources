// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Example of Basic Expandable Sections (Accordions) ---
/*
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
*/
