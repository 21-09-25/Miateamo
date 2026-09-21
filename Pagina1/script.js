document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');
    const heartColors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c6'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Randomize position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Randomize animation duration
        const duration = Math.random() * 4 + 4; // between 4s and 8s
        heart.style.animationDuration = duration + 's';
        
        // Randomize size
        const size = Math.random() * 15 + 10; // between 10px and 25px
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        // Randomize color
        const color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.backgroundColor = color;
        // Pseudo elements colors will inherit
        
        // Randomize delay
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, duration * 1000 + 2000);
    }

    // Create hearts periodically
    setInterval(createHeart, 300);

    // Initial batch of hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, Math.random() * 2000);
    }
});
