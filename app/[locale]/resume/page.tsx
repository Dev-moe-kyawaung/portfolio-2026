'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import Link from 'next/link';

const experience = [
  {
    role: 'Senior Android Developer',
    company: 'Microsoft (Remote)',
    period: '2024 - Present',
    description: 'Leading Android development for enterprise applications with 2.5M+ users. Implemented Clean Architecture and Jetpack Compose migration.',
  },
  {
    role: 'Android Developer',
    company: 'Tech Startup',
    period: '2020 - 2024',
    description: 'Built fintech P2P payment system processing 100K+ transactions daily. Designed scalable architecture patterns.',
  },
  {
    role: 'Junior Android Developer',
    company: 'Software Company',
    period: '2016 - 2020',
    description: 'Developed telecom client app with eSIM management and real-time billing features.',
  },
];

const skills = [
  { category: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'KMM'] },
  { category: 'Architecture', items: ['MVVM/MVI', 'Clean Architecture', 'SOLID', 'Design Patterns'] },
  { category: 'Backend', items: ['Firebase', 'REST APIs', 'Room DB', 'Retrofit'] },
  { category: 'AI/ML', items: ['Claude API', 'TFLite', 'Python', 'On-Device ML'] },
  { category: 'Security', items: ['Ethical Hacking', 'Linux', 'Kali', 'Cryptography'] },
  { category: 'DevOps', items: ['Git', 'GitHub Actions', 'CI/CD', 'Docker'] },
];

export default function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Resume <span className="neon-text">& CV</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            10+ years of experience building production-grade Android applications.
          </p>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Download PDF
          </a>
          <Link
            href="/contact"
            className="px-8 py-4 glass-card border border-neon-cyan text-neon-cyan font-bold rounded-lg glass-card-hover hover:bg-neon-cyan hover:text-black transition-all"
          >
            Request Full CV
          </Link>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass-card rounded-xl p-6 text-center">
            <Briefcase className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <GraduationCap className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">2</div>
            <div className="text-gray-400">Bachelor Degrees</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Award className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">82+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.company} className="border-l-2 border-neon-cyan pl-6">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-neon-cyan mb-2">{job.company} · {job.period}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h3 className="text-lg font-bold mb-3 text-neon-cyan">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-glass-light text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-neon-cyan pl-6">
              <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
              <p className="text-neon-cyan mb-2">University of Computer Studies (Pathein) · 2014-2018</p>
              <p className="text-gray-300">Software Engineering, Algorithms, Data Structures</p>
            </div>
            <div className="border-l-2 border-neon-cyan pl-6">
              <h3 className="text-xl font-bold">Bachelor of Arts in English</h3>
              <p className="text-neon-cyan mb-2">Pathein Distance University · 2019-2021</p>
              <p className="text-gray-300">Professional Writing, Technical Communication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
