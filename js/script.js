// Optimized JavaScript for MHK Portfolio

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP with only required plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Loading Animation
    initLoadingAnimation();
    
    // Initialize lightweight background effect
    initLightweightBackground();

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Optimized smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: target,
                    ease: "power2.inOut"
                });
            }
        });
    });
});

// Simplified Loading Animation for Mobile Performance
function initLoadingAnimation() {
    const loaderText = document.querySelector('.loader-text');
    const loaderBar = document.querySelector('.loader-bar');
    const isMobile = window.innerWidth < 768;
    
    // Faster loading for mobile
    const loadingDuration = isMobile ? 1500 : 2500;
    const transitionDelay = isMobile ? 1000 : 1800;
    
    // Start progress bar animation
    setTimeout(() => {
        if (loaderBar) {
            loaderBar.style.width = '100%';
        }
    }, 500);
    
    // Start fade out transition much sooner
    setTimeout(() => {
        startZoomTransition();
    }, transitionDelay);
}

function startZoomTransition() {
    const loaderText = document.querySelector('.loader-text');
    const isMobile = window.innerWidth < 768;
    
    if (loaderText) {
        // Add simplified fade animation class
        loaderText.classList.add('zoom-animation');
        
        // Hide the entire loader after animation completes
        setTimeout(() => {
            hideLoader();
        }, isMobile ? 500 : 800);
    }
}

function hideLoader() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        gsap.to(loader, {
            duration: 0.5,
            opacity: 0,
            ease: "power2.inOut",
            onComplete: () => {
                loader.style.display = 'none';
                // Initialize main portfolio animations
                initPageAnimations();
            }
        });
    }
}

function initPageAnimations() {
    // Hero Section Animations
    initHeroAnimations();
    
    // Scroll-triggered animations
    initScrollAnimations();
    
    // Interactive hover effects
    initHoverEffects();
    
    // Console greeting
    console.log('%c👋 Hello there, developer!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cThis portfolio was built with HTML, CSS, and JavaScript. Feel free to explore the code!', 'color: #64748b; font-size: 14px;');
    console.log('%cInterested in connecting? Reach out to Mohammad Hameed Khan!', 'color: #10b981; font-size: 14px;');
}

function initHoverEffects() {
    // Skip hover effects on mobile devices for better performance
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    // Simplified skill items hover effect
    gsap.utils.toArray('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.2,
                scale: 1.03,
                y: -3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.2,
                scale: 1,
                y: 0,
                ease: "power2.out"
            });
        });
    });

    // Simplified project cards hover effect
    gsap.utils.toArray('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.01,
                y: -5,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: "power2.out"
            });
        });
    });

    // Simplified experience items hover effect
    gsap.utils.toArray('.experience-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.2,
                x: 5,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.2,
                x: 0,
                ease: "power2.out"
            });
        });
    });

    // Simplified social links hover effect
    gsap.utils.toArray('.social-links a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.15,
                scale: 1.1,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.15,
                scale: 1,
                ease: "power2.out"
            });
        });
    });
}

function initHeroAnimations() {
    // Hero text animations
    gsap.timeline()
        .from('.hero-content h1', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        })
        .from('.hero-content p', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.5")
        .from('.hero-buttons .btn', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.5");
}

function initScrollAnimations() {
    // Performance check
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Skip complex animations for users who prefer reduced motion
        document.querySelectorAll('.skill-item, .project-card, .experience-item, .education-item').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }
    
    // Optimized section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.6 : 1,
            y: isMobile ? 20 : 40,
            opacity: 0,
            ease: "power2.out"
        });
    });

    // About section - optimized
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-content',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: isMobile ? 0.8 : 1.2,
        y: isMobile ? 30 : 50,
        opacity: 0,
        ease: "power2.out"
    });

    // Skills animation - highly optimized
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.6 : 0.8,
            y: isMobile ? 20 : 40,
            opacity: 0,
            delay: index * (isMobile ? 0.03 : 0.05),
            ease: "power2.out",
            onComplete: function() {
                // Remove will-change after animation
                item.classList.add('animated');
            }
        });
    });

    // Experience items - simplified
    gsap.utils.toArray('.experience-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.6 : 1,
            x: isMobile ? -20 : -40,
            opacity: 0,
            delay: index * 0.1,
            ease: "power2.out",
            onComplete: function() {
                item.classList.add('animated');
            }
        });
    });

    // Education items - simplified
    gsap.utils.toArray('.education-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.6 : 1,
            y: isMobile ? 20 : 40,
            opacity: 0,
            delay: index * 0.1,
            ease: "power2.out",
            onComplete: function() {
                item.classList.add('animated');
            }
        });
    });

    // Project cards - optimized
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.6 : 1,
            y: isMobile ? 20 : 40,
            opacity: 0,
            delay: index * 0.08,
            ease: "power2.out",
            onComplete: function() {
                card.classList.add('animated');
            }
        });
    });

    // Contact section - simplified
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        duration: isMobile ? 0.6 : 1,
        y: isMobile ? 20 : 40,
        opacity: 0,
        ease: "power2.out"
    });

    // Contact items - simplified
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            y: 15,
            opacity: 0,
            delay: index * 0.08,
            ease: "power2.out"
        });
    });

    // Social links - simplified
    gsap.utils.toArray('.social-links a').forEach((link, index) => {
        gsap.from(link, {
            scrollTrigger: {
                trigger: '.social-links',
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.5,
            scale: 0,
            delay: index * 0.08,
            ease: "back.out(1.7)"
        });
    });
}

// Lightweight background effect - pure CSS based
function initLightweightBackground() {
    // Add lightweight particle effect class to body
    document.body.classList.add('particles-active');
    
    // Add subtle parallax effect on scroll
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.lightweight-particles');
        
        if (parallax) {
            const speed = scrolled * 0.2;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Only add scroll listener on desktop for performance
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', requestTick);
    }
}