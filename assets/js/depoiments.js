document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.review-item');
    const totalItems = items.length;

    document.getElementById('nextBtn').addEventListener('click', function () {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add('active');
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        items[currentIndex].classList.add('active');
    });

    // Inicializar o carrossel
    items[currentIndex].classList.add('active');
});
