      
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

       
         document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Format WhatsApp message
        const whatsappMessage = `Nova mensagem de contato:%0A%0ANome: ${name}%0AEmail: ${email}%0AEmpresa: ${company}%0AServiço de Interesse: ${service}%0A%0AMensagem:%0A${message}`;
        const whatsappNumber = '258852470473';
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    });
        
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-primary');
                }
            });
        });

    function sendWhatsAppMessage(buttonType) {
    const phoneNumber = '258841234567'; // Your WhatsApp number
    
    let message = '';
    if(buttonType === 'start') {
        message = 'Olá 3DS Tech, gostaria de Começar Hoje com seus serviços. Por favor me contacte.';
    } else if(buttonType === 'consultation') {
        message = 'Olá 3DS Tech, gostaria de agendar uma Consulta Gratuita. Por favor me contacte.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Update buttons to use the function
document.querySelectorAll('.whatsapp-start').forEach(btn => {
    btn.addEventListener('click', () => sendWhatsAppMessage('start'));
});

document.querySelectorAll('.whatsapp-consultation').forEach(btn => {
    btn.addEventListener('click', () => sendWhatsAppMessage('consultation'));
});