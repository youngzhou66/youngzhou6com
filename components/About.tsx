'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const skillIcons: Record<string, string> = {
  go: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  k8s: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  ai: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  ts: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();
  const about = t('about');

  const skills = [
    about.go,
    about.python,
    about.k8s,
    about.docker,
    about.redis,
    about.java,
    about.vue,
    about.mysql,
    about.ai,
    about.ts,
  ];

  const experiences = about.experience;

  return (
    <section id="about" className="py-32 bg-white dark:bg-primary/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 头部介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{about.title}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-8">
            {about.subtitle}
            <span className="gradient-text"> {about.highlight}</span> {about.subtitleEnd}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-secondary text-lg leading-relaxed">{about.description1}</p>
            <p className="text-secondary text-lg leading-relaxed">{about.description2}</p>
          </div>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mb-20 max-w-2xl mx-auto"
        >
          <div className="text-center p-6 rounded-2xl bg-background dark:bg-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-secondary">{about.years}</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background dark:bg-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-secondary">{about.clients}</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background dark:bg-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-secondary">{about.projects}</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 技能栈 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              {about.skills}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.4 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-background dark:bg-primary/30 hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors cursor-default group"
                >
                  <div className="w-10 h-10 mb-2 flex items-center justify-center">
                    {skill === about.go && (
                      <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.811 10.835c0-.59.12-1.09.36-1.51.24-.42.58-.76 1.01-1.02.43-.26.94-.39 1.53-.39.52 0 .99.1 1.4.31.41.2.75.49 1.01.87.26.37.44.81.54 1.31.1.5.15 1.06.15 1.69 0 .59-.12 1.09-.36 1.51-.24.42-.58.76-1.01 1.02-.43.26-.94.39-1.53.39-.52 0-.99-.1-1.4-.31-.41-.2-.75-.49-1.01-.87-.26-.37-.44-.81-.54-1.31-.1-.5-.15-1.06-.15-1.69zm.83 0c0 .48.06.91.18 1.28.12.37.29.68.52.92.23.24.51.42.84.53.33.11.71.17 1.13.17.48 0 .91-.06 1.28-.18.37-.12.68-.29.92-.52.24-.23.42-.51.53-.84.11-.33.17-.71.17-1.13 0-.48-.06-.91-.18-1.28-.12-.37-.29-.68-.52-.92-.23-.24-.51-.42-.84-.53-.33-.11-.71-.17-1.13-.17-.48 0-.91.06-1.28.18-.37.12-.68.29-.92.52-.24.23-.42.51-.53.84-.11.33-.17.71-.17 1.13zm3.72 0c0-.59.12-1.09.36-1.51.24-.42.58-.76 1.01-1.02.43-.26.94-.39 1.53-.39.52 0 .99.1 1.4.31.41.2.75.49 1.01.87.26.37.44.81.54 1.31.1.5.15 1.06.15 1.69 0 .59-.12 1.09-.36 1.51-.24.42-.58.76-1.01 1.02-.43.26-.94.39-1.53.39-.52 0-.99-.1-1.4-.31-.41-.2-.75-.49-1.01-.87-.26-.37-.44-.81-.54-1.31-.1-.5-.15-1.06-.15-1.69zm.83 0c0 .48.06.91.18 1.28.12.37.29.68.52.92.23.24.51.42.84.53.33.11.71.17 1.13.17.48 0 .91-.06 1.28-.18.37-.12.68-.29.92-.52.24-.23.42-.51.53-.84.11-.33.17-.71.17-1.13 0-.48-.06-.91-.18-1.28-.12-.37-.29-.68-.52-.92-.23-.24-.51-.42-.84-.53-.33-.11-.71-.17-1.13-.17-.48 0-.91.06-1.28.18-.37.12-.68.29-.92.52-.24.23-.42.51-.53.84-.11.33-.17.71-.17 1.13z"/>
                      </svg>
                    )}
                    {skill === about.python && (
                      <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.68H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01-.16-.01h-8.22v.83h5.84l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05-1.09-.14-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.34l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.84l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"/>
                      </svg>
                    )}
                    {skill === about.k8s && (
                      <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                      </svg>
                    )}
                    {skill === about.docker && (
                      <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.687 11.687 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
                      </svg>
                    )}
                    {skill === about.redis && (
                      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.453 19.851c.124.124.238.257.343.4a5.782 5.782 0 0 0-5.434.002c.103-.143.217-.276.34-.4-.123-.124-.237-.257-.34-.4-.032-.043-.063-.086-.092-.13l.003-.003a4.493 4.493 0 0 0-.28-.446l-.002-.002a4.93 4.93 0 0 0-.583-.652l-.002-.002a5.073 5.073 0 0 0-.89-.627l-.004-.003a5.56 5.56 0 0 0-.697-.326l-.007-.002a6.28 6.28 0 0 0-.602-.202l-.008-.002a6.766 6.766 0 0 0-.774-.165l-.007-.001a7.18 7.18 0 0 0-.793-.059h-.006a7.506 7.506 0 0 0-.775.047h-.003a7.18 7.18 0 0 0-.793.145l-.004.001a6.766 6.766 0 0 0-.774.243l-.002.001a6.28 6.28 0 0 0-.602.341l-.001.001a5.56 5.56 0 0 0-.697.436l-.002.002a5.073 5.073 0 0 0-.89.767l-.002.002a4.93 4.93 0 0 0-.583.89l-.002.002a4.493 4.493 0 0 0-.28.446l.003.003c-.029.044-.06.087-.092.13-.103.143-.217.276-.34.4-.123.143-.237.276-.343.4zm-5.527 2.037a1.25 1.25 0 1 1-1.768 1.768 1.25 1.25 0 0 1 1.768-1.768m-8.003-3.212a7.88 7.88 0 0 1 .087-1.213l.002-.01c.068-.445.174-.887.318-1.321l.004-.01c.143-.433.324-.863.542-1.284l.006-.011c.218-.421.474-.838.767-1.246l.008-.011c.293-.408.621-.812.982-1.208l.01-.01c.361-.396.753-.788 1.174-1.17l.012-.01c.42-.383.868-.761 1.342-1.13l.014-.01c.474-.369.972-.733 1.492-1.09l.015-.01c.52-.357 1.061-.708 1.621-1.052l.017-.01a28.933 28.933 0 0 1 3.646-1.822l.018-.007a13.527 13.527 0 0 1 1.86-.612l.019-.004a10.088 10.088 0 0 1 1.823-.294l.02-.001a7.76 7.76 0 0 1 1.778.097l.02.006c.558.134 1.096.343 1.61.626l.02.012a7.57 7.57 0 0 1 1.43 1.052l.019.018a8.01 8.01 0 0 1 1.156 1.382l.017.024a8.98 8.98 0 0 1 .84 1.682l.013.03a10.14 10.14 0 0 1 .547 1.917l.008.036a11.27 11.27 0 0 1 .222 2.086l.003.04a12.44 12.44 0 0 1-.133 2.168l-.005.044a13.49 13.49 0 0 1-.483 2.12l-.007.023a14.55 14.55 0 0 1-.828 1.94l-.009.016a15.56 15.56 0 0 1-1.17 1.682l-.01.012a16.65 16.65 0 0 1-1.508 1.37l-.013.01a17.82 17.82 0 0 1-1.84 1.022l-.014.007a19.05 19.05 0 0 1-2.165.642l-.016.004a20.36 20.36 0 0 1-2.482.238l-.017.001a21.73 21.73 0 0 1-2.787-.2l-.018-.003a23.17 23.17 0 0 1-3.064-.68l-.019-.006a24.68 24.68 0 0 1-3.287-1.224l-.019-.009a26.27 26.27 0 0 1-3.454-1.832l-.018-.011a27.94 27.94 0 0 1-3.562-2.498l-.017-.014a29.69 29.69 0 0 1-3.61-3.222l-.015-.016a31.51 31.51 0 0 1-3.588-3.996l-.013-.018A33.4 33.4 0 0 1 0 10.55Z"/>
                      </svg>
                    )}
                    {(skill === about.java || skill === about.vue) && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        {skill === about.java ? (
                          <path className="text-red-500" d="M8.851 18.56s-.917.537.653.72c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.155M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.806-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.597M9.734 24c4.322.277 10.959-.153 11.116-2.198 0 0-.031.799-3.687 1.43-4.136.728-9.238.643-12.266.177 0 0 .619.513 4.837.591"/>
                        ) : (
                          <path className="text-green-500" d="M24 1.61h-9.94L12.94 0 1.06 1.61H0v1.61l24 .32z"/>
                        )}
                      </svg>
                    )}
                    {skill === about.mysql && (
                      <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.405 5.501c-.115 0-.193.014-.274.025V1.099h-.142v4.427a.807.807 0 0 0-.11-.025c-.737-.14-1.497.02-1.992.484-.495.463-.678 1.158-.49 1.847.188.688.757 1.162 1.558 1.232a1.68 1.68 0 0 0 .44-.039V5.95c.002-.006.004-.012.006-.019.174-.655.692-1.153 1.347-1.292a1.714 1.714 0 0 1 1.07.06c-.254-.594-.834-1.03-1.413-1.198zm-3.07 11.09c-.033 0-.066.003-.098.006V8.997h.098c.325 0 .63.063.908.176v7.18a2.33 2.33 0 0 1-.908.238zM7.34 17.486c-.115 0-.227-.007-.336-.02V8.997h.336c1.048 0 2.007.384 2.663 1.026V16.46a2.956 2.956 0 0 1-2.663 1.026zm-3.07 1.09c-.033 0-.066.003-.098.006V9.933h.098c.325 0 .63.063.908.176v8.228a2.33 2.33 0 0 1-.908.238zm7.76 3.01c-.244.264-.38.62-.38.99 0 .37.136.726.38.99.244.264.578.41.925.41.347 0 .681-.146.925-.41.244-.264.38-.62.38-.99 0-.37-.136-.726-.38-.99a1.277 1.277 0 0 0-.925-.41c-.347 0-.681.146-.925.41zm-3.07-.418c-.033 0-.066.003-.098.006v-.546h.098c.325 0 .63.063.908.176v.13a2.33 2.33 0 0 1-.908.234zm-3.07.418c-.244.264-.38.62-.38.99 0 .37.136.726.38.99.244.264.578.41.925.41.347 0 .681-.146.925-.41.244-.264.38-.62.38-.99 0-.37-.136-.726-.38-.99a1.277 1.277 0 0 0-.925-.41c-.347 0-.681.146-.925.41zm13.72-7.038c-.115 0-.227-.007-.336-.02V5.933h.336c1.048 0 2.007.384 2.663 1.026v7.47a2.956 2.956 0 0 1-2.663 1.026z"/>
                      </svg>
                    )}
                    {skill === about.ai && (
                      <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-secondary group-hover:text-primary transition-colors text-center">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 工作经历 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              {about.experienceTitle}
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-white dark:border-primary shadow-lg" />
                  <div className="p-4 rounded-xl bg-background dark:bg-primary/30 hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-primary">{exp.company}</h4>
                      <span className="text-xs text-accent font-medium px-2 py-1 rounded-full bg-accent/10">{exp.period}</span>
                    </div>
                    <p className="text-sm text-secondary mb-3">{exp.role}</p>
                    <ul className="space-y-1.5">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-secondary/80">
                          <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
