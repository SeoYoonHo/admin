import PageLayout from './components/Layout/PageLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <PageLayout>
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="text-6xl mb-4">🐧</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                업무 관리 시스템
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            펭귄과학관의 모든 업무를 효율적으로 관리하세요
          </p>
        </div>

        {/* Main Functions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 강의 아카이빙 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-3xl">📚</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">강의 아카이빙</h3>
                <p className="text-gray-600">강의 자료 관리 및 아카이브</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              펭귄 관련 강의 자료, 동영상, 문서를 체계적으로 관리하고 아카이브할 수 있습니다.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>📁 총 24개 강의</span>
                <span>🎥 156개 영상</span>
              </div>
              <Link href="/archives" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center">
                관리하기
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* 서류관리 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-3xl">📋</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">서류관리</h3>
                <p className="text-gray-600">문서 및 서류 관리</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              과학관 운영에 필요한 각종 서류, 계약서, 보고서를 디지털로 관리합니다.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>📄 총 89개 문서</span>
                <span>📊 12개 보고서</span>
              </div>
              <Link href="/documents" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center">
                관리하기
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">📊</span>
            업무 현황
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600">총 강의 수</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">89</div>
              <div className="text-gray-600">관리 문서</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">156</div>
              <div className="text-gray-600">아카이브 영상</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">월간 보고서</div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🕒</span>
            최근 활동
          </h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600">📚</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">새로운 강의 자료 업로드</p>
                <p className="text-sm text-gray-600">"펭귄의 생태계와 보존" 강의 영상이 추가되었습니다.</p>
              </div>
              <span className="text-sm text-gray-500">2시간 전</span>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600">📋</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">월간 보고서 작성 완료</p>
                <p className="text-sm text-gray-600">12월 과학관 운영 보고서가 승인되었습니다.</p>
              </div>
              <span className="text-sm text-gray-500">1일 전</span>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600">🎥</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">아카이브 영상 정리</p>
                <p className="text-sm text-gray-600">2023년 강의 영상들이 카테고리별로 정리되었습니다.</p>
              </div>
              <span className="text-sm text-gray-500">3일 전</span>
            </div>
          </div>
        </div>
    </PageLayout>
  );
}
