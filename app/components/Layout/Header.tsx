'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🐧</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">이정모의 각종 펭귄과학관</h1>
              <p className="text-sm text-gray-600">관리자 업무 시스템</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/' 
                    ? 'bg-blue-100 text-blue-700 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                🏠 대시보드
              </Link>
              <Link 
                href="/documents" 
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/documents' 
                    ? 'bg-blue-100 text-blue-700 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                📋 서류관리
              </Link>
              <Link 
                href="/archives" 
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/archives' 
                    ? 'bg-blue-100 text-blue-700 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                📚 강의 아카이빙
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">관리자</p>
                <p className="font-semibold text-gray-800">이정모 관장</p>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">👨‍💼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
