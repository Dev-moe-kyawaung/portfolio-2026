'use client';

import { motion } from 'framer-motion';
import { Layout, Palette, Zap, Smartphone } from 'lucide-react';

export default function ComposePatterns() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Jetpack <span className="neon-text">Compose</span> Patterns
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reusable component library and best practices from 50+ Compose screens.
          </p>
        </motion.div>

        {/* Component Library */}
        <div className="space-y-12">
          {/* Custom Components */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Layout className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Reusable Components</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`@Composable
fun NeonButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .background(
                Brush.horizontalGradient(
                    colors = listOf(Color(0xFF00F3FF), Color(0xFFBD00FF))
                ),
                shape = RoundedCornerShape(12.dp)
            )
            .clickable { onClick() }
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            color = Color.White,
            fontWeight = FontWeight.Bold
        )
    }
}`}</code>
            </pre>
          </motion.div>

          {/* Theming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Palette className="w-12 h-12 text-neon-cyan" />
              <h2 className="
