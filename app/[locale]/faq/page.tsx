'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is your primary tech stack?',
    answer:
      'I specialize in Android development with Kotlin, Jetpack Compose, MVVM/MVI, and Clean Architecture. I also work extensively with Firebase, REST APIs, and modern DevOps practices including CI/CD with GitHub Actions.',
  },
  {
    question: 'Are you available for freelance or contract work?',
    answer:
      'Yes, I am open to select freelance and contract opportunities, particularly for senior-level Android development, architecture consulting, and technical leadership roles.',
  },
  {
    question: 'What industries have you worked in?',
    answer:
      'I have experience across telecom, fintech, e-commerce, healthcare, and social media. My most notable work includes a telecom client app serving 2.5M+ users and a P2P payment system processing 100K+ transactions daily.',
  },
  {
    question: 'Do you provide remote work options?',
    answer:
      'Yes, I am based in Tachileik, Myanmar and Bangkok, Thailand, and am open to remote work opportunities worldwide. I have experience working with distributed teams across multiple time zones.',
  },
  {
    question: 'What is your experience with AI/ML integration?',
    answer:
      'I actively work with AI/ML technologies including Claude API, TensorFlow Lite, and on-device ML. I am currently building MoekyawTranslator, an AI-powered translation app supporting 8 languages.',
  },
  {
    question: 'Can you help with legacy code migration?',
    answer:
      'Absolutely. I have extensive experience migrating from XML to Jetpack Compose, refactoring legacy architectures to Clean Architecture, and modernizing codebases with Kotlin coroutines and Flow.',
  },
  {
    question: 'What is your approach to code quality?',
    answer:
      'I prioritize clean, testable, and maintainable code. I use comprehensive testing strategies including unit tests, integration tests, and UI tests with JUnit, MockK, and Espresso.',
  },
  {
    question: 'Do you offer mentoring or training services?',
    answer:
      'Yes, I enjoy mentoring junior developers and conducting technical training sessions. I can help teams adopt modern Android development practices, architecture patterns, and best practices.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on complexity. A typical medium-sized Android app takes 3-6 months from initial design to production launch, including testing and deployment phases.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'I believe in transparent, regular communication. I use tools like Slack, email, and video calls for daily standups, weekly reviews, and milestone planning. I provide clear documentation and progress updates.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="neon-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Common questions about my work, availability, and collaboration process.
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-6 h-6 text-neon-cyan" />
                  <span className="font-bold text-lg">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-neon-cyan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-neon-cyan" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Have more questions? I'd love to hear from you.
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
