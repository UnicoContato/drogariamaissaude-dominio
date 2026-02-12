document.addEventListener('DOMContentLoaded', () => {
    
    // Header Logic
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('glass-header');
            header.classList.remove('-translate-y-full');
        } else {
            header.classList.add('glass-header');
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('-translate-y-full');
            } else {
                header.classList.remove('-translate-y-full');
            }
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('translate-x-full');
        if (isHidden) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Scroll Reveal
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Contact Data / Units Logic
    const units = {
        "1": {
            name: "DROGARIA MAIS SAÚDE",
            legal: "DROGARIA ALBINO MARTINS LTDA",
            address: "Governador Milton Campos, 3157, Loja 02, Centro, Guanhães - MG",
            phone: "(33) 3421-2911",
            email: "farmaciacodavino@hotmail.com",
            cnpj: "19.835.342/0001-50",
            mapQuery: "Drogaria Mais Saúde Governador Milton Campos, 3157, Guanhaes MG"
        },
        "2": {
            name: "DROGARIA MAIS SAÚDE",
            legal: "FARMACIA CONEGO DAVINO LTDA",
            address: "Conego Davino, 37, Centro, Guanhães - MG",
            phone: "(33) 3421-2066",
            email: "farmaciacodavino@hotmail.com",
            cnpj: "38.626.222/0001-97",
            mapQuery: "Conego Davino, 37, Guanhaes MG"
        },
        "3": {
            name: "DROGARIA MAIS SAÚDE",
            legal: "DROGARIA DIAS ALBINO LTDA",
            address: "Governador Milton Campos, 3986, Centro, Guanhães - MG",
            phone: "(33) 3421-2811",
            email: "societario.gsc@hotmail.com",
            cnpj: "46.989.037/0001-95",
            mapQuery: "Governador Milton Campos, 3986, Guanhaes MG"
        }
    };

    const select = document.getElementById('unit-select');
    const uName = document.getElementById('unit-name');
    const uLegal = document.getElementById('unit-legal');
    const uAddress = document.getElementById('unit-address');
    const uPhone = document.getElementById('unit-phone');
    const uEmail = document.getElementById('unit-email');
    const uCnpj = document.getElementById('unit-cnpj');
    const mapFrame = document.getElementById('map-frame');

    select.addEventListener('change', (e) => {
        const data = units[e.target.value];
        
        // Fade out content slightly
        const container = document.getElementById('contact-info');
        container.style.opacity = '0.5';

        setTimeout(() => {
            uName.textContent = data.name;
            uLegal.textContent = data.legal;
            uAddress.textContent = data.address;
            uPhone.textContent = data.phone;
            uEmail.textContent = data.email;
            uCnpj.textContent = data.cnpj;
            
            // Update Map
            const newMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
            mapFrame.src = newMapSrc;

            container.style.opacity = '1';
        }, 200);
    });

    // Modal Logic
    const modal = document.getElementById('privacy-modal');
    const openModalBtn = document.getElementById('privacy-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const closeModalBtn2 = document.getElementById('close-modal-btn');
    const overlay = document.getElementById('modal-overlay');

    function toggleModal() {
        modal.classList.toggle('hidden');
        if (!modal.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    closeModalBtn.addEventListener('click', toggleModal);
    closeModalBtn2.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);

    // Footer Year
    document.getElementById('year').textContent = new Date().getFullYear();
});