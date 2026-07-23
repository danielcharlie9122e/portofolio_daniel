import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Import komponen dari folder components
import Loader from "./components/loader.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("home");

  // Efek durasi animasi loader saat halaman pertama kali dibuka
  useEffect(() => {
    // Mencegah scroll saat masih loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 detik loading

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Handler untuk smooth scroll navigasi
  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-[#0a0a0f] min-h-screen text-[#e2e8f0] font-sans selection:bg-[#06b6d4] selection:text-white relative">
      {/* Screen Loader Animasi */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Konten Utama Portofolio */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col min-h-screen relative"
        >
          {/* Floating Sticky Navbar */}
          <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
            <nav className="flex items-center space-x-1 md:space-x-2 px-4 py-2.5 rounded-full bg-[#12121a]/80 backdrop-blur-md border border-[#1e1e2d] shadow-2xl shadow-black/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                    activeNav === item.id
                      ? "bg-[#06b6d4] text-black shadow-md shadow-[#06b6d4]/20"
                      : "text-[#94a3b8] hover:text-white hover:bg-[#1e1e2d]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </header>

          {/* Section Hero / Header Utama */}
          <div id="hero">
            <Hero />
          </div>

          <main className="flex-grow space-y-12">
            {/* Section Tentang Saya */}
            <About />

            {/* Section Keahlian & Tech Stack */}
            <Skills />

            {/* Section Proyek Unggulan */}
            <Projects />

            {/* Section Kontak */}
            <Contact />
          </main>

          {/* Footer Sederhana */}
          <footer className="py-8 border-t border-[#1e1e2d] text-center text-sm text-[#64748b] bg-[#0a0a0f] mt-20">
            <p>© {new Date().getFullYear()} Daniel. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}