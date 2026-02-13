/* === Header Injection === */
function initHeader() {
    const currentPath = window.location.pathname;
    const headerEl = document.getElementById('header');
    if (!headerEl) return;

    headerEl.innerHTML = `
    <header id="site-header" class="fixed top-0 w-full z-50 transition-all duration-500 bg-white/80 py-6">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="flex items-center gap-3 z-50">
                <img src="/images/logo.avif" alt="Chakras Harmony" class="h-12 w-auto object-contain" />
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden lg:flex items-center gap-8">
                <a href="/" class="nav-link text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-chakra-primary transition-colors" data-page="/">Accueil</a>

                <!-- Dropdown Soins -->
                <div class="relative group">
                    <button class="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 group-hover:text-chakra-primary transition-colors py-4">
                        Soins Holistiques
                        <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div class="bg-white border border-gray-100 shadow-2xl rounded-xl py-6 min-w-[220px] relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-full h-1 bg-chakra-accent"></div>
                            <a href="/reiki/" class="nav-link block w-full text-left px-8 py-3 text-sm font-serif italic text-chakra-primary hover:bg-gray-50 hover:text-chakra-accent transition-all border-b border-gray-50" data-page="/reiki/">Reiki Usui</a>
                            <a href="/bioenergie/" class="nav-link block w-full text-left px-8 py-3 text-sm font-serif italic text-chakra-primary hover:bg-gray-50 hover:text-chakra-accent transition-all border-b border-gray-50" data-page="/bioenergie/">Bioénergie</a>
                            <a href="/chromatherapie/" class="nav-link block w-full text-left px-8 py-3 text-sm font-serif italic text-chakra-primary hover:bg-gray-50 hover:text-chakra-accent transition-all" data-page="/chromatherapie/">Chromathérapie</a>
                        </div>
                    </div>
                </div>

                <a href="/harmonisation-habitat/" class="nav-link text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-chakra-primary transition-colors" data-page="/harmonisation-habitat/">Harmonisation Habitat</a>

                <a href="/mon-cheminement/" class="nav-link text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-chakra-primary transition-colors" data-page="/mon-cheminement/">Mon Parcours</a>

                <a href="tel:+32495380149" class="bg-chakra-primary text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-chakra-accent transition-colors ml-4 shadow-lg shadow-indigo-900/10">
                    Réserver
                </a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="lg:hidden z-50 p-2 transition-colors text-chakra-primary" aria-label="Menu">
                <svg id="menu-icon-open" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg id="menu-icon-close" class="w-8 h-8 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div id="mobile-menu" class="fixed inset-0 z-[40] transition-all duration-700 lg:hidden opacity-0 pointer-events-none">
        <div class="absolute inset-0 bg-[#fcfaf7] backdrop-blur-xl"></div>
        <nav class="relative h-full flex flex-col items-center justify-center p-6 text-center">
            <div class="space-y-6 w-full max-h-[80vh] overflow-y-auto py-10">
                <a href="/" class="block w-full text-2xl font-serif italic text-chakra-primary">Accueil</a>
                <div class="space-y-4">
                    <button id="mobile-soins-toggle" class="flex items-center justify-center gap-4 w-full text-2xl font-serif italic text-chakra-primary">
                        Soins Holistiques
                        <svg id="mobile-soins-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div id="mobile-soins-submenu" class="space-y-3 overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                        <a href="/reiki/" class="block w-full text-lg font-light text-gray-500 py-1">Reiki Usui</a>
                        <a href="/bioenergie/" class="block w-full text-lg font-light text-gray-500 py-1">Bioénergie</a>
                        <a href="/chromatherapie/" class="block w-full text-lg font-light text-gray-500 py-1">Chromathérapie</a>
                    </div>
                </div>
                <a href="/harmonisation-habitat/" class="block w-full text-2xl font-serif italic text-chakra-primary">Harmonisation Habitat</a>
                <a href="/mon-cheminement/" class="block w-full text-2xl font-serif italic text-chakra-primary">Mon Parcours</a>
            </div>
            <div class="mt-12">
                <a href="tel:+32495380149" class="inline-block border border-chakra-primary text-chakra-primary px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
                    Me Contacter
                </a>
            </div>
        </nav>
    </div>
    `;

    // Scroll effect
    const siteHeader = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('glass-header', 'py-3', 'shadow-sm');
            siteHeader.classList.remove('bg-white/80', 'py-6');
        } else {
            siteHeader.classList.remove('glass-header', 'py-3', 'shadow-sm');
            siteHeader.classList.add('bg-white/80', 'py-6');
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = 'unset';
        }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = 'unset';
        });
    });

    // Mobile soins dropdown
    const soinsToggle = document.getElementById('mobile-soins-toggle');
    const soinsSubmenu = document.getElementById('mobile-soins-submenu');
    const soinsArrow = document.getElementById('mobile-soins-arrow');
    let soinsOpen = false;

    soinsToggle.addEventListener('click', () => {
        soinsOpen = !soinsOpen;
        if (soinsOpen) {
            soinsSubmenu.classList.remove('max-h-0', 'opacity-0');
            soinsSubmenu.classList.add('max-h-96', 'opacity-100', 'mt-4');
            soinsArrow.classList.add('rotate-180');
        } else {
            soinsSubmenu.classList.add('max-h-0', 'opacity-0');
            soinsSubmenu.classList.remove('max-h-96', 'opacity-100', 'mt-4');
            soinsArrow.classList.remove('rotate-180');
        }
    });

    // Highlight active page
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage && (currentPath === linkPage || currentPath === linkPage.slice(0, -1))) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-chakra-primary');
        }
    });
}

/* === Footer Injection === */
function initFooter() {
    const footerEl = document.getElementById('footer');
    if (!footerEl) return;

    const year = new Date().getFullYear();

    footerEl.innerHTML = `
    <footer class="bg-[#fafaf9] pt-20">
        <div class="max-w-7xl mx-auto px-6 pb-20">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

                <!-- Contact -->
                <div class="space-y-8">
                    <h4 class="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary border-b border-gray-200 pb-4">Contact & Réseaux</h4>
                    <div class="space-y-4 text-gray-600 font-light text-sm">
                        <p>N'hésitez pas à me suivre sur les réseaux et à me contacter pour toutes questions concernant les soins proposés sur ce site.</p>
                        <p class="pt-4 font-medium text-chakra-primary">0495/38.01.49</p>
                        <p>bouny[A]outlook.be</p>
                    </div>
                    <div class="flex gap-6 pt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-chakra-primary hover:text-chakra-accent transition-all duration-300 hover:scale-110" aria-label="Facebook">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-chakra-primary hover:text-chakra-accent transition-all duration-300 hover:scale-110" aria-label="Instagram">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Navigation -->
                <div class="space-y-8">
                    <h4 class="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary border-b border-gray-200 pb-4">Navigation du site</h4>
                    <ul class="grid grid-cols-1 gap-4 text-sm font-light text-gray-600">
                        <li><a href="/" class="hover:text-chakra-accent transition-colors">Accueil</a></li>
                        <li><a href="/reiki/" class="hover:text-chakra-accent transition-colors">Soin Reiki Usui</a></li>
                        <li><a href="/bioenergie/" class="hover:text-chakra-accent transition-colors">Soin Bioénergie</a></li>
                        <li><a href="/chromatherapie/" class="hover:text-chakra-accent transition-colors">Soin Chromathérapie</a></li>
                        <li><a href="/harmonisation-habitat/" class="hover:text-chakra-accent transition-colors">Harmonisation Habitat</a></li>
                        <li><a href="/mon-cheminement/" class="hover:text-chakra-accent transition-colors">Mon cheminement spirituel</a></li>
                    </ul>
                </div>

                <!-- Map -->
                <div class="space-y-8">
                    <h4 class="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary border-b border-gray-200 pb-4">Localisation</h4>
                    <div class="w-full h-64 bg-gray-100 rounded-sm overflow-hidden shadow-inner grayscale relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                            <span class="animate-pulse">Chargement de la carte...</span>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.4886616428464!2d4.3218730999999995!3d50.2443464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2270f2f79029b%3A0x6a0c0e5a88c7f07d!2sRue%20du%20Falin%2020%2C%206500%20Beaumont!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
                            width="100%" height="100%" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="relative z-10">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright bar -->
        <div class="bg-chakra-primary py-4 px-6">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/60">
                <p>&copy; ${year} Tous droits réservés - Chakras Harmony</p>
                <div class="flex gap-4">
                    <a href="#" class="hover:text-white transition-colors">Mentions Légales</a>
                    <span class="opacity-30">|</span>
                    <a href="#" class="hover:text-white transition-colors">Confidentialité</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

/* === Cookies Popup === */
function initCookies() {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) return;

    setTimeout(() => {
        const popup = document.createElement('div');
        popup.id = 'cookies-popup';
        popup.className = 'fixed bottom-6 left-6 z-[100] max-w-sm animate-fade-up';
        popup.innerHTML = `
            <div class="bg-white border border-gray-100 p-6 shadow-2xl rounded-sm">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-chakra-accent rounded-full animate-pulse"></div>
                        <h4 class="text-[10px] uppercase tracking-[0.2em] font-bold text-chakra-primary">
                            Respect de votre vie privée
                        </h4>
                    </div>
                    <p class="text-gray-500 text-xs leading-relaxed font-light">
                        Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser notre trafic de manière anonyme.
                        Aucune donnée personnelle n'est revendue à des tiers.
                    </p>
                    <div class="flex items-center gap-4 pt-2">
                        <button id="cookies-accept" class="bg-chakra-primary text-white px-6 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-chakra-accent transition-colors duration-300">
                            Accepter
                        </button>
                        <button id="cookies-decline" class="text-gray-400 hover:text-chakra-primary text-[9px] uppercase tracking-widest font-bold transition-colors duration-300">
                            Refuser
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);

        document.getElementById('cookies-accept').addEventListener('click', () => {
            localStorage.setItem('cookie-consent', 'accepted');
            popup.remove();
        });
        document.getElementById('cookies-decline').addEventListener('click', () => {
            localStorage.setItem('cookie-consent', 'declined');
            popup.remove();
        });
    }, 2000);
}

/* === Auto-init === */
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initFooter();
    initCookies();
});
