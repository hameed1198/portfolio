import React from 'react';

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    connect: [
      { name: 'GitHub', href: 'https://github.com/hameedkhan', icon: '🐙' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/hameedkhan', icon: '💼' },
      { name: 'Email', href: 'mailto:hameedkhan@example.com', icon: '📧' },
      { name: 'Phone', href: 'tel:+919876543210', icon: '📱' },
    ],
    quickLinks: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
    technologies: [
      'Python', 'Flask', 'Apache Airflow', 'AWS S3', 
      'MySQL', 'MariaDB', 'REST APIs', 'GitLab', 'CI/CD'
    ],
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Mohammad<span className="text-blue-500">HK</span>
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Associate System Engineer with 3+ years of experience specializing in 
                  Fullstack & backend development, data engineering, and API integration using Flask. 
                  Building scalable, high-performance web applications.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {footerLinks.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-white/10 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect With Me</h4>
              <ul className="space-y-3">
                {footerLinks.connect.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-3 group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Mohammad Hameed Khan. All rights reserved.
              </p>
              <p className="mt-1">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {footerLinks.connect.slice(0, 3).map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>

              {/* Back to Top */}
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                title="Back to top"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;