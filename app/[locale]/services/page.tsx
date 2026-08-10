'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Settings, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description: 'End-to-end Android app development using Kotlin, Jetpack Compose, and modern architecture.',
    features: [
      'Native Android Apps',
      'Jetpack Compose UI',
      'MVVM/MVI Architecture',
      'Firebase Integration',
      'Play Store Deployment',
    ],
    price: 'From $5,000',
  },
  {
    icon: Settings,
    title: 'Architecture Consulting',
    description: 'System design, architecture review, and technical leadership for Android projects.',
    features: [
      'Clean Architecture',
      'Code Review',
      'Performance Optimization',
      'Migration Strategy',
      'Best Practices',
    ],
    price: '$150/hour',
  },
  {
    icon: Code,
    title: 'Legacy Code Migration',
    description: 'Modernize legacy Android apps with Kotlin, Compose, and modern patterns.',
    features: [
      'XML to Compose',
      'Java to Kotlin',
      'Architecture Refactoring',
      'Dependency Updates',
      'Testing Implementation',
    ],
    price: 'From $3,000',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Improve app performance, reduce crashes, and enhance user experience.',
    features: [
      'Performance Profiling',
      'Memory Optimization',
      'Startup Time Reduction',
      'Crash Analysis',
      'Battery Optimization',
    ],
    price: 'From $2,000',
  },
  {
    icon: Shield,
    title: 'Security Audit',
    description: 'Comprehensive security review and implementation of best practices.',
    features: [
      'Security Assessment',
      'Data Encryption',
      'Secure Storage',
      'Network Security',
      'Compliance Review',
    ],
    price: 'From $2,500',
  },
  {
    icon: Users,
    title: 'Team Mentoring',
    description: 'Train and mentor your development team on modern Android practices.',
    features: [
      'Workshops & Training',
      'Code Review Sessions',
      'Best Practices',
      'Architecture Patterns',
      'Career Guidance',
    ],
    price: '$100/hour',
  },
];

export default function Services() {
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
            Services <span className="neon-text">& Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Senior-level Android development, architecture consulting, and technical leadership for your next project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl p-6 glass-card-hover"
            >
              <service.icon className="w-12 h-12 text-neon-cyan mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <span className="text-neon-cyan">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-xl font-bold text-neon-cyan mb-6">
                {service.price}
              </div>
              
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-neon-cyan text-black font-bold rounded-lg text-center glass-card-hover hover:bg-neon-purple hover:text-white transition-all"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            How I Work
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold text-2xl mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-300">
                Understand your requirements, goals, and constraints through detailed discussion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold text-2xl mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-gray-300">
                Create detailed technical specification, timeline, and milestone breakdown.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold text-2xl mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-300">
                Build with clean code, regular updates, and transparent communication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold text-2xl mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-300">
                Deploy to production with documentation, testing, and post-launch support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and explore how I can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all"
          >
            Schedule a Call
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
