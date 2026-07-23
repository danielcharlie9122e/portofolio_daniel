import React, { useState } from "react";
import { motion } from "framer-motion";
// PERBAIKAN: Diubah dari ./iconsTemp menjadi ./icons.jsx (atau ./Icons.jsx sesuai nama file kamu)
import { MailIcon, LinkedinIcon, GithubIcon, InstagramIcon, MapPinIcon } from './icons.jsx';;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika kirim pesan (misal via EmailJS atau backend)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f] text-[#e2e8f0] px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hubungi <span className="text-[#06b6d4]">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-[#06b6d4] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#94a3b8] text-sm md:text-base">
            Punya ide proyek, tawaran kolaborasi, atau sekadar ingin menyapa? Silakan tinggalkan pesan!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Mari Berdiskusi</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-8">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang pengembangan perangkat lunak.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#12121a] border border-[#1e1e2d] text-[#06b6d4]">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b]">Email</p>
                    <a href="mailto:danielces1120@gmail.com" className="text-sm font-medium text-white hover:text-[#06b6d4] transition-colors">
                      danielces1120@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#12121a] border border-[#1e1e2d] text-[#06b6d4]">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b]">Lokasi</p>
                    <p className="text-sm font-medium text-white">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-4">Sosial Media</p>
              <div className="flex space-x-4 text-[#94a3b8]">
                <a href="https://github.com/danielcharlie9122e" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#12121a] border border-[#1e1e2d] hover:text-[#06b6d4] hover:border-[#06b6d4]/50 transition-all">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-charlie-samuel-siburian-1a9a162a3/?locale=in" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#12121a] border border-[#1e1e2d] hover:text-[#06b6d4] hover:border-[#06b6d4]/50 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/danielchrliie/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#12121a] border border-[#1e1e2d] hover:text-[#06b6d4] hover:border-[#06b6d4]/50 transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Kirim Pesan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2d]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-[#94a3b8] mb-2">Nama Anda</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-[#1e1e2d] text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94a3b8] mb-2">Email Anda</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-[#1e1e2d] text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94a3b8] mb-2">Pesan</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-[#1e1e2d] text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#06b6d4] text-black font-semibold text-sm hover:bg-[#0891b2] transition-colors shadow-lg shadow-[#06b6d4]/20"
              >
                {submitted ? "Pesan Terkirim!" : "Kirim Pesan"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}