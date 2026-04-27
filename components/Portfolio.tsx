'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Portfolio() {
  const { t, language } = useLanguage();
  const portfolio = t('portfolio');

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: portfolio.all },
    { key: 'mindcluster', label: portfolio.mindcluster },
    { key: 'scheduler', label: portfolio.scheduler },
    { key: 'mes', label: portfolio.mes },
  ];

  const projects = portfolio.projects;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-background dark:bg-background-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{portfolio.title}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-6">
            {portfolio.title} <span className="gradient-text">{portfolio.highlight}</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {portfolio.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.key
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-white dark:bg-primary text-secondary hover:bg-gray-100 dark:hover:bg-primary/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className={`group bg-white dark:bg-primary rounded-2xl overflow-hidden shadow-sm hover-lift cursor-pointer transition-all ${
                selectedProject === project.id ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider px-3 py-1 bg-white/90 dark:bg-primary/90 rounded-full">
                    {categories.find((c) => c.key === project.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  {project.title[language]}
                </h3>
                <p className="text-accent text-sm mb-3">{project.subtitle[language]}</p>
                <p className="text-secondary text-sm mb-4 line-clamp-2">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-primary/50 text-secondary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    target={project.link !== '#' ? '_blank' : undefined}
                    rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (project.link === '#') e.preventDefault();
                    }}
                    className="text-accent text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    {language === 'zh' ? '查看详情' : 'View Details'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button
                    className="text-secondary text-xs hover:text-accent transition-colors"
                  >
                    {selectedProject === project.id
                      ? (language === 'zh' ? '收起' : 'Collapse')
                      : (language === 'zh' ? '展开' : 'Expand')}
                  </button>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: selectedProject === project.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-100 dark:border-white/10 pt-4">
                    <ul className="space-y-2">
                      {project.details[language].map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-secondary">
                          <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
