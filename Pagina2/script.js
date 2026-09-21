document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('gift-box');
    const giftLid = document.getElementById('gift-lid');
    const clickMe = document.getElementById('click-me');
    const giftTitle = document.getElementById('gift-title');
    
    const theFlower = document.getElementById('the-flower');
    const continueBtn = document.getElementById('continue-btn');
    
    const giftWrapper = document.getElementById('gift-wrapper');
    const annivContent = document.getElementById('anniversary-content');
    const flowerContainer = document.getElementById('flower-container');
    
    let opened = false;

    giftBox.addEventListener('click', () => {
        if (opened) return;
        opened = true;
        
        // Abrir la tapa y ocultar textos iniciales
        if (giftLid) giftLid.classList.add('open');
        if (clickMe) clickMe.style.opacity = '0';
        if (giftTitle) giftTitle.style.opacity = '0';
        
        // Detener la animación de rebote de la caja para que la flor no se mueva
        if (giftBox) giftBox.style.animation = 'none';
        
        // Mostrar y animar LA flor amarilla saliendo de la caja
        setTimeout(() => {
            theFlower.style.display = 'block';
            theFlower.classList.add('animate');
            
            // Mostrar botón para continuar a la carta después de que la flor haya crecido
            setTimeout(() => {
                continueBtn.classList.remove('hidden');
            }, 3000);
        }, 300); // Pequeño retraso después de que se abre la tapa
    });

    // Evento del botón para pasar a la galería
    continueBtn.addEventListener('click', () => {
        giftWrapper.style.opacity = '0';
        
        setTimeout(() => {
            giftWrapper.style.display = 'none';
            annivContent.classList.remove('hidden');
            startFallingFlowers();
        }, 1500);
    });
    
    function startFallingFlowers() {
        function createBgFlower() {
            const flower = document.createElement('div');
            flower.classList.add('bg-flower');
            
            const leftPos = Math.random() * 100;
            const animDuration = Math.random() * 6 + 6;
            const size = Math.random() * 25 + 15;
            const delay = Math.random() * 2;

            flower.style.left = `${leftPos}vw`;
            flower.style.animationDuration = `${animDuration}s`;
            flower.style.animationDelay = `${delay}s`;
            flower.style.width = `${size}px`;
            flower.style.height = `${size}px`;

            flowerContainer.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, (animDuration + delay) * 1000);
        }

        for (let i = 0; i < 20; i++) {
            setTimeout(createBgFlower, Math.random() * 3000);
        }
        setInterval(createBgFlower, 800);
    }
});
