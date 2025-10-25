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
});

// ===== MENU MOBILE =====
function initMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainMenu = document.getElementById('mainMenu');

    if (mobileMenuBtn && mainMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', 
                mainMenu.classList.contains('active'));
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('#mainMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!mainMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainMenu.classList.remove('active');
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
