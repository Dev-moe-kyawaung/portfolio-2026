'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    id: '1720080366600',
    name: 'Kotlin Certification',
    category: 'Programming Languages',
    date: 'Jul 4, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1720080366600',
  },
  {
    id: '1739836534125',
    name: 'React Native Certificate',
    category: 'Mobile & App Dev',
    date: 'Feb 18, 2025',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1739836534125',
  },
  {
    id: '1739833265595',
    name: 'Kotlin for Android',
    category: 'Mobile & App Dev',
    date: 'Feb 18, 2025',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1739833265595',
  },
  {
    id: '1719549107753',
    name: 'HTML Advanced Certificate',
    category: 'Web Development',
    date: 'Jun 28, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1719549107753',
  },
  {
    id: '1739872219283',
    name: 'AWS Cloud Computing',
    category: 'Cloud & DevOps',
    date: 'Feb 18, 2025',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1739872219283',
  },
  {
    id: '1736964408824',
    name: 'DevOps Certification',
    category: 'Security & DevOps',
    date: 'Jan 15, 2025',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1736964408824',
  },
  {
    id: '1739856891521',
    name: 'Google Display Ads',
    category: 'Marketing & Business',
    date: 'Feb 18, 2025',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1739856891521',
  },
  {
    id: '1719549107753',
    name: 'Machine Learning',
    category: 'AI & Data Science',
    date: 'Jun 28, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1719549107753',
  },
  {
    id: '1719549107754',
    name: 'Cyber Security',
    category: 'Security & DevOps',
    date: 'Jun 28, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1719549107754',
  },
  {
    id: '1719549107755',
    name: 'Python Advanced',
    category: 'Programming Languages',
    date: 'Jun 28, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1719549107755',
  },
  {
    id: '1719549107756',
    name: 'Blockchain',
    category: 'Blockchain',
    date: 'Jun 28, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1719549107756',
  },
  {
    id: '1719549107757',
    name: 'Software Engineering',
    category: 'Software Engineering',
    date: 'Jun 28, 2024',
    issuer: 'Programming Hub',
    verified: 'https://www.programminghub.io/certificate?id=1719549107757',
  },
];

const categories = [
  'All',
  'Programming Languages',
  'Web Development',
  'Mobile & App Dev',
  'AI & Data Science',
  'Security & DevOps',
  'Blockchain',
  'Cloud & DevOps',
  'Marketing & Business',
  'Software Engineering',
];

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCerts = certifications.filter((cert) => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || cert.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
            Certifications <span className="neon-text">& Credentials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            82+ certifications across programming, web development, mobile, AI/ML, security, and more.
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
            <Award className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">82+</div>
            <div className="text-gray-400">Total Certifications</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-4 text-neon-cyan text-3xl">
              🏆
            </div>
            <div className="text-4xl font-bold text-neon-cyan mb-2">9</div>
            <div className="text-gray-400">Categories</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-4 text-neon-cyan text-3xl">
              📅
            </div>
            <div className="text-4xl font-bold text-neon-cyan mb-2">3+</div>
            <div className="text-gray-400">Years Learning</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-4 text-neon-cyan text-3xl">
              ✓
            </div>
            <div className="text-4xl font-bold text-neon-cyan mb-2">100%</div>
            <div className="text-gray-400">Verified</div>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan text-gray-300"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-neon-cyan text-black'
                    : 'glass-card text-gray-300 hover:text-white glass-card-hover'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="glass-card rounded-xl p-6 glass-card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-neon-cyan" />
                <a
                  href={cert.verified}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:underline text-sm flex items-center gap-1"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <div className="text-sm text-gray-400 mb-4">{cert.category}</div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{cert.date}</span>
                <span>{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://gravatar.com/moekyawaung2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all inline-block"
          >
            View All 82+ Certificates on Gravatar →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
