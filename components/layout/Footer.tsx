'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card border-t border-glass-border mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold neon-text mb-4">Portfolio 2026</h3>
            <p className="text-gray-400 text-sm">
              Senior Android Developer crafting premium mobile experiences with
              Kotlin, Jetpack Compose, and modern architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-neon-cyan text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-neon-cyan text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="text-gray-400 hover:text-neon-cyan text-sm">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-card-hover text-gray-400 hover:text-neon-cyan"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-glass-border mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Portfolio. Built with Next.js 15, React 19, and Three.js.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
