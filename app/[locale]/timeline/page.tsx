'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const timeline = [
  {
    year: '2014',
    title: 'Started Programming',
    type: 'journey',
    icon: Code,
    description: 'First line of code. Built simple console applications in C and Java.',
  },
  {
    year: '2016',
    title: 'Android Development',
    type: 'journey',
    icon: Briefcase,
    description: 'Built first Android app - a calculator with Material Design. Discovered passion for mobile development.',
  },
  {
    year: '2018',
    title: 'Bachelor of Computer Science',
    type: 'education',
    icon: GraduationCap,
    description: 'University of Computer Studies (Pathein), Myanmar. Focused on software engineering and algorithms.',
  },
  {
    year: '2018',
    title: 'Senior Developer Role',
    type: 'work',
    icon: Briefcase,
    description: 'Led team of 5 developers building telecom client app with 2.5M+ users. Implemented Clean Architecture.',
  },
  {
    year: '2020',
    title: 'Kotlin Multiplatform',
    type: 'journey',
    icon: Code,
    description: 'Pioneered KMM adoption in production, reducing code duplication by 40% across Android/iOS.',
  },
  {
    year: '2021',
    title: 'Bachelor of Arts in English',
    type: 'education',
    icon: GraduationCap,
    description: 'Pathein Distance University. Enhancing communication skills for technical leadership.',
  },
  {
    year: '2022',
    title: 'Jetpack Compose Expert',
    type: 'journey',
    icon: Code,
    description: 'Migrated 50+ screens from XML to Compose, improving performance by 30% and developer productivity.',
  },
  {
    year: '2024',
    title: 'System Architecture',
    type: 'work',
    icon: Briefcase,
    description: 'Designed scalable architecture patterns used across 10+ products serving millions of users.',
  },
  {
    year: '2024',
    title: '82+ Certifications',
    type: 'achievement',
    icon: Award,
    description: 'Completed 82+ certifications across Android, web, AI/ML, security, and cloud technologies.',
  },
  {
    year: '2026',
    title: 'Full-Stack Expansion',
    type: 'journey',
    icon: Code,
    description: 'Extended expertise to Next.js, React, and modern web technologies. Building premium portfolio.',
  },
  {
    year: '2026',
    title: 'Currently Building',
    type: 'work',
    icon: Briefcase,
    description: 'MoekyawTranslator — AI Translation App with Claude API, supporting 8 languages including Myanmar.',
  },
];

export default function Timeline() {
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
            Career <span className="neon-text">Timeline</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            10+ years of continuous learning, building, and growing as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan opacity-30" />

          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:mr-auto' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div
                className={`glass-card rounded-xl p-6 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="w-10 h-10 text-neon-cyan" />
                  <div>
                    <div className="text-2xl font-bold text-neon-cyan">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full border-4 border-background md:block hidden" />
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 glass-card rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Current Focus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">Mobile</h3>
              <p className="text-gray-300">
                Kotlin · Jetpack Compose · MVVM · Clean Arch
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">Backend</h3>
              <p className="text-gray-300">
                Firebase · REST APIs · Python
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">AI/ML</h3>
              <p className="text-gray-300">
                Claude API · TFLite · On-Device ML
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
