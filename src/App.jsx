import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- Inline SVG Icons (Replacing lucide-react to prevent jsx-runtime module errors) ---
const CodeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SmartphoneIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const DatabaseIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const LayoutIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const DownloadIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
// --------------------------------------------------------------------------------------

const CustomStyles = () => (
  <style>{`
    :root {
      --deep-dark: #0a0a0f;
      --surface: #111118;
      --primary: #06b6d4;
      --secondary: #8b5cf6;
      --accent: #f43f5e;
      --text-primary: #e2e8f0;
      --text-muted: #64748b;
    }
    body {
      background-color: var(--deep-dark);
      color: var(--text-primary);
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      overflow-x: hidden;
    }
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 25s linear infinite;
      display: flex;
      width: max-content;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 530ms infinite;
    }
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: var(--deep-dark);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--surface);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--text-muted);
    }
  `}</style>
);

const nameSequence = ["D", "Da", "Dan", "Dani", "Daniel", "Daniel C", "Daniel Charlie"];

const Loader = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < nameSequence.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          onComplete();
        }, 800);
        return prev;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
    >
      <h1 className="text-4xl font-bold text-[#e2e8f0] tracking-widest h-12">
        {nameSequence[textIndex]}
      </h1>
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-48 h-[2px] bg-[#06b6d4] mt-4 origin-left"
      />
    </motion.div>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const roles = ['Frontend Developer', 'System Analyst', 'Flutter Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Canvas Vectors with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 50, stiffness: 400 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#06b6d4] rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
      </motion.div>

      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#06b6d4]/30 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          <img 
            src="foto.jpg" 
            alt="Daniel Charlie" 
            className="w-full h-full object-cover object-top" 
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#64748b] text-lg md:text-xl mb-4 tracking-wide uppercase font-semibold"
        >
          Daniel Charlie Samuel Siburian
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#e2e8f0] mb-6 leading-tight"
        >
          Building Systems <br /> for <span className="text-[#06b6d4]">Impact.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl md:text-3xl font-mono text-[#8b5cf6] h-10 flex items-center justify-center"
        >
          <span>{currentText}</span>
          <span className="w-3 h-8 bg-[#8b5cf6] ml-2 animate-blink inline-block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-[#64748b] mt-6"
        >
          <MapPinIcon className="w-4 h-4" />
          <span>Batam, Riau Islands, Indonesia</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="CV_Daniel_Charlie.pdf" 
            download="CV_Daniel_Charlie_Siburian.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-[#0a0a0f] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <DownloadIcon className="w-5 h-5" />
            Download CV
          </a>
          <a 
            href="https://www.linkedin.com/in/daniel-charlie-samuel-siburian-1a9a162a3/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#64748b]/30 bg-[#111118] text-[#e2e8f0] hover:text-[#06b6d4] hover:border-[#06b6d4] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/danielcharlie9122e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#64748b]/30 bg-[#111118] text-[#e2e8f0] hover:text-[#06b6d4] hover:border-[#06b6d4] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/danielchrliie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#64748b]/30 bg-[#111118] text-[#e2e8f0] hover:text-[#f43f5e] hover:border-[#f43f5e] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const timelineData = [
  { year: '2023', text: 'Enrolled at Politeknik Negeri Batam (Polibatam), Kepulauan Riau, majoring in Software Engineering Technology (TRPL).' },
  { year: '2024', text: 'Advanced core practices focused on UI optimization, responsive architecture, and frontend system development.' },
  { year: '2025', text: 'Formulated engineering research framework for the MoneyMate personal financial manager platform.' },
  { year: '2026', text: 'Active student in Semester 6 at Polibatam, implementing advanced object-oriented modeling and enterprise web systems.' },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 px-6 bg-[#0a0a0f] relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20 text-[#e2e8f0] text-center"
        >
          Academic & Professional <span className="text-[#06b6d4]">Timeline</span>
        </motion.h2>

        <div className="relative">
          {/* Central Tracking Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#111118] md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full bg-[#f43f5e]" 
              style={{ height }}
            />
          </div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] md:left-1/2 w-5 h-5 rounded-full bg-[#0a0a0f] border-4 border-[#f43f5e] md:-translate-x-1/2 z-10 mt-1 md:mt-0" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] bg-[#111118] p-6 rounded-xl border border-[#64748b]/20 shadow-xl hover:border-[#f43f5e]/50 transition-colors ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <span className="text-[#f43f5e] font-mono font-bold text-xl mb-2 block">{item.year}</span>
                  <p className="text-[#e2e8f0] leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  { name: 'Laravel', val: 95, icon: <CodeIcon className="w-5 h-5 text-[#f43f5e]" /> },
  { name: 'Flutter', val: 90, icon: <SmartphoneIcon className="w-5 h-5 text-[#06b6d4]" /> },
  { name: 'Firebase', val: 85, icon: <DatabaseIcon className="w-5 h-5 text-[#fbbf24]" /> },
  { name: 'System Analysis & Architecture', val: 85, icon: <LayoutIcon className="w-5 h-5 text-[#8b5cf6]" /> },
];

const Skills = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] border-t border-[#111118] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-[#e2e8f0]"
        >
          Technical <span className="text-[#06b6d4]">Matrix</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                  {skill.icon}
                  <span className="text-[#e2e8f0] font-medium text-lg">{skill.name}</span>
                </div>
                <span className="text-[#06b6d4] font-mono">{skill.val}%</span>
              </div>
              <div className="w-full bg-[#111118] h-3 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="w-full overflow-hidden bg-[#111118] py-6 flex border-y border-[#64748b]/10 transform -rotate-1 origin-left scale-105">
        <div className="animate-marquee flex text-[#06b6d4] font-mono text-2xl space-x-8 uppercase tracking-widest opacity-80">
           <span>Laravel • Flutter • Firebase • MySQL • PostgreSQL • Tailwind • Git • Figma • Postman • </span>
           <span>Laravel • Flutter • Firebase • MySQL • PostgreSQL • Tailwind • Git • Figma • Postman • </span>
           <span>Laravel • Flutter • Firebase • MySQL • PostgreSQL • Tailwind • Git • Figma • Postman • </span>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto space-y-24">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-[#e2e8f0] text-center"
          >
            Flagship <span className="text-[#06b6d4]">Architecture</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#111118] rounded-2xl border border-[#64748b]/20 overflow-hidden hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:border-[#06b6d4]/50 hover:-translate-y-2 transition-all duration-500 flex flex-col lg:flex-row"
          >
            {/* Project Details */}
            <div className="p-10 lg:w-1/2 flex flex-col justify-center z-10">
              <div className="flex items-center space-x-3 mb-6">
                <DatabaseIcon className="w-8 h-8 text-[#06b6d4]" />
                <h3 className="text-3xl font-bold text-[#e2e8f0]">MoneyMate</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-1">Role</h4>
                  <p className="text-[#e2e8f0] font-medium">Frontend & Backend Developer</p>
                </div>
                
                <div>
                  <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-1">Challenge</h4>
                  <p className="text-[#e2e8f0]/80 leading-relaxed text-sm">
                    Implementing ultra-low latency data synchronization between high-relational client interfaces and isolated backend systems without inflating transaction expenses.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-1">Solution</h4>
                  <p className="text-[#e2e8f0]/80 leading-relaxed text-sm">
                    Built a hybrid sync architecture using a Laravel backend core coupled alongside Firebase Realtime Database pipelines, structuring strict schema rules to secure instant mutations.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-2">Key Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['System Design (UML)', 'UI/UX Design (Figma)', 'Responsive Web Design', 'Prototyping', 'Agile/Scrum'].map(comp => (
                      <span key={comp} className="px-3 py-1 bg-[#1e1e28] text-[#06b6d4] text-xs font-medium rounded-md border border-[#06b6d4]/20 shadow-sm">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <span className="px-4 py-2 rounded-full bg-[#06b6d4]/10 text-[#06b6d4] text-xs font-mono font-bold">Laravel</span>
                <span className="px-4 py-2 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] text-xs font-mono font-bold">Firebase</span>
                <span className="px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-mono font-bold">Flutter</span>
              </div>
            </div>

            {/* Web Interface Mockup Area */}
            <div className="lg:w-1/2 bg-gradient-to-br from-[#1e1e28] to-[#0a0a0f] relative overflow-hidden min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="w-full bg-[#0a0a0f] rounded-xl border border-[#64748b]/30 shadow-2xl relative flex flex-col overflow-hidden group-hover:border-[#06b6d4]/50 transition-colors"
              >
                <img 
                  src="image_dfd723.png~" 
                  alt="MoneyMate Web UI" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="group relative bg-[#111118] rounded-2xl border border-[#64748b]/20 overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:border-[#8b5cf6]/50 hover:-translate-y-2 transition-all duration-500 flex flex-col lg:flex-row-reverse"
        >
          {/* Project Details */}
          <div className="p-10 lg:w-1/2 flex flex-col justify-center z-10">
            <div className="flex items-center space-x-3 mb-6">
              <SmartphoneIcon className="w-8 h-8 text-[#8b5cf6]" />
              <h3 className="text-3xl font-bold text-[#e2e8f0]">Interactive Learning Media</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-1">Role</h4>
                <p className="text-[#e2e8f0] font-medium">Full Stack Developer</p>
              </div>
              
              <div>
                <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-1">Challenge</h4>
                <p className="text-[#e2e8f0]/80 leading-relaxed text-sm">
                  Designing an engaging and structured digital education platform with gamification methodologies to increase student engagement, catering to different user roles (Admin, Teacher, Student).
                </p>
              </div>

              <div>
                <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-1">Solution</h4>
                <p className="text-[#e2e8f0]/80 leading-relaxed text-sm">
                  Developed a comprehensive mobile-first application featuring interactive quizzes, role-based dashboards, and structured learning flows for an immersive learning experience.
                </p>
              </div>

              <div>
                <h4 className="text-[#64748b] text-sm uppercase tracking-wider font-semibold mb-2">Key Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Mobile App Design', 'Gamification', 'Role-Based Flow', 'Wireframing', 'User Engagement'].map(comp => (
                    <span key={comp} className="px-3 py-1 bg-[#1e1e28] text-[#8b5cf6] text-xs font-medium rounded-md border border-[#8b5cf6]/20 shadow-sm">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <span className="px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-mono font-bold">Flutter</span>
              <span className="px-4 py-2 rounded-full bg-[#f43f5e]/10 text-[#f43f5e] text-xs font-mono font-bold">Figma</span>
              <span className="px-4 py-2 rounded-full bg-[#06b6d4]/10 text-[#06b6d4] text-xs font-mono font-bold">REST API</span>
            </div>
          </div>

          {/* Web Interface Mockup Area */}
          <div className="lg:w-1/2 bg-[#1b1b1b] relative overflow-hidden min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="w-full bg-[#0a0a0f] rounded-xl border border-[#64748b]/30 shadow-2xl relative flex flex-col overflow-hidden group-hover:border-[#8b5cf6]/50 transition-colors"
            >
              <img 
                src="image_df846e.png" 
                alt="Interactive Learning Media Mobile UI" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 bg-white" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [stage, setStage] = useState(0);

  const handleInView = () => {
    if (stage !== 0) return;
    setTimeout(() => setStage(1), 800);
    setTimeout(() => setStage(2), 2000);
    setTimeout(() => setStage(3), 3200);
    setTimeout(() => setStage(4), 4500);
  };

  return (
    <section className="py-32 px-6 bg-[#0a0a0f] relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-[#e2e8f0] text-center"
        >
          System <span className="text-[#8b5cf6]">Portal</span>
        </motion.h2>
        
        <motion.div 
          onViewportEnter={handleInView}
          viewport={{ amount: 0.5, once: true }}
          className="w-full bg-[#111118] border border-[#64748b]/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm sm:text-base"
        >
          <div className="bg-[#1e1e28] px-4 py-3 flex items-center space-x-2 border-b border-[#64748b]/20">
            <div className="w-3 h-3 rounded-full bg-[#f43f5e]" />
            <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
            <div className="w-3 h-3 rounded-full bg-[#4ade80]" />
            <span className="ml-4 text-[#64748b] text-xs flex-1 text-center pr-10">daniel@portfolio ~ bash</span>
          </div>
          
          <div className="p-6 md:p-8 text-[#4ade80] min-h-[300px]">
            {stage >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span> <span className="text-[#e2e8f0]">whoami</span>
                <p className="text-[#e2e8f0] mt-2 ml-4 border-l-2 border-[#4ade80]/30 pl-4">Daniel Charlie Samuel Siburian</p>
              </motion.div>
            )}
            
            {stage >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span> <span className="text-[#e2e8f0]">skills</span>
                <p className="text-[#e2e8f0] mt-2 ml-4 border-l-2 border-[#4ade80]/30 pl-4">Laravel, Flutter, Firebase, System Analysis</p>
              </motion.div>
            )}

            {stage >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span> <span className="text-[#e2e8f0]">contact --links</span>
                <div className="text-[#e2e8f0] mt-2 ml-4 border-l-2 border-[#4ade80]/30 pl-4 space-y-2">
                  <a href="mailto:danielces1120@gmail.com" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                    <MailIcon className="w-4 h-4" /> danielces1120@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-charlie-samuel-siburian-1a9a162a3/" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
                  </a>
                  <a href="https://github.com/danielcharlie9122e" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                <GithubIcon className="w-4 h-4" /> GitHub Repository
              </a>
              <a href="https://www.instagram.com/danielchrliie/" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                <InstagramIcon className="w-4 h-4" /> Instagram Profile
              </a>
            </div>
          </motion.div>
        )}

        {stage >= 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span>
                <span className="inline-block w-2.5 h-5 bg-[#4ade80] animate-blink align-middle ml-2 translate-y-[-2px]" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex flex-col w-full bg-[#0a0a0f] min-h-screen selection:bg-[#06b6d4]/30 selection:text-white">
      <CustomStyles />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Simple Fixed Navbar Simulation */}
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#111118]">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-[#e2e8f0] font-bold text-xl tracking-tighter">
              Daniel<span className="text-[#06b6d4]">.</span>
            </span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-[#64748b]">
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">About</span>
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">Matrix</span>
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">Architecture</span>
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">Portal</span>
            </div>
          </div>
        </nav>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-8 text-center border-t border-[#111118] bg-[#0a0a0f]">
          <p className="text-[#64748b] text-sm">
            © 2026 Daniel Charlie Samuel Siburian. Politeknik Negeri Batam.
          </p>
        </footer>
      </motion.div>
    </div>
  );
}