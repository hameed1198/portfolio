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
    
    // Section titles animation - simplified for mobile
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.8 : 1.2,
            y: isMobile ? 30 : 60,
            opacity: 0,
            scale: isMobile ? 0.95 : 0.8,
            ease: isMobile ? "power2.out" : "back.out(1.7)"
        });
    });

    // About section - simplified animation
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-content',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: isMobile ? 1 : 1.5,
        y: isMobile ? 40 : 80,
        opacity: 0,
        ease: "power2.out"
    });

    // Skills animation - optimized
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.set(item, {
            opacity: 0,
            y: isMobile ? 30 : 60,
            rotationZ: isMobile ? 0 : -10, // No rotation on mobile
            scale: isMobile ? 0.95 : 0.8
        });
        
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.8 : 1.2,
            opacity: 1,
            y: 0,
            rotationZ: 0,
            scale: 1,
            delay: index * (isMobile ? 0.05 : 0.08),
            ease: isMobile ? "power2.out" : "back.out(1.7)"
            // Removed continuous floating animation for performance
        });
    });

    // Experience items - simplified
    gsap.utils.toArray('.experience-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.8 : 1.3,
            x: isMobile ? -30 : -80,
            opacity: 0,
            rotationY: isMobile ? 0 : -15, // No 3D rotation on mobile
            scale: isMobile ? 0.98 : 0.9,
            delay: index * (isMobile ? 0.1 : 0.15),
            ease: "power2.out"
        });
    });

    // Education items - simplified
    gsap.utils.toArray('.education-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.8 : 1.4,
            y: isMobile ? 40 : 70,
            opacity: 0,
            rotationX: isMobile ? 0 : 20, // No 3D rotation on mobile
            scale: isMobile ? 0.95 : 0.85,
            delay: index * (isMobile ? 0.1 : 0.2),
            ease: isMobile ? "power2.out" : "back.out(1.4)"
        });
    });

    // Project cards - optimized
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.8 : 1.5,
            y: isMobile ? 40 : 100,
            opacity: 0,
            rotationZ: isMobile ? 0 : 5, // No rotation on mobile
            scale: isMobile ? 0.9 : 0.7,
            delay: index * (isMobile ? 0.08 : 0.12),
            ease: "power2.out"
        });
    });

    // Contact section - simplified
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        },
        duration: isMobile ? 0.8 : 1.3,
        y: isMobile ? 30 : 60,
        opacity: 0,
        ease: "power2.out"
    });

    // Contact items - simplified
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: isMobile ? 0.6 : 1,
            x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50), // No sliding on mobile
            y: isMobile ? 20 : 0,
            opacity: 0,
            delay: index * 0.1,
            ease: "power2.out"
        });
    });

    // Social links - simplified
    gsap.utils.toArray('.social-links a').forEach((link, index) => {
        gsap.from(link, {
            scrollTrigger: {
                trigger: '.social-links',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            scale: 0,
            rotation: isMobile ? 0 : 180, // No rotation on mobile
            delay: index * 0.1,
            ease: isMobile ? "power2.out" : "back.out(1.7)"
        });
    });
}

function initThreeJSBackground() {
    // Performance check - disable on mobile and low-end devices
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowPerformance = navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4;
    
    if (isMobile || isLowPerformance) {
        console.log('Three.js particles disabled for better performance');
        return;
    }

    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: false, // Disable for performance
        powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio

    // Reduced particle count for better performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50; // Reduced from 150
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 8; // Smaller area
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.008, // Smaller size
        color: '#60a5fa',
        transparent: true,
        opacity: 0.4 // Reduced opacity
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    let frameCount = 0;
    // Optimized animation loop with frame skipping
    function animate() {
        requestAnimationFrame(animate);
        
        frameCount++;
        // Skip every other frame for smoother performance
        if (frameCount % 2 === 0) {
            particlesMesh.rotation.x += 0.0003; // Slower rotation
            particlesMesh.rotation.y += 0.0005;
            
            renderer.render(scene, camera);
        }
    }

    animate();

    // Throttled resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, 250);
    });
}