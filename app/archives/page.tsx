'use client';

import PageLayout from '../components/Layout/PageLayout';

export default function ArchivesPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        {/* 페이지 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <span className="mr-3">📚</span>
              강의 아카이빙
            </h1>
            <p className="text-gray-600 mt-2">펭귄 관련 강의 자료를 체계적으로 관리하세요</p>
          </div>
        </div>

        {/* 임시 콘텐츠 */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">강의 아카이빙 페이지</h2>
          <p className="text-gray-600 mb-6">
            강의 아카이빙 기능은 현재 개발 중입니다.<br/>
            곧 멋진 기능들을 만나보실 수 있습니다!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
              📹 동영상 관리
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
              📁 자료 정리
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
              🔍 검색 기능
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
