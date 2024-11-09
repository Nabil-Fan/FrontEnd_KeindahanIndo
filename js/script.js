

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider img');
const totalSlides = slides.length;

document.querySelector('.prev-slide').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.next-slide').addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Initialize first slide as active
slides[currentSlide].classList.add('active');

// Interactive Modal
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModalButton = document.querySelector('.close-button');

function openModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Attach event listener to close button
closeModalButton.addEventListener('click', closeModal);

// Example function to open modal with custom content
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.getAttribute('data-content');
        openModal(content);
    });
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
