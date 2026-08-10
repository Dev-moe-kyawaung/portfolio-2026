'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import Image from 'next/image';

const awards = [
  {
    icon: Trophy,
    title: 'Google Developers Launchpad',
    organization: 'Google',
    year: '2024',
    description: 'Recognized for excellence in Android development and contribution to the developer community.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png',
  },
  {
    icon: Medal,
    title: 'Programming Hub Excellence Award',
    organization: 'Programming Hub',
    year: '2024',
    description: 'Top 1% learner with 82+ certifications across programming, web, mobile, AI/ML, and security.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
  },
  {
    icon: Star,
    title: 'GitHub Developer Program Member',
    organization: 'GitHub',
    year: '2023',
    description: 'Recognized for open-source contributions and community building with 40+ repositories.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png',
  },
  {
    icon: Award,
    title: 'Firebase Associate Developer',
    organization: 'Google',
    year: '2023',
    description: 'Certified expertise in Firebase integration, real-time databases, and cloud functions.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
  },
  {
    icon: Trophy,
    title: 'Kotlin Certified Developer',
    organization: 'JetBrains',
    year: '2022',
    description: 'Advanced proficiency in Kotlin, coroutines, and modern Android development practices.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
  },
  {
    icon: Medal,
    title: 'Cybersecurity Specialist',
    organization: 'Programming Hub',
    year: '2024',
    description: 'Expertise in ethical hacking, network security, and application security best practices.',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png',
  },
];

export default function Awards() {
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
            Awards <span className="neon-text">& Recognition</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for technical excellence, community contributions, and continuous learning.
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
            <Trophy className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">15+</div>
            <div className="text-gray-400">Awards</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Medal className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">82+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Star className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">40+</div>
            <div className="text-gray-400">Repositories</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Award className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <award.icon className="w-8 h-8 text-neon-cyan" />
                  <span className="text-2xl font-bold text-neon-cyan">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{award.organization}</p>
                <p className="text-gray-300 text-sm">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 mb-6">
            View all certifications and achievements
          </p>
          <a
            href="https://gravatar.com/moekyawaung2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all inline-block"
          >
            View Full Profile on Gravatar →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
