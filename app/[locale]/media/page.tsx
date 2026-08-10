'use client';

import { motion } from 'framer-motion';
import { Youtube, Mic, Video, Play } from 'lucide-react';
import Image from 'next/image';

const media = [
  {
    type: 'video',
    title: 'Android Development Best Practices',
    platform: 'YouTube',
    date: '2026-06-15',
    url: 'https://youtube.com/watch?v=example1',
    thumbnail: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4',
    duration: '15:32',
    views: '12K',
  },
  {
    type: 'podcast',
    title: 'Building Scalable Android Apps',
    platform: 'Podcast',
    date: '2026-05-20',
    url: 'https://youtube.com/watch?v=example2',
    thumbnail: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052711/Javier_Black-Dark-Ring.mp4',
    duration: '45:00',
    views: '8.5K',
  },
  {
    type: 'video',
    title: 'Jetpack Compose Tutorial',
    platform: 'YouTube',
    date: '2026-04-10',
    url: 'https://youtube.com/watch?v=example3',
    thumbnail: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052704/Javier_Pardina_10_ay7iai.mp4',
    duration: '22:15',
    views: '15K',
  },
  {
    type: 'interview',
    title: 'Career Journey: Myanmar to Global',
    platform: 'Interview',
    date: '2026-03-05',
    url: 'https://youtube.com/watch?v=example4',
    thumbnail: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052708/AUDI_-_Javier_Pardina_1_gavyon.mp4',
    duration: '30:00',
    views: '6.2K',
  },
  {
    type: 'video',
    title: 'Kotlin Coroutines Deep Dive',
    platform: 'YouTube',
    date: '2026-02-18',
    url: 'https://youtube.com/watch?v=example5',
    thumbnail: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052732/Javier_Pardina_2_l1mtud.mp4',
    duration: '18:45',
    views: '10K',
  },
  {
    type: 'podcast',
    title: 'AI/ML in Mobile Development',
    platform: 'Podcast',
    date: '2026-01-22',
    url: 'https://youtube.com/watch?v=example6',
    thumbnail: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031657/COACH_-_Javier_Pardina_gdjsjg.mp4',
    duration: '52:30',
    views: '7.8K',
  },
];

export default function Media() {
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
            Media <span className="neon-text">& Appearances</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Podcast interviews, YouTube tutorials, conference talks, and technical presentations.
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
            <Youtube className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">50+</div>
            <div className="text-gray-400">Videos</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Mic className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">10+</div>
            <div className="text-gray-400">Podcasts</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Video className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">100K+</div>
            <div className="text-gray-400">Total Views</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <Play className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <div className="text-4xl font-bold text-neon-cyan mb-2">5+</div>
            <div className="text-gray-400">Years Creating</div>
          </div>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group"
            >
              <div className="relative aspect-video">
                <video
                  src={item.thumbnail}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-neon-cyan" />
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
                  {item.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-400">{item.platform}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <span>👁 {item.views}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">
            Subscribe to My Channel
          </h2>
          <p className="text-gray-300 mb-8">
            Weekly tutorials on Android development, architecture patterns, and emerging tech.
          </p>
          <a
            href="https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg glass-card-hover hover:bg-red-700 transition-all inline-block flex items-center gap-2"
          >
            <Youtube size={24} />
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </div>
  );
}
