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

// Intersection observer for fade-in effects
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

// WhatsApp form submission
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Nova mensagem de contato:%0A%0ANome: ${name}%0AEmail: ${email}%0AEmpresa: ${company}%0AServiço de Interesse: ${service}%0A%0AMensagem:%0A${message}`;
    const whatsappNumber = '258852470473';

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
});

// WhatsApp shortcut buttons
function sendWhatsAppMessage(buttonType) {
    const phoneNumber = '258852470473';
    let message = '';

    if (buttonType === 'start') {
        message = 'Olá 3DS Tech, gostaria de Começar Hoje com seus serviços. Por favor me contacte.';
    } else if (buttonType === 'consultation') {
        message = 'Olá 3DS Tech, gostaria de agendar uma Consulta Gratuita. Por favor me contacte.';
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

document.querySelectorAll('.whatsapp-start').forEach(btn => {
    btn.addEventListener('click', () => sendWhatsAppMessage('start'));
});

document.querySelectorAll('.whatsapp-consultation').forEach(btn => {
    btn.addEventListener('click', () => sendWhatsAppMessage('consultation'));
});

// Navigation highlighting on scroll
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

  // Enhanced Video Handling
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('bgVideo');
            
            // Ensure video plays and keeps playing
            function ensureVideoPlayback() {
                if (video.paused) {
                    video.play().catch(e => {
                        console.log('Video play prevented:', e);
                        // Fallback: Show poster image if video can't play
                        if (video.querySelector('img')) {
                            video.style.backgroundImage = `url('${video.querySelector('img').src}')`;
                            video.style.backgroundSize = 'cover';
                            video.style.backgroundPosition = 'center';
                            video.innerHTML = '';
                        }
                    });
                }
            }
            
            // Initial play attempt
            ensureVideoPlayback();
            
            // Monitor for interruptions
            video.addEventListener('pause', ensureVideoPlayback);
            video.addEventListener('ended', function() {
                video.currentTime = 0;
                ensureVideoPlayback();
            });
            
            // Handle visibility changes
            document.addEventListener('visibilitychange', function() {
                if (!document.hidden) {
                    ensureVideoPlayback();
                }
            });
            
            // Buffer management
            video.addEventListener('playing', function() {
                if (video.buffered.length > 0) {
                    const bufferEnd = video.buffered.end(video.buffered.length - 1);
                    const gap = bufferEnd - video.currentTime;
                    
                    if (gap < 5) { // If buffer is running low
                        video.currentTime = Math.min(video.currentTime + 10, video.duration - 1);
                    }
                }
            });
            
            // Error handling
            video.addEventListener('error', function() {
                const fallback = video.querySelector('img');
                if (fallback) {
                    video.style.backgroundImage = `url('${fallback.src}')`;
                    video.style.backgroundSize = 'cover';
                    video.style.backgroundPosition = 'center';
                    video.innerHTML = '';
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });

                        // Close mobile menu if open
                        mobileMenu.classList.add('hidden');
                    }
                });
            });

            // Intersection observer for fade-in effects
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
        });
        // IOS video player.
        document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    
    // iOS workaround
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
        
        // Some iOS versions require this
        video.addEventListener('loadedmetadata', function() {
            video.play().catch(e => {
                // Fallback if autoplay is blocked
                const playButton = document.createElement('button');
                playButton.innerHTML = 'Play Video';
                playButton.style.position = 'absolute';
                playButton.style.bottom = '20px';
                playButton.style.left = '50%';
                playButton.style.transform = 'translateX(-50%)';
                playButton.style.zIndex = '10';
                playButton.style.padding = '10px 20px';
                playButton.style.backgroundColor = 'rgba(11, 8, 141, 0.8)';
                playButton.style.color = 'white';
                playButton.style.border = 'none';
                playButton.style.borderRadius = '5px';
                playButton.style.cursor = 'pointer';
                
                playButton.addEventListener('click', function() {
                    video.play();
                    playButton.style.display = 'none';
                });
                
                document.querySelector('#home').appendChild(playButton);
            });
        });
    }
});