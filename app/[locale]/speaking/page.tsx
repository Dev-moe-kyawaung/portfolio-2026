'use client';

import { motion } from 'framer-motion';
import { Mic, Calendar, MapPin, Users, Video } from 'lucide-react';
import Image from 'next/image';

const talks = [
  {
    title: 'Building Scalable Android Apps',
    event: 'Android Dev Summit 2026',
    date: '2026-06-15',
    location: 'Bangkok, Thailand',
    attendees: '500+',
    video: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4',
    slides: 'https://github.com/moekyawaung-tech/talks/scalable-apps',
    description: 'Deep dive into Clean Architecture, MVVM patterns, and performance optimization for apps serving millions.',
  },
  {
    title: 'Jetpack Compose in Production',
    event: 'KotlinConf 2026',
    date: '2026-05-20',
    location: 'Amsterdam, Netherlands',
    attendees: '300+',
    video: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052711/Javier_Black-Dark-Ring.mp4',
    slides: 'https://github.com/moekyawaung-tech/talks/compose-production',
    description: 'Real-world lessons from migrating 50+ screens to Jetpack Compose in production apps.',
  },
  {
    title: 'AI/ML Integration in Mobile',
    event: 'TechTalk Myanmar',
    date: '2026-04-10',
    location: 'Yangon, Myanmar',
    attendees: '200+',
    video: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052704/Javier_Pardina_10_ay7iai.mp4',
    slides: 'https://github.com/moekyawaung-tech/talks/ai-ml-mobile',
    description: 'Practical guide to integrating Claude API and TFLite for intelligent mobile experiences.',
  },
  {
    title: 'Firebase Best Practices',
    event: 'Google Developer Days',
    date: '2026-03-05',
    location: 'Singapore',
    attendees: '400+',
    video: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052708/AUDI_-_Javier_Pardina_1_gavyon.mp4',
    slides: 'https://github.com/moekyawaung-tech/talks/firebase-best-practices',
    description: 'Advanced Firebase integration patterns for offline-first, real-time applications.',
  },
  {
    title: 'Kotlin Coroutines Mastery',
    event: 'DroidCon 2026',
    date: '2026-02-18',
    location: 'Berlin, Germany',
    attendees: '350+',
    video: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052732/Javier_Pardina_2_l1mtud.mp4',
    slides: 'https://github.com/moekyawaung-tech/talks/coroutines-mastery',
    description: 'Advanced coroutine patterns, Flow operators, and structured concurrency best practices.',
  },
  {
    title: 'From Myanmar to Global',
    event: 'Tech Diversity Summit',
    date: '2026-01-22',
    location: 'London, UK',
    attendees: '600+',
    video: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031657/COACH_-_Javier_Pardina_gdjsjg.mp4',
    slides: 'https://github.com/moekyawaung-tech/talks/myanmar-to-global',
    description: 'Career journey, challenges, and lessons learned building world-class apps from Myanmar.',
  },
];

export default function Speaking() {
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
            Speaking <span className="neon-text">& Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conference talks, workshops, and meetups on Android development, architecture, and emerging tech.
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
            <Mic className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">20+</div>
            <div className="text-gray-400">Talks</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Users className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">10K+</div>
            <div className="text-gray-400">Attendees</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">15+</div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">5+</div>
            <div className="text-gray-400">Years Speaking</div>
          </div>
        </motion.div>

        {/* Talks Grid */}
        <div className="space-y-8">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Mic className="w-8 h-8 text-neon-cyan" />
                    <span className="text-2xl font-bold">{talk.event}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 neon-text">{talk.title}</h2>
                  <p className="text-gray-300 mb-6">{talk.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(talk.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {talk.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users size={16} />
                      {talk.attendees}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={talk.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all flex items-center gap-2"
                    >
                      <Video size={20} />
                      Watch Video
                    </a>
                    <a
                      href={talk.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 glass-card border border-neon-cyan text-neon-cyan font-bold rounded-lg glass-card-hover hover:bg-neon-cyan hover:text-black transition-all"
                    >
                      View Slides
                    </a>
                  </div>
                </div>

                <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                  <video
                    src={talk.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 glass-card rounded-xl p-8 text-center"
        >
          <Mic className="w-16 h-16 mx-auto mb-6 text-neon-cyan" />
          <h2 className="text-3xl font-bold mb-4 neon-text">
            Book Me for Your Event
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Available for conferences, workshops, meetups, and corporate training on Android development, architecture patterns, and emerging technologies.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
