document.addEventListener("DOMContentLoaded", () => {
    // Hero background image rotation
    const images = [
        "https://raw.githubusercontent.com/Lu1sValenc1a/Comex_tarea/d46f5a2e2fccd5e20cc10a8a04fa00bd70dabed4/src/img/example1.jpg",
        "https://raw.githubusercontent.com/Lu1sValenc1a/Comex_tarea/d46f5a2e2fccd5e20cc10a8a04fa00bd70dabed4/src/img/example2.jpg"
    ];
    let index = 0;
    const heroSection = document.querySelector(".hero");

    // Función para ajustar el fondo del hero
    function adjustHeroBackground() {
        heroSection.style.backgroundImage = `url(${images[index]})`;
        heroSection.style.backgroundSize = "cover"; // Ajusta la imagen para cubrir el contenedor
        heroSection.style.backgroundPosition = "center"; // Centra la imagen
        heroSection.style.backgroundRepeat = "no-repeat"; // Evita que la imagen se repita
    }

    // Cambiar la imagen de fondo
    function changeBackground() {
        index = (index + 1) % images.length;
        adjustHeroBackground();
    }

    // Ajustar el fondo inicial
    adjustHeroBackground();

    // Cambiar la imagen cada 5 segundos
    setInterval(changeBackground, 5000);

    // Cart functionality
    const cartButton = document.querySelector('.cart-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    let cartCount = 0;

    function updateCart() {
        cartButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Carrito (${cartCount})
        `;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            cartCount++;
            updateCart();

            // Animación de feedback
            const btn = e.currentTarget;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        });
    });
});
