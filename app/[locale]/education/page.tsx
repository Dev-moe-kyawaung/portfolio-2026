'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Code } from 'lucide-react';
import Image from 'next/image';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University of Computer Studies (Pathein)',
    location: 'Pathein, Myanmar',
    period: '2014 - 2018',
    description: 'Focused on software engineering, algorithms, data structures, and computer systems. Graduated with honors.',
    highlights: [
      'Software Engineering Principles',
      'Data Structures & Algorithms',
      'Database Systems',
      'Computer Networks',
      'Operating Systems',
    ],
  },
  {
    degree: 'Bachelor of Arts in English',
    school: 'Pathein Distance University',
    location: 'Pathein, Myanmar',
    period: '2019 - 2021',
    description: 'Enhanced communication skills for technical leadership and documentation. Studied linguistics, literature, and professional writing.',
    highlights: [
      'Professional Writing',
      'Technical Communication',
      'English Linguistics',
      'Literature Analysis',
      'Cross-Cultural Communication',
    ],
  },
];

const certifications = [
  {
    category: 'Android Development',
    certs: [
      'Kotlin Certification',
      'Android Development',
      'Jetpack Compose',
      'Firebase Associate Developer',
    ],
  },
  {
    category: 'Web Development',
    certs: [
      'React Development',
      'JavaScript Advanced',
      'HTML/CSS Advanced',
      'Bootstrap Framework',
    ],
  },
  {
    category: 'AI/ML & Data',
    certs: [
      'Machine Learning',
      'Artificial Intelligence',
      'Python Advanced',
      'Big Data Analytics',
    ],
  },
  {
    category: 'Security & DevOps',
    certs: [
      'Cyber Security',
      'Ethical Hacking',
      'DevOps',
      'Linux Administration',
    ],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Education <span className="neon-text">& Learning</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Formal education and continuous learning through 82+ certifications.
          </p>
        </motion.div>

        {/* University Education */}
        <div className="space-y-12 mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <GraduationCap className="w-12 h-12 text-neon-cyan" />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{edu.degree}</h2>
                  <p className="text-xl text-neon-cyan mb-2">{edu.school}</p>
                  <p className="text-gray-400 mb-4">{edu.location} · {edu.period}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{edu.description}</p>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-neon-cyan" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            Certification Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((category) => (
              <div key={category.category} className="glass-card rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.certs.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-neon-cyan" />
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-8 text-center"
        >
          <Code className="w-16 h-16 mx-auto mb-6 text-neon-cyan" />
          <h2 className="text-3xl font-bold mb-6 neon-text">Learning Philosophy</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Code with culture. Build with purpose." I believe in continuous learning across the full technology stack. 
            From programming languages to web frameworks, databases to AI/ML, security to cloud - I consistently expand 
            my skill set to build better, more impactful applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
