import React, { useState, useEffect } from 'react';

const SimpleHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className={`relative z-20 container mx-auto px-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  <div className="block">Mohammad</div>
                  <div className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                    Hameed Khan
                  </div>
                </h1>
              </div>

              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-semibold mb-6">
                Associate System Engineer 2
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Python Developer with 3+ years of experience specializing in Fullstack & backend development, 
                data engineering, and API integration using Flask. Proficient in building and deploying RESTful APIs, 
                managing SQL databases (MySQL, MariaDB), and developing scalable ETL pipelines using Apache Airflow.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </button>
                
                <a
                  href="https://www.linkedin.com/in/hameed-khan-mohammad-35b697183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Photo Container with Animated Border */}
                <div className="relative">
                  {/* Animated Border Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                  
                  {/* Photo */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src="./images/profile-photo.jpg"
                      alt="Mohammad Hameed Khan"
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Image failed to load');
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Floating Elements around photo */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div
              onClick={() => scrollToSection('#about')}
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors cursor-pointer animate-bounce"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;