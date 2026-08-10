'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'jetpack-compose-best-practices',
    title: 'Jetpack Compose: 10 Best Practices for Production Apps',
    excerpt: 'Learn the essential patterns and practices I use when building production-grade Compose apps with millions of users.',
    date: '2026-07-15',
    readTime: '12 min',
    category: 'Android',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
    featured: true,
  },
  {
    slug: 'clean-architecture-android',
    title: 'Clean Architecture in Android: A Practical Guide',
    excerpt: 'Step-by-step implementation of Clean Architecture with real examples from telecom and fintech apps.',
    date: '2026-06-28',
    readTime: '15 min',
    category: 'Architecture',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
    featured: true,
  },
  {
    slug: 'kotlin-coroutines-advanced',
    title: 'Advanced Kotlin Coroutines: Flow, Channels, and Beyond',
    excerpt: 'Deep dive into advanced coroutine patterns for handling complex async operations in Android.',
    date: '2026-06-10',
    readTime: '18 min',
    category: 'Kotlin',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png',
    featured: false,
  },
  {
    slug: 'firebase-offline-sync',
    title: 'Building Offline-First Apps with Firebase',
    excerpt: 'Complete guide to implementing offline-first architecture with Firestore and Room database.',
    date: '2026-05-22',
    readTime: '14 min',
    category: 'Backend',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
    featured: false,
  },
  {
    slug: 'android-security-best-practices',
    title: 'Android Security: Protecting User Data',
    excerpt: 'Essential security practices for Android apps including encryption, secure storage, and network security.',
    date: '2026-05-05',
    readTime: '16 min',
    category: 'Security',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png',
    featured: false,
  },
  {
    slug: 'ai-ml-android-claude',
    title: 'Integrating Claude API in Android Apps',
    excerpt: 'How to integrate AI/ML features using Claude API for intelligent mobile experiences.',
    date: '2026-04-18',
    readTime: '13 min',
    category: 'AI/ML',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png',
    featured: false,
  },
];

export default function Blog() {
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
            Blog & <span className="neon-text">Writing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge, lessons learned, and deep dives into Android development, architecture, and emerging tech.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter((post) => post.featured).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-neon-cyan font-medium">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter((post) => !post.featured).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 glass-card rounded-xl p-8 text-center"
        >
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-neon-cyan" />
          <h2 className="text-3xl font-bold mb-4 neon-text">Subscribe</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles. No spam, just quality content about Android development, architecture, and emerging tech.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan text-gray-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
