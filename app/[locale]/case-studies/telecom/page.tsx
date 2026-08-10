'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Smartphone, Users, Zap, Shield, TrendingUp, Code } from 'lucide-react';
import Image from 'next/image';

const metrics = [
  { icon: Users, value: '2.5M+', label: 'Active Users' },
  { icon: Zap, value: '40%', label: 'Faster Startup' },
  { icon: Shield, value: '99.8%', label: 'Crash-Free' },
  { icon: TrendingUp, value: '60%', label: 'Reduced Release Time' },
];

const features = [
  'eSIM Management',
  'Real-time Call Routing',
  'Dynamic Billing System',
  'Offline-First Architecture',
  'Firebase Integration',
  'CI/CD Pipeline',
];

export default function TelecomCaseStudy() {
  const t = useTranslations('CaseStudies');

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Smartphone className="w-12 h-12 text-neon-cyan" />
            <h1 className="text-5xl md:text-6xl font-bold">
              Telecom Client App
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Enterprise-grade telecom application serving 2.5M+ users with eSIM management, real-time call routing, and dynamic billing.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden glass-card">
            <Image
              src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png"
              alt="Telecom App Screenshot"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
              className="glass-card rounded-xl p-6 text-center glass-card-hover"
            >
              <metric.icon className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
              <div className="text-4xl font-bold text-neon-cyan mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">The Challenge</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The client needed a modern, scalable telecom application that could handle 2.5M+ concurrent users while maintaining 99.8% crash-free sessions. The legacy system was struggling with performance issues, slow release cycles, and poor offline support.
            </p>
            <p>
              My role was to lead the complete architectural redesign, migrate from XML to Jetpack Compose, implement offline-first architecture with Room database, and establish a robust CI/CD pipeline using GitHub Actions.
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 neon-text">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.8 }}
                className="glass-card rounded-xl p-6 glass-card-hover"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-neon-cyan" />
                  <span className="font-bold">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="glass-card rounded-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">System Architecture</h2>
          <div className="space-y-4 text-gray-300">
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`┌─────────────────────────────────────┐
│     Presentation Layer (UI)         │
│  • Jetpack Compose Screens          │
│  • ViewModel (StateFlow)            │
│  • Navigation Component             │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       Domain Layer (Business)       │
│  • Use Cases / Interactors          │
│  • Repository Interfaces            │
│  • Domain Models                    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        Data Layer (Repository)      │
│  • Repository Implementations       │
│  • Local Data Source (Room)         │
│  • Remote Data Source (Retrofit)    │
│  • Firebase Integration             │
└─────────────────────────────────────┘`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 neon-text">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Kotlin',
              'Jetpack Compose',
              'MVVM',
              'Clean Architecture',
              'Coroutines & Flow',
              'Room Database',
              'Retrofit',
              'Firebase',
              'Hilt',
              'GitHub Actions',
              'Fastlane',
              'Crashlytics',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="glass-card rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Results & Impact</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan">✓</span>
              <span>40% faster app startup time through optimized initialization and lazy loading</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan">✓</span>
              <span>60% reduction in release time with automated CI/CD pipeline</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan">✓</span>
              <span>99.8% crash-free sessions maintained over 18 months</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan">✓</span>
              <span>Successfully scaled to 2.5M+ active users across Southeast Asia</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
