'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techCategories = [
  {
    title: 'Android / Mobile',
    icon: '📱',
    technologies: [
      { name: 'Kotlin', level: 95, color: '#7F52FF' },
      { name: 'Jetpack Compose', level: 90, color: '#4285F4' },
      { name: 'Android SDK', level: 95, color: '#3DDC84' },
      { name: 'Kotlin Multiplatform', level: 85, color: '#7F52FF' },
      { name: 'Coroutines & Flow', level: 90, color: '#7F52FF' },
    ],
  },
  {
    title: 'Architecture & Patterns',
    icon: '🏗️',
    technologies: [
      { name: 'MVVM/MVI', level: 95, color: '#C9A84C' },
      { name: 'Clean Architecture', level: 90, color: '#1A1A2E' },
      { name: 'SOLID Principles', level: 95, color: '#4285F4' },
      { name: 'Design Patterns', level: 90, color: '#C9A84C' },
      { name: 'Dependency Injection', level: 90, color: '#7F52FF' },
    ],
  },
  {
    title: 'Backend & Cloud',
    icon: '☁️',
    technologies: [
      { name: 'Firebase', level: 90, color: '#FFCA28' },
      { name: 'REST APIs', level: 90, color: '#16213E' },
      { name: 'Retrofit/OkHttp', level: 90, color: '#48B983' },
      { name: 'Room Database', level: 90, color: '#3DDC84' },
      { name: 'Python', level: 85, color: '#3776AB' },
    ],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    technologies: [
      { name: 'Claude API', level: 85, color: '#C9A84C' },
      { name: 'TFLite', level: 80, color: '#FF6F00' },
      { name: 'On-Device ML', level: 80, color: '#4285F4' },
      { name: 'Machine Learning', level: 85, color: '#3776AB' },
      { name: 'Computer Vision', level: 80, color: '#FF6F00' },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: '🔐',
    technologies: [
      { name: 'Ethical Hacking', level: 85, color: '#0D0D0D' },
      { name: 'Linux', level: 90, color: '#FCC624' },
      { name: 'Kali Linux', level: 85, color: '#557C94' },
      { name: 'Cryptography', level: 80, color: '#0D0D0D' },
      { name: 'Network Security', level: 80, color: '#0D0D0D' },
    ],
  },
  {
    title: 'Dev Tools',
    icon: '🛠️',
    technologies: [
      { name: 'Git', level: 95, color: '#F05032' },
      { name: 'GitHub Actions', level: 90, color: '#2088FF' },
      { name: 'VS Code', level: 95, color: '#007ACC' },
      { name: 'Figma', level: 85, color: '#F24E1E' },
      { name: 'Docker', level: 80, color: '#2496ED' },
    ],
  },
];

export default function TechStack() {
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
            Tech <span className="neon-text">Stack</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and technologies I use to build production-grade applications.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * catIndex + 0.05 * techIndex + 0.3,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-neon-cyan font-bold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.1 * catIndex + 0.05 * techIndex + 0.5,
                        }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            Certifications (82+)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Kotlin',
              'Android',
              'Firebase',
              'Python',
              'JavaScript',
              'React',
              'Flutter',
              'Machine Learning',
              'Cyber Security',
              'DevOps',
              'Blockchain',
              'AWS',
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * index + 0.9 }}
                className="glass-card rounded-lg p-4 text-center glass-card-hover"
              >
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-medium">{cert}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
