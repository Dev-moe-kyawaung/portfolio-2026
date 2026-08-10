'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, Code } from 'lucide-react';
import Image from 'next/image';

const publications = [
  {
    type: 'article',
    title: 'Jetpack Compose Best Practices for Production Apps',
    platform: 'Dev.to',
    date: '2026-07-15',
    url: 'https://dev.to/moekyawaung/jetpack-compose-best-practices',
    excerpt: 'Essential patterns and practices for building production-grade Compose apps with millions of users.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
    reads: '2.5K',
  },
  {
    type: 'article',
    title: 'Clean Architecture in Android: A Practical Guide',
    platform: 'Medium',
    date: '2026-06-28',
    url: 'https://medium.com/@moekyawaung/clean-architecture-android',
    excerpt: 'Step-by-step implementation of Clean Architecture with real examples from telecom and fintech apps.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
    reads: '3.8K',
  },
  {
    type: 'tutorial',
    title: 'Building Offline-First Apps with Firebase',
    platform: 'Personal Blog',
    date: '2026-05-22',
    url: 'https://moekyawaung.github.io/blog/firebase-offline',
    excerpt: 'Complete guide to implementing offline-first architecture with Firestore and Room database.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
    reads: '1.9K',
  },
  {
    type: 'tutorial',
    title: 'Kotlin Coroutines: Advanced Patterns',
    platform: 'Dev.to',
    date: '2026-04-10',
    url: 'https://dev.to/moekyawaung/kotlin-coroutines-advanced',
    excerpt: 'Deep dive into advanced coroutine patterns for handling complex async operations in Android.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png',
    reads: '4.2K',
  },
  {
    type: 'paper',
    title: 'AI/ML Integration in Mobile Applications',
    platform: 'Research Paper',
    date: '2026-03-15',
    url: 'https://github.com/moekyawaung-tech/ai-ml-research',
    excerpt: 'Research on integrating Claude API and TFLite for intelligent mobile experiences.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png',
    reads: '1.2K',
  },
  {
    type: 'tutorial',
    title: 'Android Security: Protecting User Data',
    platform: 'Personal Blog',
    date: '2026-02-05',
    url: 'https://moekyawaung.github.io/blog/android-security',
    excerpt: 'Essential security practices for Android apps including encryption and secure storage.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png',
    reads: '2.1K',
  },
];

export default function Publications() {
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
            Publications <span className="neon-text">& Writing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical articles, tutorials, and research papers on Android development, architecture, and emerging tech.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="glass-card rounded-xl p-6 text-center">
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">50+</div>
            <div className="text-gray-400">Articles</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <FileText className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">100+</div>
            <div className="text-gray-400">Tutorials</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Code className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">15K+</div>
            <div className="text-gray-400">Total Reads</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <ExternalLink className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">5</div>
            <div className="text-gray-400">Platforms</div>
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group flex gap-6 p-6"
            >
              <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded">
                    {pub.type}
                  </span>
                  <span className="text-xs text-gray-400">{pub.platform}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {pub.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {pub.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{new Date(pub.date).toLocaleDateString()}</span>
                  <div className="flex items-center gap-4">
                    <span>📖 {pub.reads}</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Writing Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            Writing Platforms
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Dev.to', url: 'https://dev.to/moekyawaung' },
              { name: 'Medium', url: 'https://medium.com/@moekyawaung' },
              { name: 'GitHub', url: 'https://github.com/Dev-moe-kyawaung' },
              { name: 'Tumblr', url: 'https://tumblr.com/moekyawaung' },
              { name: 'Personal Blog', url: 'https://moekyawaung.github.io' },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg p-6 text-center glass-card-hover"
              >
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-neon-cyan" />
                <div className="font-medium">{platform.name}</div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
