'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import LanguageSwitcher from './i18n/LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { t } = useLanguage();
  const router = useRouter();

  const nav = t('nav');
  const navLinks = [
    { name: nav.home, href: '#home' },
    { name: nav.about, href: '#about' },
    { name: nav.portfolio, href: '#portfolio' },
    { name: nav.group, href: '/group', external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > 100) {
        const prevScrollY = (window as any).__prevScrollY || 0;
        if (currentScrollY > prevScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        (window as any).__prevScrollY = currentScrollY;
      } else {
        setHidden(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, external?: boolean) => {
    if (external) {
      router.push(href);
      setIsOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-display font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            zhou feng
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                onClick={() => scrollToSection(link.href, link.external)}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href, link.external)}
              className="block w-full text-left text-lg font-medium text-secondary hover:text-primary transition-colors py-2"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
