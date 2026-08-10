'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'moekyawaung@asia.com',
    href: 'mailto:moekyawaung@asia.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+95 9 889 000 889',
    href: 'tel:+959889000889',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Dev-moe-kyawaung' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's build something amazing together. Open to opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 neon-text">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <info.icon className="w-6 h-6 text-neon-cyan mt-1" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-neon-cyan transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-glass-border">
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <div className="flex gap-4">
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
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 neon-text">Availability</h2>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-300">Open to Work</span>
              </div>
              <p className="text-gray-400 mt-2">
                Available for senior Android developer roles, contract work, and consulting.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 neon-text">Send Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan text-gray-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan text-gray-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan text-gray-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg glass-card-hover hover:bg-neon-purple hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
