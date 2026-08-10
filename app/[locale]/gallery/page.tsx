'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import Image from 'next/image';

const gallery = [
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png',
    alt: 'Profile Photo',
    category: 'Portrait',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png',
    alt: 'Workspace Setup',
    category: 'Workspace',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp',
    alt: 'Conference Speaking',
    category: 'Event',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg',
    alt: 'Team Photo',
    category: 'Event',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp',
    alt: 'Coding Session',
    category: 'Workspace',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp',
    alt: 'Project Demo',
    category: 'Project',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png',
    alt: 'Tech Stack',
    category: 'Project',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
    alt: 'App Interface',
    category: 'Project',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png',
    alt: 'Development Process',
    category: 'Workspace',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
    alt: 'Architecture Diagram',
    category: 'Project',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
    alt: 'Code Review',
    category: 'Workspace',
  },
  {
    src: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png',
    alt: 'Game Collection',
    category: 'Project',
  },
];

const categories = ['All', 'Portrait', 'Workspace', 'Event', 'Project'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

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
            Photography <span className="neon-text">& Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Behind the scenes, workspace setups, events, and project showcases.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
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

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              onClick={() => setSelectedImage(image.src)}
              className="glass-card rounded-xl overflow-hidden glass-card-hover cursor-pointer group relative"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-10 h-10 text-neon-cyan" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{image.alt}</h3>
                  <span className="text-xs text-gray-400">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Full size"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
