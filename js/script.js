document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. SELECTORS
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
    const navbarCollapse = document.getElementById('navbarContent');
    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const contactForm = document.getElementById('contactForm');
    const revealElements = document.querySelectorAll('.reveal');

    // 2. SCROLL PROGRESS BAR & NAVBAR STATE
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        if (scrollProgressBar) {
            scrollProgressBar.style.width = `${scrollPercent}%`;
        }

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        updateActiveNavLink(scrollTop);
    }, { passive: true });

    // 3. BACK TO TOP CLICK
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. AUTO-COLLAPSE NAVBAR ON MOBILE CLICK
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // 5. SCROLLSPY / ACTIVE NAV LINK HIGHLIGHT
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink(scrollPos) {
        const headerOffset = 100;
        sections.forEach(section => {
            const top = section.offsetTop - headerOffset;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // 6. SCROLL REVEAL VIA INTERSECTION OBSERVER
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }

    // 8. CONTACT FORM TO WHATSAPP GENERATOR
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contactName').value.trim();
            const company = document.getElementById('contactCompany').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const category = document.getElementById('contactCategory').value;
            const message = document.getElementById('contactMessage').value.trim();

            if (!name || !phone || !message) {
                alert('Mohon lengkapi kolom Nama, Nomor WhatsApp, dan Pesan sebelum mengirim.');
                return;
            }

            let waText = `*Halo PT Chand Hajar Aswad,*
`;
            waText += `Saya ingin mengajukan pertanyaan / konsultasi pemesanan:

`;
            waText += `*Nama:* ${name}
`;
            if (company) waText += `*Perusahaan/Usaha:* ${company}
`;
            waText += `*No. WhatsApp:* ${phone}
`;
            if (email) waText += `*Email:* ${email}
`;
            waText += `*Kategori:* ${category}
`;
            waText += `*Rincian Kebutuhan:* 
${message}

`;
            waText += `Mohon informasi ketersediaan dan penawaran resminya. Terima kasih.`;

            const encodedText = encodeURIComponent(waText);
            const waNumber = '6285177371970';
            const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

            window.open(waUrl, '_blank', 'noopener,noreferrer');
        });
    }
});