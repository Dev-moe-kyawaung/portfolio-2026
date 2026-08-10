'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroScene from '@/components/3d/HeroScene';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Dev-moe-kyawaung', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG', label: 'YouTube' },
  { icon: Twitter, href: 'https://bsky.app/profile/moekyawaung96.bsky.social', label: 'Bluesky' },
  { icon: Mail, href: 'mailto:moekyawaung@asia.com', label: 'Email' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-neon-cyan shadow-lg shadow-neon-cyan/50">
            <Image
              src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp"
              alt="Moe Kyaw Aung"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-neon-purple rounded-full flex items-center justify-center text-xs font-bold">
            🇲🇲
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="block">မိုးကျော်အောင် ·</span>
            <span className="block neon-text">Moe Kyaw Aung</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-neon-cyan mb-4"
          >
            Senior Android Developer | Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-gray-300 mb-6"
          >
            🇲🇲 Tachileik, Myanmar ↔ 🇹🇭 Bangkok, Thailand
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            <p>
              10+ years crafting scalable, production-grade Android applications with Clean Architecture, Firebase, and modern DevOps practices.
            </p>
            <p className="mt-2">
              Kotlin · Jetpack Compose · MVVM · Clean Arch · AI/ML · Cybersecurity
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 glass-card border border-neon-cyan text-neon-cyan font-bold rounded-lg glass-card-hover hover:bg-neon-cyan hover:text-black transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex space-x-6 mt-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card-hover text-gray-400 hover:text-neon-cyan transition-all"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="animate-bounce text-neon-cyan" size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
}
