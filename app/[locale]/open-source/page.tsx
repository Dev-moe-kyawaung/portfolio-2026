'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Code } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    name: 'Video Player',
    description: 'Modern video player with advanced controls and subtitle support',
    url: 'https://github.com/moekyawaung-tech/video-player',
    stars: 5,
    forks: 1,
    language: 'JavaScript',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png',
  },
  {
    name: 'Social Dashboard',
    description: 'Real-time social media analytics and management dashboard',
    url: 'https://github.com/moekyawaung-tech/social-dashboard',
    stars: 4,
    forks: 1,
    language: 'JavaScript',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
  },
  {
    name: 'Game Collection',
    description: 'Retro game collection with multiple classic games',
    url: 'https://github.com/moekyawaung-tech/game-collection',
    stars: 8,
    forks: 2,
    language: 'JavaScript',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png',
  },
  {
    name: 'PWA App',
    description: 'Progressive Web App with offline support and push notifications',
    url: 'https://github.com/moekyawaung-tech/pwa-app',
    stars: 6,
    forks: 1,
    language: 'TypeScript',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png',
  },
  {
    name: 'Job Portal App',
    description: 'Full-stack job portal with real-time applications tracking',
    url: 'https://github.com/moekyawaung-tech/Job-Portal-App',
    stars: 12,
    forks: 3,
    language: 'JavaScript',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
  },
  {
    name: 'POS Full Version',
    description: 'Enterprise POS system with inventory and sales analytics',
    url: 'https://github.com/moekyawaung-tech/POS-Full-Version',
    stars: 15,
    forks: 4,
    language: 'JavaScript',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
  },
];

export default function OpenSource() {
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
            Open <span className="neon-text">Source</span> Contributions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building in public. Sharing knowledge. Growing the community.
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
            <Github className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">40+</div>
            <div className="text-gray-400">Repositories</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Star className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">100+</div>
            <div className="text-gray-400">Total Stars</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <GitFork className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">20+</div>
            <div className="text-gray-400">Forks</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">82+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={16} />
                      {project.forks}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded">
                    {project.language}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            GitHub Profiles
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Dev-moe-kyawaung',
              'moekyawaung-tech',
              'Moekyawaung-cyber',
              'moekyawaung',
              'moekyawaung-dev',
              'moekyawaung-web',
              'Moekyawaung2026',
              'moekyawaung-hack',
            ].map((username, index) => (
              <a
                key={username}
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg p-4 text-center glass-card-hover"
              >
                <Github className="w-8 h-8 mx-auto mb-2 text-neon-cyan" />
                <div className="text-sm font-medium">{username}</div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
