// Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Fade-in animations
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElems = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            fadeElems.forEach(elem => {
                observer.observe(elem);
            });
        });

        // WhatsApp form submission
        document.getElementById('whatsappForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Olá 3DS Tech, meu nome é ${name}. Gostaria de informações sobre seus serviços.\n\nE-mail:${email}\nEmpresa: ${company}\nServiço:${service}\n*Mensagem:* ${message}`;
            
            const encodedMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/258852470473?text=${encodedMessage}`, '_blank');
        });

    function sendWhatsAppMessage(buttonType) {
    const phoneNumber = '258851234567'; // Your WhatsApp number
    
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