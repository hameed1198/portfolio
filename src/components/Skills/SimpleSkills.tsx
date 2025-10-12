import React from 'react';

const SimpleSkills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'JavaScript', level: 80, icon: '💛' },
        { name: 'SQL', level: 90, icon: '🗄️' },
        { name: 'HTML/CSS', level: 85, icon: '🎨' },
      ],
    },
    {
      category: 'Frameworks & Technologies',
      skills: [
        { name: 'Flask', level: 95, icon: '🌶️' },
        { name: 'Apache Airflow', level: 90, icon: '🌊' },
        { name: 'REST API', level: 90, icon: '🔗' },
        { name: 'Jenkins', level: 80, icon: '🔧' },
      ],
    },
    {
      category: 'Cloud & Tools',
      skills: [
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'Git', level: 90, icon: '�' },
        { name: 'CI/CD Pipeline', level: 85, icon: '⚡' },
        { name: 'Copilot', level: 80, icon: '🤖' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 95, icon: '🐬' },
        { name: 'MariaDB', level: 90, icon: '🗃️' },
        { name: 'RedShift DB', level: 85, icon: '�' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Expertise
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proficient in modern technologies and frameworks for building scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-102"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `skillProgress 2s ease-out ${skillIndex * 0.1}s both`
                          }}
                        />
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'ETL Pipelines', 'Data Engineering', 'Airflow', 'Data Analytics',
                'Azure', 'ChatGPT', 'Cursor', 'CloudWatch', 'ECS & S3',
                'Database Management', 'API Development', 'Version Control'
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full text-gray-300 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles - using CSS classes instead of jsx */}
    </section>
  );
};

export default SimpleSkills;