'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/group');
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center text-white">
      <div className="text-xl text-gray-400">
        <span className="inline-block animate-pulse">跳转到分组页面...</span>
      </div>
      <meta http-equiv="refresh" content="0;url=/group" />
    </div>
  );
}
