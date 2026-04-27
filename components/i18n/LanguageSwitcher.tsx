'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-white/10 rounded-full p-1">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
          language === 'zh'
            ? 'bg-white dark:bg-accent text-primary dark:text-white shadow-sm'
            : 'text-secondary hover:text-primary'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
          language === 'en'
            ? 'bg-white dark:bg-accent text-primary dark:text-white shadow-sm'
            : 'text-secondary hover:text-primary'
        }`}
      >
        EN
      </button>
    </div>
  );
}
