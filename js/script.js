// Optimized JavaScript for MHK Portfolio

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP with only required plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Enhanced Loading Animation
    initLoadingAnimation();
    
    // Initialize lightweight background effect
    initLightweightBackground();

    // Debug ScrollTrigger
    console.log('GSAP Version:', gsap.version);
    console.log('ScrollTrigger loaded:', !!window.ScrollTrigger);
    
    // Add simple scroll test
    setTimeout(() => {
        console.log('Skills found:', document.querySelectorAll('.skill-item').length);
        console.log('Categories found:', document.querySelectorAll('.skill-category').length);
        
        // Initialize skills animations immediately (don't wait for loading screen)
        initSkillsAnimations();
        
        // Initialize contact animations
        initContactAnimations();
    }, 1000);

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

// Dedicated Skills Animation Function
function initSkillsAnimations() {
    const isMobile = window.innerWidth < 768;
    
    console.log('Setting up skills animations...');
    
    // Skills animation - Simplified and working approach
    const skillCategories = document.querySelectorAll('.skill-category');
    
    console.log('Found', skillCategories.length, 'skill categories');
    
    if (skillCategories.length > 0) {
        skillCategories.forEach((category, categoryIndex) => {
            const skillItems = category.querySelectorAll('.skill-item');
            
            console.log('Category', categoryIndex, 'has', skillItems.length, 'skill items');
            
            // Set initial states immediately
            gsap.set(category, { opacity: 0, y: 50 });
            gsap.set(skillItems, { opacity: 0, x: -30, scale: 0.8 });
            
            // Category animation
            gsap.to(category, {
                scrollTrigger: {
                    trigger: category,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    onEnter: () => console.log('🎬 ANIMATION TRIGGERED: Category', categoryIndex),
                    markers: false // Change to true to see trigger points
                },
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out"
            });
            
            // Individual skill items
            skillItems.forEach((item, index) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: category,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 0.6,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    delay: 0.1 + (index * 0.1),
                    ease: "back.out(1.7)",
                    onStart: () => console.log('✨ Skill animating:', item.textContent?.trim())
                });
            });
        });
        
        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
        console.log('✅ Skills animations setup complete');
    } else {
        console.error('❌ No skill categories found!');
    }
}

// Dedicated Contact Animation Function
function initContactAnimations() {
    const isMobile = window.innerWidth < 768;
    
    console.log('Setting up contact section animations...');
    
    // Get contact elements
    const contactSection = document.querySelector('#contact');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const contactItems = document.querySelectorAll('.contact-item');
    const formGroups = document.querySelectorAll('.form-group');
    const submitButton = document.querySelector('.contact-form .btn-primary');
    
    console.log('Found contact elements:', {
        section: !!contactSection,
        info: !!contactInfo,
        form: !!contactForm,
        items: contactItems.length,
        formGroups: formGroups.length,
        button: !!submitButton
    });
    
    if (contactSection) {
        // Set initial states
        gsap.set(contactInfo, { opacity: 0, x: -50 });
        gsap.set(contactForm, { opacity: 0, x: 50 });
        gsap.set(contactItems, { opacity: 0, y: 30, scale: 0.9 });
        gsap.set(formGroups, { opacity: 0, y: 20 });
        gsap.set(submitButton, { opacity: 0, scale: 0.8 });
        
        // Contact info animation (left side)
        gsap.to(contactInfo, {
            scrollTrigger: {
                trigger: contactSection,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                onEnter: () => console.log('🎬 CONTACT INFO animation triggered')
            },
            duration: 0.8,
            opacity: 1,
            x: 0,
            ease: "power2.out"
        });
        
        // Contact form animation (right side)
        gsap.to(contactForm, {
            scrollTrigger: {
                trigger: contactSection,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                onEnter: () => console.log('🎬 CONTACT FORM animation triggered')
            },
            duration: 0.8,
            opacity: 1,
            x: 0,
            delay: 0.2,
            ease: "power2.out"
        });
        
        // Contact items animation (staggered)
        contactItems.forEach((item, index) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: contactSection,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.6,
                opacity: 1,
                y: 0,
                scale: 1,
                delay: 0.4 + (index * 0.1),
                ease: "back.out(1.7)",
                onStart: () => console.log('✨ Contact item animating:', index)
            });
        });
        
        // Form fields animation (staggered)
        formGroups.forEach((group, index) => {
            gsap.to(group, {
                scrollTrigger: {
                    trigger: contactForm,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.5,
                opacity: 1,
                y: 0,
                delay: 0.6 + (index * 0.1),
                ease: "power2.out",
                onStart: () => console.log('✨ Form field animating:', index)
            });
        });
        
        // Submit button animation
        if (submitButton) {
            gsap.to(submitButton, {
                scrollTrigger: {
                    trigger: contactForm,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.6,
                opacity: 1,
                scale: 1,
                delay: 1.0,
                ease: "back.out(1.7)",
                onStart: () => console.log('✨ Submit button animating')
            });
        }
        
        console.log('✅ Contact animations setup complete');
    } else {
        console.error('❌ Contact section not found!');
    }
}

// Enhanced Loading Animation with Advanced Controls
function initLoadingAnimation() {
    const loaderText = document.querySelector('.loader-text');
    const loaderBar = document.querySelector('.loader-bar');
    const progressGlow = document.querySelector('.progress-glow');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const isMobile = window.innerWidth < 768;
    
    // Enhanced timing for smoother experience
    const loadingDuration = isMobile ? 2000 : 3000;
    const transitionDelay = isMobile ? 1500 : 2500;
    
    let currentProgress = 0;
    const targetProgress = 100;
    const increment = 2;
    
    // Smooth progress animation with realistic loading simulation
    const progressInterval = setInterval(() => {
        if (currentProgress < targetProgress) {
            // Simulate realistic loading curve
            const remainingProgress = targetProgress - currentProgress;
            const speed = Math.max(0.5, remainingProgress * 0.02);
            currentProgress = Math.min(targetProgress, currentProgress + speed);
            
            // Update progress bar and glow
            if (loaderBar) {
                loaderBar.style.width = currentProgress + '%';
            }
            if (progressGlow) {
                progressGlow.style.width = currentProgress + '%';
            }
            if (loadingPercentage) {
                loadingPercentage.textContent = Math.floor(currentProgress) + '%';
            }
        } else {
            clearInterval(progressInterval);
            // Start exit animation when loading completes
            setTimeout(() => {
                startEnhancedTransition();
            }, 500);
        }
    }, 50);
    
    // Add subtle screen shake effect for premium feel
    if (!isMobile) {
        setTimeout(() => {
            gsap.to('.loader', {
                duration: 0.1,
                x: 2,
                repeat: 3,
                yoyo: true,
                ease: "power2.inOut"
            });
        }, 1000);
    }
}

function startEnhancedTransition() {
    const loaderText = document.querySelector('.loader-text');
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const isMobile = window.innerWidth < 768;
    
    if (loaderText) {
        // Enhanced exit animation with 3D transforms
        loaderText.classList.add('zoom-animation');
        
        // Animate other elements out smoothly
        gsap.to('.loader-subtitle, .loader-progress, .loading-percentage, .loader-dots', {
            duration: 0.6,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "power2.inOut"
        });
        
        gsap.to('.floating-orbs .orb', {
            duration: 0.8,
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            ease: "back.inOut"
        });
        
        // Hide the entire loader with enhanced transition
        setTimeout(() => {
            hideEnhancedLoader();
        }, isMobile ? 600 : 1000);
    }
}

function hideEnhancedLoader() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        // Multi-layer exit animation
        gsap.to('.loader-bg-animation', {
            duration: 1,
            scale: 2,
            opacity: 0,
            ease: "power2.inOut"
        });
        
        gsap.to(loader, {
            duration: 1,
            opacity: 0,
            scale: 0.95,
            ease: "power2.inOut",
            onComplete: () => {
                loader.style.display = 'none';
                // Initialize main portfolio animations with enhanced entrance
                initEnhancedPageAnimations();
            }
        });
    }
}

// Enhanced page animations for smoother entrance
function initEnhancedPageAnimations() {
    // Hero section enhanced entrance
    gsap.fromTo('.hero-content', {
        opacity: 0,
        y: 50,
        scale: 0.95
    }, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out"
    });
    
    gsap.fromTo('.hero-content h1', {
        opacity: 0,
        y: 30
    }, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.3,
        ease: "power2.out"
    });
    
    gsap.fromTo('.hero-content .highlight', {
        opacity: 0,
        scale: 0.8
    }, {
        duration: 0.8,
        opacity: 1,
        scale: 1,
        delay: 0.6,
        ease: "back.out(1.7)"
    });
    
    // Enhanced scroll animations
    gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Enhanced skill card animations
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 50,
            rotationY: -15
        }, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });
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

    // Skills animation - Restored working scroll animations
    const skillCategories = document.querySelectorAll('.skill-category');
    const allSkillItems = document.querySelectorAll('.skill-item');
    
    // Debug information
    console.log('Setting up scroll animations for', skillCategories.length, 'categories');
    console.log('Total skill items:', allSkillItems.length);
    
    if (skillCategories.length > 0 && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        
        skillCategories.forEach((category, categoryIndex) => {
            const skillItems = category.querySelectorAll('.skill-item');
            
            // Immediately set initial animation state
            gsap.set(category, { opacity: 0, y: 50 });
            gsap.set(skillItems, { opacity: 0, x: -30, scale: 0.8 });
            
            // Animate skill category container on scroll
            gsap.to(category, {
                scrollTrigger: {
                    trigger: category,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        console.log('Category', categoryIndex, 'animation triggered');
                    },
                    markers: false // Set to true for debugging
                },
                duration: isMobile ? 0.6 : 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out",
                onComplete: function() {
                    category.classList.add('animated');
                }
            });
            
            // Animate individual skill items on scroll
            skillItems.forEach((item, index) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: category,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    duration: isMobile ? 0.4 : 0.6,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    delay: (categoryIndex * 0.15) + (index * 0.1),
                    ease: "back.out(1.7)",
                    onStart: function() {
                        console.log('Skill item animating:', item.textContent.trim());
                    },
                    onComplete: function() {
                        item.classList.add('animated');
                    }
                });
            });
        });
        
        // Refresh ScrollTrigger to ensure proper calculations
        setTimeout(() => {
            ScrollTrigger.refresh();
            console.log('ScrollTrigger refreshed, animations ready');
        }, 100);
        
    } else {
        // Fallback if GSAP not available
        console.log('GSAP not available, showing static skills');
        [...skillCategories, ...allSkillItems].forEach(item => {
            item.classList.add('animated');
        });
    }

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