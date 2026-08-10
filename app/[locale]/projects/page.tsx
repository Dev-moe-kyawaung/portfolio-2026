'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Github, Smartphone, Wallet, Shield, Video } from 'lucide-react';
import Link from 'next/link';

const projectCategories = ['All', 'Android', 'Web', 'Open Source', 'Full Stack'];

const projects = [
  {
    id: 1,
    title: 'Telecom Client App',
    description:
      'Enterprise-grade telecom client application serving 2.5M+ users with eSIM management, call routing, and real-time billing.',
    category: 'Android',
    icon: Smartphone,
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Ktor'],
    metrics: {
      users: '2.5M+',
      rating: '4.8/5',
      performance: '99.8% crash-free',
    },
    github: 'https://github.com/yourusername/telecom-app',
    live: 'https://play.google.com/store/apps/details?id=com.example.telecom',
    featured: true,
  },
  {
    id: 2,
    title: 'P2P Payment System',
    description:
      'Secure peer-to-peer payment platform with real-time transactions, biometric authentication, and multi-currency support.',
    category: 'Android',
    icon: Wallet,
    tech: ['Kotlin', 'Clean Architecture', 'Stripe API', 'Biometric Auth'],
    metrics: {
      transactions: '100K+/day',
      security: 'PCI-DSS Compliant',
      uptime: '99.99%',
    },
    github: 'https://github.com/yourusername/p2p-payment',
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Privacy Shield',
    description:
      'Android system-level privacy protection app with app permission management, tracker blocking, and data encryption.',
    category: 'Android',
    icon: Shield,
    tech: ['Kotlin', 'Android System APIs', 'Encryption', 'Room DB'],
    metrics: {
      downloads: '500K+',
      rating: '4.7/5',
      privacy: '100% open-source',
    },
    github: 'https://github.com/yourusername/privacy-shield',
    live: 'https://play.google.com/store/apps/details?id=com.example.privacy',
    featured: true,
  },
  {
    id: 4,
    title: 'Video Streaming App',
    description:
      'TikTok-style short video platform with ML-powered recommendations, AR filters, and real-time analytics.',
    category: 'Android',
    icon: Video,
    tech: ['Kotlin', 'ML Kit', 'ARCore', 'ExoPlayer'],
    metrics: {
      videos: '10M+ daily',
      engagement: '45 min/session',
      retention: '60% D7',
    },
    github: 'https://github.com/yourusername/video-app',
    live: null,
    featured: true,
  },
  {
    id: 5,
    title: 'Portfolio 2026',
    description:
      'Premium developer portfolio with 3D interactions, glassmorphism UI, multilingual support, and cinematic animations.',
    category: 'Web',
    icon: ExternalLink,
    tech: ['Next.js 15', 'React 19', 'Three.js', 'Framer Motion'],
    metrics: {
      performance: '100/100 Lighthouse',
      seo: 'A+ Rating',
      accessibility: 'WCAG 2.2 AA',
    },
    github: 'https://github.com/yourusername/portfolio-2026',
    live: 'https://yourportfolio.com',
    featured: true,
  },
  {
    id: 6,
    title: 'E-commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    category: 'Full Stack',
    icon: ExternalLink,
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma'],
    metrics: {
      products: '10K+',
      orders: '1K+/day',
      revenue: '$50K+/month',
    },
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://example-shop.com',
    featured: false,
  },
  {
    id: 7,
    title: 'Kotlin Coroutines Library',
    description:
      'Open-source library extending Kotlin Coroutines with advanced operators and utilities for async programming.',
    category: 'Open Source',
    icon: Github,
    tech: ['Kotlin', 'Coroutines', 'Flow', 'Publishing'],
    metrics: {
      stars: '2.5K+',
      forks: '400+',
      downloads: '50K+/month',
    },
    github: 'https://github.com/yourusername/coroutines-ext',
    live: 'https://mvnrepository.com/artifact/com.example/coroutines-ext',
    featured: false,
  },
  {
    id: 8,
    title: 'Compose UI Components',
    description:
      'Reusable Jetpack Compose component library with 50+ customizable UI elements following Material Design 3.',
    category: 'Open Source',
    icon: Smartphone,
    tech: ['Jetpack Compose', 'Kotlin', 'Material 3', 'Publishing'],
    metrics: {
      stars: '1.8K+',
      components: '50+',
      adoption: '500+ apps',
    },
    github: 'https://github.com/yourusername/compose-ui',
    live: 'https://yourusername.github.io/compose-ui',
    featured: false,
  },
];

export default function Projects() {
  const t = useTranslations('Projects');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            Featured <span className="neon-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated selection of production-ready applications built with
            modern technologies and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-neon-cyan text-black'
                  : 'glass-card text-gray-300 hover:text-white glass-card-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover"
            >
              {/* Project Icon */}
              <div className="h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                <project.icon className="w-20 h-20 text-neon-cyan" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-bold px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-glass-light text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-neon-cyan font-bold text-sm">
                        {value}
                      </div>
                      <div className="text-gray-500 text-xs capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-neon-cyan text-sm transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-neon-cyan text-sm transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/case-studies"
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all inline-block"
          >
            View Case Studies →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
