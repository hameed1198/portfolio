import React from 'react';

const SimpleExperience = () => {
  const experiences = [
    {
      title: 'Associate System Engineer 2',
      company: 'Credit Safe Technologies',
      period: 'March 2022 - Present',
      location: 'Hyderabad, India',
      description: 'Python Developer with strong experience in building and deploying high-performance web applications using the Flask framework to enhance business workflow.',
      achievements: [
        'Proficient in relational databases such as MySQL and MariaDB, ensuring reliable data access and integrity.',
        'Hands-on experience with AWS cloud services (S3, EC2, CloudWatch) employing best practices.',
        'Design RESTful APIs to integrate customer financial data into production databases.',
        'Handled database migrations and version upgrades using version control based models.',
        'Collaborating on a supplier data migration project focused on modernizing data infrastructure.',
        'Designed and implemented ETL (Extract, Transform, Load) processes to extract, scrub and load data from legacy SQL databases.',
        'Optimized data processing workflows to improve performance and reliability.',
        'Ensured data consistency, integrity, and traceability across all pipeline stages.',
        'Collaborated with data engineers and stakeholders to validate data accuracy and define transformation rules.',
        'Monitored and maintained existing DAGs to support continuous delivery and automated scheduling.',
        'Deployed the application on AWS ECS and improved data quality across all entities.',
        'Actively collaborated with cross-functional teams including Product Boards for bug tracking and sprint planning.',
      ],
      technologies: ['Python', 'Flask', 'AWS S3', 'MySQL', 'MariaDB', 'REST APIs', 'GitLab', 'ECS', 'CloudWatch'],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Cognizant',
      period: 'DEC 2019 - SEP 2020',
      location: 'Remote',
      description: 'Gained hands-on experience in data analysis, reporting, and working with enterprise clients on data-driven solutions.',
      achievements: [
        'Performed data analysis and created reports to support business decision-making.',
        'Collaborated with cross-functional teams to understand client requirements.',
        'Developed Python scripts for data processing and automation tasks.',
        'Gained exposure to enterprise-level data management practices.',
      ],
      technologies: ['Python', 'SQL', 'Excel', 'Data Analysis'],
    },
  ];

  const education = [
    {
      degree: 'Masters of Computer Application (JNTUH) (MCA)',
      institution: 'Sri Chaitanya Institute of Science & Technology',
      period: 'APR 2019 - MAR 2021',
      location: 'Kakinada',
      highlights: [
        'Specialized in web application development and system design',
      ],
    },
    {
      degree: 'Bachelors of Computer Application (AKNU)(BCA)',
      institution: 'Aditya Degree College',
      period: 'MAR 2016 - APR 2019',
      location: 'Kakinada',
      highlights: [
        'Foundation in Computer Science fundamentals and programming',
        'Coursework in Data Structures, Algorithms, and Database Systems',
        'Participated in technical workshops and coding competitions',
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience & Education
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My professional journey in software development and engineering
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1.5 border-4 border-gray-800" />

                  {/* Content */}
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-102">
                    {/* Header */}
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <span className="text-lg text-blue-400 font-semibold">{exp.company}</span>
                        <span className="text-gray-400">{exp.period}</span>
                      </div>
                      <span className="text-gray-500">{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-4">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <svg
                              className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-4">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-102">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 mb-2">
                      <span className="text-lg text-purple-400 font-semibold">{edu.institution}</span>
                      <span className="text-gray-400">{edu.period}</span>
                    </div>
                    <span className="text-gray-500">{edu.location}</span>
                  </div>

                  <div className="max-w-2xl mx-auto">
                    <h5 className="text-lg font-semibold text-white mb-4 text-center">Highlights:</h5>
                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start justify-center space-x-3">
                          <svg
                            className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;