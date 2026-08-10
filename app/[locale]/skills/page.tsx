'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Smartphone,
  Code,
  Layers,
  Database,
  Cloud,
  TestTube,
  Globe,
  Cpu,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: [
      { name: 'Kotlin', level: 95 },
      { name: 'Jetpack Compose', level: 90 },
      { name: 'Android SDK', level: 95 },
      { name: 'Kotlin Multiplatform', level: 85 },
      { name: 'Coroutines & Flow', level: 90 },
    ],
  },
  {
    icon: Code,
    title: 'Architecture',
    skills: [
      { name: 'MVVM/MVI', level: 95 },
      { name: 'Clean Architecture', level: 90 },
      { name: 'SOLID Principles', level: 95 },
      { name: 'Design Patterns', level: 90 },
      { name: 'Dependency Injection', level: 90 },
    ],
  },
  {
    icon: Layers,
    title: 'Libraries & Tools',
    skills: [
      { name: 'Jetpack Libraries', level: 95 },
      { name: 'Retrofit/OkHttp', level: 90 },
      { name: 'Room Database', level: 90 },
      { name: 'Dagger/Hilt', level: 85 },
      { name: 'Ktor', level: 80 },
    ],
  },
  {
    icon: TestTube,
    title: 'Testing',
    skills: [
      { name: 'JUnit5', level: 90 },
      { name: 'MockK/Mockito', level: 90 },
      { name: 'Espresso', level: 85 },
      { name: 'Testcontainers', level: 80 },
      { name: 'Turbine', level: 85 },
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: [
      { name: 'Next.js 15', level: 90 },
      { name: 'React 19', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'Vercel', level: 90 },
    ],
  },
  {
    icon: Cpu,
    title: '3D & Graphics',
    skills: [
      { name: 'Three.js', level: 80 },
      { name: 'React Three Fiber', level: 80 },
      { name: 'WebGL', level: 75 },
      { name: 'Canvas API', level: 85 },
      { name: 'GSAP', level: 80 },
    ],
  },
  {
    icon: Database,
    title: 'Other',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 90 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Code Review', level: 95 },
      { name: 'Mentoring', level: 90 },
    ],
  },
];

export default function Skills() {
  const t = useTranslations('Skills');

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
            <span className="neon-text">Skills</span> & Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built over 10+ years of professional
            development experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="glass-card rounded-xl p-6 glass-card-hover"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-neon-cyan mr-3" />
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * catIndex + 0.05 * skillIndex,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-neon-cyan font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.1 * catIndex + 0.05 * skillIndex + 0.3,
                        }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Google Associate Android Developer',
                issuer: 'Google',
                year: '2018',
              },
              {
                name: 'AWS Certified Developer',
                issuer: 'Amazon Web Services',
                year: '2020',
              },
              {
                name: 'Kotlin Certified Developer',
                issuer: 'JetBrains',
                year: '2021',
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.9 }}
                className="glass-card rounded-xl p-6 text-center glass-card-hover"
              >
                <div className="text-neon-cyan font-bold text-lg mb-2">
                  {cert.name}
                </div>
                <div className="text-gray-400 text-sm">{cert.issuer}</div>
                <div className="text-gray-500 text-xs mt-2">{cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
