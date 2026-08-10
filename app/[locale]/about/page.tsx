'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code, Smartphone, Award, BookOpen } from 'lucide-react';

const stats = [
  { icon: Smartphone, value: '10+', label: 'Years Experience' },
  { icon: Code, value: '50+', label: 'Apps Built' },
  { icon: Award, value: '15+', label: 'Awards' },
  { icon: BookOpen, value: '100+', label: 'Articles' },
];

const journey = [
  {
    year: '2016',
    title: 'Started Android Development',
    description: 'Built first Android app - a simple calculator with Material Design',
  },
  {
    year: '2018',
    title: 'Senior Developer Role',
    description: 'Led team of 5 developers building telecom client app with 2.5M+ users',
  },
  {
    year: '2020',
    title: 'Kotlin Multiplatform',
    description: 'Pioneered KMM adoption in production, reducing code duplication by 40%',
  },
  {
    year: '2022',
    title: 'Jetpack Compose Expert',
    description: 'Migrated 50+ screens from XML to Compose, improving performance by 30%',
  },
  {
    year: '2024',
    title: 'System Architecture',
    description: 'Designed scalable architecture patterns used across 10+ products',
  },
  {
    year: '2026',
    title: 'Full-Stack Expansion',
    description: 'Extended expertise to Next.js, React, and modern web technologies',
  },
];

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text">About</span> Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about crafting premium mobile experiences and pushing the
            boundaries of what's possible with modern Android development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass-card rounded-xl p-6 text-center glass-card-hover"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
              <div className="text-4xl font-bold text-neon-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">My Story</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a Senior Android Developer based in London with over 10 years
              of experience building production-ready mobile applications. My
              journey started with a simple curiosity about how apps work, and
              has evolved into a deep passion for creating seamless user
              experiences.
            </p>
            <p>
              Throughout my career, I've had the privilege of working on apps
              that serve millions of users daily - from telecom client
              applications to fintech P2P payment systems. I specialize in
              Kotlin, Jetpack Compose, and modern architecture patterns like
              MVVM and Clean Architecture.
            </p>
            <p>
              Beyond Android, I'm also a full-stack developer with expertise in
              Next.js, React, and TypeScript. I believe in continuous learning
              and regularly contribute to open-source projects, write technical
              articles, and speak at conferences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new UI/UX trends,
              experimenting with 3D graphics using Three.js, or mentoring
              aspiring developers in the community.
            </p>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            My Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neon-cyan opacity-30" />

            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative mb-8 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`glass-card rounded-xl p-6 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold text-xl mr-4">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full border-4 border-background" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center neon-text">
            What I Value
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">
                Clean Code
              </h3>
              <p className="text-gray-300">
                Writing maintainable, testable, and scalable code that stands
                the test of time.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">
                User Experience
              </h3>
              <p className="text-gray-300">
                Crafting intuitive interfaces that delight users and solve real
                problems.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">
                Continuous Learning
              </h3>
              <p className="text-gray-300">
                Staying ahead of the curve with the latest technologies and best
                practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
