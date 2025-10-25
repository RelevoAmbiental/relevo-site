// ===== INICIALIZAÇÃO DO CARROSSEL =====
function initCarrossel() {
    // Verificar se o Swiper está disponível
    if (typeof Swiper === 'undefined') {
        console.warn('Swiper não carregado. Carregando dinamicamente...');
        loadSwiper();
        return;
    }
    
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function() {
                console.log('Carrossel inicializado com sucesso');
            },
            slideChange: function() {
                // Atualizar indicadores se necessário
            }
        }
    });
    
    return swiper;
}

// ===== CARREGAMENTO DINÂMICO DO SWIPER =====
function loadSwiper() {
    // Carregar CSS do Swiper
    const swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);
    
    // Carregar JS do Swiper
    const swiperJS = document.createElement('script');
    swiperJS.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    swiperJS.onload = function() {
        console.log('Swiper carregado dinamicamente');
        initCarrossel();
    };
    document.head.appendChild(swiperJS);
}

// ===== CONTROLES DO CARROSSEL =====
function pauseCarrossel(swiper) {
    if (swiper) {
        swiper.autoplay.stop();
    }
}

function playCarrossel(swiper) {
    if (swiper) {
        swiper.autoplay.start();
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.hero-carrossel');
    if (carrossel) {
        initCarrossel();
    }
});

// Exportar para uso global
window.Carrossel = {
    init: initCarrossel,
    pause: pauseCarrossel,
    play: playCarrossel
};
