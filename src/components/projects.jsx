import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon, FolderIcon } from './icons.jsx';

export default function Projects() {
  const projectList = [
    {
      title: "MoneyMate",
      description: "Aplikasi manajemen keuangan pribadi berbasis web untuk mencatat transaksi, mengelola anggaran harian, dan analisis grafik keuangan.",
      tech: ["React", "Laravel", "Tailwind CSS", "MySQL"],
      github: "https://github.com/danielcharlie9122e/moneymate",
      demo: "#",
    },
    {
      title: "Interactive Quiz Gamification",
      description: "Aplikasi media pembelajaran interaktif berbasis web dengan elemen gamifikasi untuk meningkatkan engagement siswa.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Personal Portfolio Web",
      description: "Website portofolio interaktif dan responsif dengan tema futuristik untuk menampilkan profil, keahlian, dan proyek.",
      tech: ["Vite", "React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f] text-[#e2e8f0] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Proyek <span className="text-[#06b6d4]">Unggulan</span>
          </h2>
          <div className="w-20 h-1 bg-[#06b6d4] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#12121a] border border-[#1e1e2d] hover:border-[#06b6d4]/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div>
                {/* Top Card Bar */}
                <div className="flex items-center justify-between mb-6">
                  <FolderIcon className="w-10 h-10 text-[#06b6d4]" />
                  <div className="flex space-x-3 text-[#64748b]">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors">
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((techItem, tIdx) => (
                  <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-[#1e1e2d] text-[#06b6d4] font-mono">
                    {techItem}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}