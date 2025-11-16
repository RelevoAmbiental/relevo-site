// ===== INICIALIZAÇÃO DO CARROSSEL =====
function initCarrossel() {
    // Verificar se o Swiper está disponível
    // A verificação de carregamento dinâmico foi removida, pois o Swiper é carregado via CDN no index.html.
    
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

// O carregamento dinâmico do Swiper foi removido, pois o Swiper é carregado via CDN no index.html.

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

// A inicialização do carrossel agora é feita no script.js para garantir a ordem correta de execução.

// Exportar para uso global
window.Carrossel = {
    init: initCarrossel,
    pause: pauseCarrossel,
    play: playCarrossel
};
