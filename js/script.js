// Clean JavaScript for MHK Portfolio

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);
    
    // Loading Animation
    initLoadingAnimation();
    
    // Initialize Three.js background immediately
    initThreeJSBackground();

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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: "power2.inOut"
                });
            }
        });
    });
});

// Enhanced GSAP Animation Functions for MHK Loading
function initLoadingAnimation() {
    const loaderText = document.querySelector('.loader-text');
    const loaderBar = document.querySelector('.loader-bar');
    
    // Start progress bar animation
    setTimeout(() => {
        if (loaderBar) {
            loaderBar.style.width = '100%';
        }
    }, 1000);
    
    // After letters appear, start zoom animation
    setTimeout(() => {
        startZoomTransition();
    }, 4000); // Wait for letters to fully appear
}

function startZoomTransition() {
    const loaderText = document.querySelector('.loader-text');
    
    if (loaderText) {
        // Add zoom animation class
        loaderText.classList.add('zoom-animation');
        
        // Hide the entire loader after zoom completes
        setTimeout(() => {
            hideLoader();
        }, 1500); // Match the dramaticZoom animation duration
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
    // Skill items hover effect
    gsap.utils.toArray('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1.05,
                y: -5,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: "power2.out"
            });
        });
    });

    // Project cards hover effect
    gsap.utils.toArray('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1.02,
                y: -10,
                rotationY: 2,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1,
                y: 0,
                rotationY: 0,
                ease: "power2.out"
            });
        });
    });

    // Experience items hover effect
    gsap.utils.toArray('.experience-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                x: 10,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                x: 0,
                ease: "power2.out"
            });
        });
    });

    // Social links hover effect
    gsap.utils.toArray('.social-links a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.2,
                scale: 1.2,
                rotation: 5,
                ease: "back.out(1.7)"
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.2,
                scale: 1,
                rotation: 0,
                ease: "back.out(1.7)"
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
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            },
            duration: 1.2,
            y: 60,
            opacity: 0,
            scale: 0.8,
            ease: "back.out(1.7)"
        });
    });

    // About section with enhanced animation
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-content',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1.5,
        y: 80,
        opacity: 0,
        scale: 0.95,
        ease: "power3.out"
    });

    // Skills animation with enhanced effects
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        // Set initial state
        gsap.set(item, {
            opacity: 0,
            y: 60,
            rotationZ: -10,
            scale: 0.8
        });
        
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 1.2,
            opacity: 1,
            y: 0,
            rotationZ: 0,
            scale: 1,
            delay: index * 0.08,
            ease: "back.out(1.7)",
            onComplete: function() {
                // Add subtle floating animation
                gsap.to(item, {
                    y: -3,
                    duration: 2,
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }
        });
    });

    // Experience items with enhanced animations
    gsap.utils.toArray('.experience-item').forEach((item, index) => {
        gsap.set(item, {
            opacity: 0,
            x: -80,
            rotationY: -15,
            scale: 0.9
        });
        
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 1.3,
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            delay: index * 0.15,
            ease: "power3.out"
        });
    });

    // Education items animation
    gsap.utils.toArray('.education-item').forEach((item, index) => {
        gsap.set(item, {
            opacity: 0,
            y: 70,
            rotationX: 20,
            scale: 0.85
        });
        
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 1.4,
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            delay: index * 0.2,
            ease: "back.out(1.4)"
        });
    });

    // Project cards with staggered animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.set(card, {
            opacity: 0,
            y: 100,
            rotationZ: 5,
            scale: 0.7
        });
        
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 1.5,
            opacity: 1,
            y: 0,
            rotationZ: 0,
            scale: 1,
            delay: index * 0.12,
            ease: "power3.out"
        });
    });

    // Contact section elements
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        },
        duration: 1.3,
        y: 60,
        opacity: 0,
        ease: "power2.out"
    });

    // Contact items (email, phone, etc.)
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            delay: index * 0.1,
            ease: "back.out(1.7)"
        });
    });

    // Social links animation
    gsap.utils.toArray('.social-links a').forEach((link, index) => {
        gsap.from(link, {
            scrollTrigger: {
                trigger: '.social-links',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            scale: 0,
            rotation: 180,
            delay: index * 0.1,
            ease: "back.out(1.7)"
        });
    });
}

function initThreeJSBackground() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        color: '#60a5fa',
        transparent: true,
        opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0008;
        
        renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}