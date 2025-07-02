import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Code, Database, Globe, Brain, Zap, Star, ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentCertificate, setCurrentCertificate] = useState(0);

  // Sample certificates data - you can replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "BUILD YOUR OWN STATIC WEBSITE",
      issuer: "NXTWAVE",
      date: "2024",
      image: "/c1.png"
    },
    {
      id: 2,
      title: "BUILD YOUR OWN RESPONSIVE WEBSITE",
      issuer: "NXTWAVE",
      date: "2024",
      image: "/c2.png"
    },
    {
      id: 3,
      title: "BUILD YOUR OWN DYNAMIC WEB APPLICATION",
      issuer: "NXTWAVE",
      date: "2024",
      image: "/c3.png"
    },
    {
      id: 4,
      title: "INTRODUCTION TO DATABASES",
      issuer: "NXTWAVE",
      date: "2023",
      image: "/c4.png"
    },
    {
      id: 5,
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      date: "2025",
      image: "/c5.png" 
    }
  ];

  const projects = [
    {
      title: "Suraksha",
      tech: "LangGraph, n8n, ElevenLabs",
      github: "https://github.com/saikousik22/suraksha",
      image: "p1.png?auto=compress&cs=tinysrgb&w=800",
      description: "Built SURAKSHA – an AI-powered cybersecurity platform that automates vulnerability detection and educates users through interactive, multilingual tools"
    },
    {
      title: "Sanjeevani",
      tech: "React, Flask, Crew AI, OpenAI Whisper",
      github: "https://github.com/saikousik22/Sanjeevani",
      image: "p2.png?auto=compress&cs=tinysrgb&w=800",
      description: "Built Sanjeevani – a multilingual AI healthcare app with reminders, diagnosis, fake drug detection, and menstrual wellness bot"
    },
    {
      title: "Agentic-Waterfall-SDLC",
      tech: "LangGraph, LangChain, Streamlit",
      github: "https://github.com/saikousik22/Agentic-Waterfall-SDLC",
      image: "p3.png?auto=compress&cs=tinysrgb&w=800",
      description: "Built an interactive Streamlit app simulating the Waterfall SDLC using multi-agent collaboration across all phases"
    },
    {
      title: "TrustedMailCheck",
      tech: "IMAPClient, RSA, SHA-256 Hashing",
      github: "https://github.com/saikousik22/TrustedMailCheck",
      image: "p4.png?auto=compress&cs=tinysrgb&w=800",
      description: "Built TrustedMailCheck – a secure email verification system that uses RSA digital signatures to ensure message authenticity and automatically remove tampered communications"
    },
    {
      title: "Saraswati",
      tech: "Azure, ElevenLabs, Chart.js",
      github: "https://github.com/saikousik22/Tredence-Hackathon",
      image: "P5.png?auto=compress&cs=tinysrgb&w=800",
      description: "Built Saraswati – a neuroadaptive learning platform that uses emotion recognition and voice interaction to deliver personalized education with real-time analytics"
    },
    {
      title: "BreachCheck",
      tech: "XposedOrNot API, Express.js, JavaScript",
      github: "https://github.com/saikousik22/BreachCheck",
      image: "p6.png?auto=compress&cs=tinysrgb&w=800",
      description: "Built a breach-checking tool with a chatbot that uses the XposedOrNot API to detect compromised emails and explain breach info in Telugu"
    }
  ];

  const hackathons = [
    {
      name: "Techathon @ Tantrotsav",
      position: "1st Place",
      prize: "₹5,000",
      location: "Amrita Vishwa Vidyapeetham Chennai",
      organizer: "AMC FOSS",
      sponsors: ["Lenovo", "D-Link"],
      duration: "24-hour National Level Hackathon",
      image: "IMG-20250627-WA0004.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Built Sanjeevani – a multilingual AI healthcare app with reminders, diagnosis, fake drug detection, and menstrual wellness bot",
      certificateUrl: "tantrostsav_certificate.jpg"
    },
    {
      name: "OLabs Nationwide Hackathon",
      position: "1st Place",
      prize: "₹1,00,000",
      location: "Amrita Vishwa Vidyapeetham Amritapuri",
      organizer: "Amrita CREATE, ACM Student Chapter",
      sponsors: ["Ministry of Education", "Ministry of IT, Government of India"],
      duration: "36-hour National Level Hackathon",
      image: "IMG-20250627-WA0006.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Built an AI lab assistant with OCR, ISL and analytics for 25M+ students.",
      certificateUrl: "olabs_certificate.jpg"
    },
    {
      name: "KodeKurukshetra Hackathon",
      position: "1st Place",
      prize: "₹25,000",
      location: "Vishnu Institute of Technology Bhimavaram",
      organizer: "Google Developer Group",
      sponsors: ["Google"],
      duration: "24-hour National Level Hackathon",
      image: "WhatsApp Image 2025-06-14 at 17.49.33_e8c83d5d.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Built a voice-to-voice health assistant that links patients to doctors based on severity and automates elderly appointment booking",
      certificateUrl: "kodekurushetra_Certificate.png"
    },
    {
      name: "Tinkerer's Lab GenAI Hackathon",
      position: "1st Place",
      prize: "₹15,000",
      location: "IIT Hyderabad",
      organizer: "IIT HYD",
      sponsors: ["Pathway"],
      duration: "24-hour National Level Hackathon",
      image: "IMG-20250627-WA0003.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Built a RAG-based AI model that uses pathway data for accurate information retrieval",
      certificateUrl: "iithyd.png"
    },
    {
      name: "InfinityAI Hackathon",
      position: "2nd Runner-up",
      prize: "₹2,00,000",
      location: "Tredence Company Bangalore",
      organizer: "Tredence Inc",
      sponsors: ["Tredence Inc", "Databricks"],
      duration: "24-hour National Level Hackathon",
      image: "IMG-20250627-WA0005.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Engineered an adaptive GenAI solution using emotion and behavior profiling",
      certificateUrl: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'experience', 'certificates', 'coding', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kousik
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Experience", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/WhatsApp Image 2025-07-01 at 16.05.54_49ef243f.jpg" 
                alt="Kousik Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              👋 Hello, I'm Sai Kousik Padarthi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              A passionate <span className="font-semibold text-blue-600">Full Stack Developer</span>, proficient in <span className="font-semibold text-purple-600">Generative AI</span> and <span className="font-semibold text-blue-600">Agentic AI</span>, I build smart, scalable applications using modern web technologies and intelligent workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                📄 Download Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/padarthi-sai-kousik/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                🔗 LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            👤 About Me
          </h2>
          
          {/* Unique About Me Design */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-4 h-full">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="bg-blue-600 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Left: Stats */}
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600">₹3.45L</div>
                    <div className="text-sm text-gray-600">Prize Money Won</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600">5</div>
                    <div className="text-sm text-gray-600">Hackathon Wins</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600">220+</div>
                    <div className="text-sm text-gray-600">Problems Solved</div>
                  </div>
                </div>
                
                {/* Center: Main Description */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Stack Developer, Agentic & GenAI Enthusiast</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-center">
                    I'm a dedicated developer passionate about creating innovative solutions that bridge cutting-edge technology with real-world problems. 
                    My journey is driven by curiosity and a commitment to continuous learning.
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      Agentic AI
                    </div>
                    <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                      GenAI
                    </div>
                    <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Full Stack
                    </div>
                  </div>
                </div>
                
                {/* Right: Skills Highlight */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">Core Expertise</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                      <span className="text-sm font-medium">LangChain & LangGraph</span>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                      <span className="text-sm font-medium">React & Node.js</span>
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                      <span className="text-sm font-medium">Python & AI/ML</span>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                      <span className="text-sm font-medium">RAG & LLM Integration</span>
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Quote */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <blockquote className="text-center text-gray-600 italic">
                  "My goal is to contribute to the advancement of AI-driven solutions while maintaining a focus on user experience and practical implementation."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🧪 Experience
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="\images.jpeg" 
                      alt="Amrita CREATE Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-600">AI Intern</h2>
                  <h3 className="text-xl font-bold text-gray-800">Amrita CREATE </h3><h5> Funded by Ministry of Education and Ministry of IT, Govt. of India</h5>
                  
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>June 2025 - August 2025 (2 months)</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities & Contributions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Developing RAG-based AI Teaching Assistant using JS ML libraries and OLabs content.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Implementing real-time student profiling with MySQL for personalized insights.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Building analytics dashboard with Chart.js and Node.js to track students engagement.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎓 Education
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="education.jpg" 
                    alt="College Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Amrita Vishwa Vidyapeetham</h3>
                <p className="text-gray-600">Amaravati, Andhra Pradesh</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600 mb-2">B.Tech</h4>
                <p className="text-lg text-gray-700 mb-4">Computer Science and Engineering</p>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  <Star className="w-4 h-4 mr-2" />
                  CGPA: 9.75/10
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Key Subjects & Grades:</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Web Development</span>
                    <span className="text-sm font-bold text-green-600">O</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-medium">AI/ML</span>
                    <span className="text-sm font-bold text-green-600">O</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-medium">DSA</span>
                    <span className="text-sm font-bold text-green-600">O</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-medium">OOPS</span>
                    <span className="text-sm font-bold text-green-600">O</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-medium">DBMS</span>
                    <span className="text-sm font-bold text-green-600">O</span>
                  </div>
                  <div className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-medium">OS</span>
                    <span className="text-sm font-bold text-green-600">O</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🛠 Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GenAI & Agentic AI */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Gen AI & Agentic AI Framewroks</h3>
              </div>
              <div className="space-y-2">
                {['LangChain', 'LangGraph', 'Crew AI', 'LlamaIndex'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">AI Technologies</h3>
              </div>
              <div className="space-y-2">
                {['RAG', 'Prompt Engineering', 'LLM Integration', 'Autonomous Agents', 'Transformers', 'NLP', 'MCP'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">AI Platforms</h3>
              </div>
              <div className="space-y-2">
                {['Hugging Face', 'ElevenLabs', 'n8n'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages/Libraries */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Languages/Libraries</h3>
              </div>
              <div className="space-y-2">
                {['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Java'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Web Development</h3>
              </div>
              <div className="space-y-2">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Databases & Tools</h3>
              </div>
              <div className="space-y-2">
                {['MYSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman', 'Cursor AI', 'Google Colab'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            💼 Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain bg-white group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{project.tech}</p>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🏆 Achievements
          </h2>
          
          {/* Total Prize Pool */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">💰 Total Prize Pool Won: ₹3,45,000</h3>
            </div>
          </div>
          
          {/* Hackathons */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Hackathon Victories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hackathons.map((hackathon, index) => (
                <div key={index} className="group bg-white rounded-2xl p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col">
                  {/* Large Image on Top */}
                  <div className="h-48 w-full overflow-hidden bg-white">
                    <img 
                      src={`/${hackathon.image.split('?')[0]}`} 
                      alt={hackathon.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      {/* Remove small image, just show name and position */}
                      <div>
                        <h4 className="font-bold text-gray-800">{hackathon.name}</h4>
                        <p className="text-sm text-green-600 font-semibold">{hackathon.position}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600"><MapPin className="w-4 h-4 inline mr-1" />{hackathon.location}</p>
                      <p className="text-sm text-gray-600"><Calendar className="w-4 h-4 inline mr-1" />{hackathon.duration}</p>
                      <p className="text-lg font-bold text-blue-600">{hackathon.prize}</p>
                    </div>
                    {/* Organizer */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-600">
                        <strong>Organized by:</strong> {hackathon.organizer}
                      </p>
                    </div>
                    {/* Sponsors */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2"><strong>Sponsors:</strong></p>
                      <div className="flex flex-wrap gap-1">
                        {hackathon.sponsors.map((sponsor, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {sponsor}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* View Certificate Button */}
                    <div className="flex justify-between items-center mt-auto">
                      <a 
                        href={hackathon.certificateUrl}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-semibold hover:bg-green-200 transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Certificate
                      </a>
                    </div>
                    {/* Hover description */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                      <p className="text-sm text-gray-700 border-t pt-3">{hackathon.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Research Paper */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Research Publication</h3>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-3 gap-10 items-center">
                  <div className="text-center">
                    <img 
                      src="/WhatsApp Image 2025-05-15 at 15.37.56_90fdc375.jpg" 
                      alt="Research Paper"
                      className="w-72 h-96 mx-auto rounded-lg shadow-md object-contain bg-white"
                    />
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">
                      "A novel ninth-order root-finding algorithm for nonlinear equations with implementations in various software tools"
                    </h4>
                    <p className="text-gray-600">
                      <strong>Journal:</strong> An International Journal of Optimization and Control: Theories & Applications - IJOCTA
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        JCR Impact Factor: 2.2
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        Q1-Applied Mathematics
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                        Scopus CiteScore: 3.3
                      </span>
                    </div>
                    <a 
                      href="https://accscience.com/journal/IJOCTA/articles/online_first/5097"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Paper
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📜 Certificates
          </h2>
          
          {/* Certificate Slider Only */}
          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative h-[32rem] w-full max-w-5xl mx-auto flex items-center justify-center bg-black/10">
                  <img 
                    src={certificates[currentCertificate].image}
                    alt={certificates[currentCertificate].title}
                    className="max-h-[30rem] max-w-full object-contain p-4 bg-white rounded-2xl shadow-lg"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-black/30 rounded-xl p-4 text-white">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{certificates[currentCertificate].title}</h3>
                    <p className="text-lg drop-shadow">{certificates[currentCertificate].issuer}</p>
                    <p className="text-sm font-semibold mt-2 drop-shadow">{certificates[currentCertificate].date}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevCertificate}
                title="Previous Certificate"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextCertificate}
                title="Next Certificate"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
          
          {/* Certificate Indicators */}
          <div className="flex justify-center space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCertificate(index)}
                aria-label={`Show certificate ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentCertificate === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coding Journey Section */}
      <section id="coding" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            💻 Coding Journey
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Programming Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Python</span>
                  <span className="text-sm font-bold text-blue-600">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Java</span>
                  <span className="text-sm font-bold text-blue-600">Advanced</span>
                </div>
              </div>
            </div>

            {/* Total Problems */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Total Solved</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">220+</p>
              <p className="text-sm text-gray-600">Across All Platforms</p>
              <div className="mt-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                Active Coder
              </div>
            </div>

            {/* LeetCode */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">LeetCode</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">160+</p>
              <p className="text-sm text-gray-600">Problems Solved</p>
              <a 
                href="https://leetcode.com/u/kousik111/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                View Profile
              </a>
            </div>

            {/* HackerRank */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">HackerRank</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">3⭐</p>
              <p className="text-sm text-gray-600">Python & Java</p>
              <a 
                href="https://www.hackerrank.com/profile/psaikousik" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📞 Contact Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <form
                action="https://formspree.io/f/mblybjkd"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:saikousik22@gmail.com"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">psaikousik@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/padarthi-sai-kousik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">LinkedIn</p>
                      <p className="text-gray-600">padarthi-sai-kousik</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/saikousik22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">GitHub</p>
                      <p className="text-gray-600">saikousik22</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Floating WhatsApp Button */}
              <div className="text-center">
                <a 
                  href="https://wa.me/9542094359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sai Kousik Padarthi
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer, Agentic & GenAI Enthusiast passionate about building innovative solutions that make a difference.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/saikousik22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/padarthi-sai-kousik/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:saikousik22@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Sai Kousik Padarthi. Built with React & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;