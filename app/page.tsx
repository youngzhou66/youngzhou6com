'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-4xl font-display font-bold"
        >
          <span className="gradient-text">Loading...</span>
        </motion.div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background dark:bg-background-dark">
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
