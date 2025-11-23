import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MaximS
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-gray-800 py-4">
            <div className="flex flex-col gap-4 px-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5">
              <span className="text-cyan-400 text-sm font-medium">👋 Welcome</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Maxim</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            IT engineer and developer from Astana. Passionate about creating digital solutions and constantly growing in software development.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-cyan-400/50 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"
            >
              Contact
            </button>
          </div>

          <div className="animate-bounce mt-12">
            <ChevronDown size={24} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gray-900/30 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a 1st year student at Astana IT University, studying Software Engineering on a scholarship basis.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm passionate about development with Python and C++, with practical experience at 7Generation. I continuously learn new technologies and participate in programming and mathematics olympiads.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                In my free time, I enjoy sports (snowboarding, swimming, athletics) and exploring modern technologies.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all">
                <div className="text-cyan-400 font-semibold mb-2">📍 Location</div>
                <p className="text-gray-300">Astana, Kazakhstan</p>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all">
                <div className="text-cyan-400 font-semibold mb-2">🎓 Education</div>
                <p className="text-gray-300">Astana IT University (Scholarship)</p>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all">
                <div className="text-cyan-400 font-semibold mb-2">💼 Experience</div>
                <p className="text-gray-300">Internship at 7Generation (Data Annotator)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Programming</h3>
              <div className="space-y-4">
                {['Python', 'C++'].map((skill) => (
                  <div key={skill} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-sm font-bold">
                      {skill.slice(0, 2)}
                    </div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Other Skills</h3>
              <div className="space-y-3">
                {[
                  'Linux Administration',
                  'Network Technologies',
                  'Analytical Thinking',
                  'English (Intermediate)',
                  'Team Collaboration',
                  'Problem Solving'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gray-900/30 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Game Projects',
                description: 'Developed several games using Python. Implemented game logic, management systems, and interactive elements.',
                tech: ['Python', 'Game Dev']
              },
              {
                title: 'Automation Scripts',
                description: 'Created useful scripts for automating routine tasks in Python and Bash.',
                tech: ['Python', 'Bash', 'Linux']
              },
              {
                title: 'Olympiad Participation',
                description: 'Active participant in school and university olympiads in mathematics and computer science. Solving complex algorithmic problems.',
                tech: ['Algorithms', 'Problem Solving']
              },
              {
                title: 'Data Annotation (7Generation)',
                description: '3-month internship at 7Generation as a data annotator. Working with large volumes of information.',
                tech: ['Data', 'Attention to detail']
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm open to new opportunities and exciting projects
          </p>

          <div className="flex gap-6 justify-center mb-12 flex-wrap">
            <a
              href="tel:+77055406676"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <Mail size={20} />
              +7 705 540 66 76
            </a>
            <a
              href="mailto:msamarin.2007@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all"
            >
              <Mail size={20} />
              Email
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            {[
              { icon: Mail, label: 'Email', href: 'mailto:msamarin.2007@gmail.com' },
              { icon: Github, label: 'GitHub', href: 'https://github.com/sannder01' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-400/20 hover:border-cyan-400/50 border border-gray-700 transition-all group"
                title={social.label}
              >
                <social.icon size={24} className="group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 text-center text-gray-500">
        <p>© 2025 Maxim Samarin. All rights reserved.</p>
      </footer>
    </div>
  );
}