"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur bg-black/30 border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">Amit</h1>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Amit Bajpai
        </motion.h1>

        <p className="text-lg text-gray-400 max-w-xl">
          Architecting scalable cloud platforms & DevOps ecosystems across AWS,
          GCP & Azure.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/resume.pdf"
            className="px-5 py-2 bg-white text-black rounded-lg font-medium"
          >
            Download Resume
          </a>

          <a
  href="https://www.linkedin.com/in/amit-bajpai-35041117/"
  target="_blank"
  className="px-5 py-2 border border-white rounded-lg transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
>
  LinkedIn
</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          16+ years of experience leading cloud transformation, DevOps
          modernization, and platform engineering initiatives across Fortune-500
          enterprises.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "AWS / GCP / Azure",
            "Kubernetes & Docker",
            "Terraform",
            "CI/CD",
            "DevSecOps",
            "Observability",
          ].map((skill, i) => (
            <motion.div whileHover={{ scale: 1.05 }} key={i}>
              <div className="bg-zinc-900/60 backdrop-blur border border-zinc-800 p-6 rounded-xl text-center">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
     {/* Experience */}
<section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>

  <div className="relative border-l border-zinc-800 pl-6 space-y-12">

    {/* StatusNeo */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -left-[11px] top-2 w-4 h-4 bg-white rounded-full"></div>

      <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:scale-[1.02] transition">
        <div className="flex items-center gap-4 mb-2">
          <img src="/statusneo.png" className="w-10 h-10 object-contain" />
          <a href="https://statusneo.com" target="_blank" className="text-xl font-semibold hover:underline">
            StatusNeo ↗
          </a>
        </div>

        <p className="text-gray-400 text-sm">Principal Consultant • 2024 – 2026</p>
        <p className="text-gray-400 mt-2 text-sm">
          Led cloud security, AI/ML platforms, and large-scale migrations.
        </p>
      </div>
    </motion.div>

    {/* 66Degrees */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute -left-[11px] top-2 w-4 h-4 bg-white rounded-full"></div>

      <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:scale-[1.02] transition">
        <div className="flex items-center gap-4 mb-2">
          <img src="/66degrees.png" className="w-10 h-10 object-contain" />
          <a href="https://66degrees.com" target="_blank" className="text-xl font-semibold hover:underline">
            66Degrees ↗
          </a>
        </div>

        <p className="text-gray-400 text-sm">Senior Cloud Engineer • 2021 – 2023</p>
        <p className="text-gray-400 mt-2 text-sm">
          Built CI/CD pipelines and cloud foundations for SaaS platforms.
        </p>
      </div>
    </motion.div>

    {/* Wipro */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -left-[11px] top-2 w-4 h-4 bg-white rounded-full"></div>

      <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:scale-[1.02] transition">
        <div className="flex items-center gap-4 mb-2">
          <img src="/wipro.png" className="w-10 h-10 object-contain" />
          <a href="https://www.wipro.com" target="_blank" className="text-xl font-semibold hover:underline">
            Wipro ↗
          </a>
        </div>

        <p className="text-gray-400 text-sm">Principal Consultant • 2015 – 2021</p>
        <p className="text-gray-400 mt-2 text-sm">
          Led enterprise DevOps transformation and cloud strategy.
        </p>
      </div>
    </motion.div>

  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Cloud Migration Platform",
            "AI/ML DevOps Pipeline",
            "Terraform Automation Suite",
            "Observability Dashboard",
          ].map((project, i) => (
            <motion.div whileHover={{ y: -5 }} key={i}>
              <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                <p className="text-gray-400 text-sm">
                  Enterprise-grade solution showcasing architecture, scalability
                  and impact.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>

        <p className="text-gray-400 mb-6">
          amitbajpai.lko@gmail.com
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:amitbajpai.lko@gmail.com"
            className="px-5 py-2 bg-white text-black rounded-lg"
          >
            Send Email
          </a>

          <a
  href="https://github.com/bajpai30amit"
  target="_blank"
  className="px-5 py-2 border border-white rounded-lg transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
>
  GitHub
</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-zinc-800">
        © {new Date().getFullYear()} Amit Bajpai. All rights reserved.
      </footer>
    </div>
  );
}
