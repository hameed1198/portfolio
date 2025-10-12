import React from 'react';

const SimpleAbout = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions that bridge technology and user needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="text-gray-300 space-y-4">
                <p>
                  I am a dedicated <span className="text-blue-400 font-semibold">Python Developer</span> with 
                  over 3 years of experience specializing in Fullstack & backend development, data engineering, 
                  and API integration using Flask. My expertise spans across building robust, scalable applications 
                  with a strong focus on delivering efficient, reliable, and production-ready systems.
                </p>
                
                <p>
                  Currently working as an <span className="text-blue-400 font-semibold">Associate System Engineer 2</span> at 
                  Credit Safe Technologies, I specialize in developing high-performance web applications using Python 
                  frameworks like Flask, designing and integrating RESTful APIs, and managing complex data pipelines 
                  using Apache Airflow for ETL operations.
                </p>
                
                <p>
                  I'm passionate about solving complex technical challenges and have hands-on experience with cloud 
                  platforms like <span className="text-purple-400 font-semibold">AWS</span>, database management with 
                  MySQL and MariaDB, Git version control, and implementing CI/CD pipelines for automated deployment 
                  and delivery using Jenkins.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                {[
                  { number: '3+', label: 'Years Experience' },
                  { number: '50+', label: 'Projects Completed' },
                  { number: '10+', label: 'Technologies' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-200"
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-8">
              {[
                {
                  icon: '🚀',
                  title: 'Performance Focused',
                  description: 'Building high-performance applications with optimized code and efficient architectures.',
                },
                {
                  icon: '☁️',
                  title: 'Cloud Native',
                  description: 'Expertise in AWS services, containerization, and scalable cloud infrastructure.',
                },
                {
                  icon: '🔧',
                  title: 'Full Stack Development',
                  description: 'End-to-end development from database design to user interface implementation.',
                },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-102"
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Let's Work Together</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleAbout;