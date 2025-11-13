// ===== CONFIGURAÇÕES GLOBAIS =====
const CONFIG = {
    headerScrollThreshold: 100,
    animationThreshold: 0.1,
    animationRootMargin: '0px 0px -50px 0px'
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initSmoothScroll();
    initAnimations();
    initHeaderScroll();
    setActiveNavLink();
    // COMENTÁRIO DE MANUTENÇÃO: Inicializa o carrossel da home.
    // A função initCarrossel está definida em assets/js/carrossel.js
    if (typeof initCarrossel === 'function') {
        initCarrossel();
    }
});

// ===== MENU MOBILE CORRIGIDO =====
function initMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('nav');
    const navOverlay = document.createElement('div');
    
    // Adiciona overlay
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    if (mobileMenuBtn && mainMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mainMenu.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = mainMenu.classList.contains('active') ? 'hidden' : '';
            
            // Atualizar atributo ARIA
            mobileMenuBtn.setAttribute('aria-expanded', 
                mainMenu.classList.contains('active'));
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Fechar menu ao clicar no overlay
        navOverlay.addEventListener('click', () => {
            mainMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });

        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mainMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Fechar menu com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// ===== SCROLL SUAVE =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Atualizar URL sem recarregar a página
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ===== ANIMAÇÕES =====
function initAnimations() {
    const observerOptions = {
        threshold: CONFIG.animationThreshold,
        rootMargin: CONFIG.animationRootMargin
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animar elementos filhos em sequência
                if (entry.target.dataset.animateChildren) {
                    const children = entry.target.querySelectorAll('.fade-in');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observar elementos com animação
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Verificar elementos já visíveis na carga
    checkVisibleElements();
}

function checkVisibleElements() {
    document.querySelectorAll('.fade-in').forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > CONFIG.headerScrollThreshold) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'none';
        }
    });
}

// ===== NAVEGAÇÃO ATIVA =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== LOADING STATES =====
function setLoadingState(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
    } else {
        button.disabled = false;
        button.innerHTML = button.dataset.originalText;
    }
}

// ===== UTILITÁRIOS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Exportar funções para uso global
window.Relevo = {
    setLoadingState,
    debounce
};
