export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐧</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">이정모의 각종 펭귄과학관</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">소개</a>
              <a href="#exhibits" className="text-gray-600 hover:text-blue-600 transition-colors">전시관</a>
              <a href="#research" className="text-gray-600 hover:text-blue-600 transition-colors">연구</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">연락처</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                펭귄의 세계로
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              남극의 귀여운 주민들부터 다양한 펭귄 종들의 생태와 과학적 비밀을 탐구하는 특별한 과학관에 오신 것을 환영합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                전시관 둘러보기
              </button>
              <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                가상 투어
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Penguin Animation */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="text-6xl">🐧</div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <div className="text-4xl">🐧</div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-500">
          <div className="text-5xl">🐧</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="exhibits" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">주요 전시관</h3>
            <p className="text-xl text-gray-600">펭귄의 다양한 종류와 생태를 체험할 수 있는 특별한 공간들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🐧</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">황제펭귄 전시관</h4>
              <p className="text-gray-600 mb-4">남극의 가장 큰 펭귄인 황제펭귄의 생태와 서식지에 대해 알아보세요.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                자세히 보기 →
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🐧</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">젠투펭귄 연구소</h4>
              <p className="text-gray-600 mb-4">가장 빠른 펭귄으로 알려진 젠투펭귄의 수영 능력과 생태를 연구합니다.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                자세히 보기 →
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🐧</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">펭귄 보존 센터</h4>
              <p className="text-gray-600 mb-4">펭귄 보존을 위한 다양한 연구와 보호 활동을 소개합니다.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                자세히 보기 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-6">최신 펭귄 연구</h3>
              <p className="text-xl mb-8 opacity-90">
                이정모 박사와 함께하는 펭귄 생태 연구의 최신 성과를 확인해보세요
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="opacity-90">연구 프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="opacity-90">펭귄 종류</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="opacity-90">발표 논문</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🐧</span>
                </div>
                <h4 className="text-xl font-bold">이정모의 각종 펭귄과학관</h4>
              </div>
              <p className="text-gray-400">
                펭귄의 아름다운 세계를 탐구하는 특별한 과학관입니다.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">연락처</h5>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@penguin-museum.com</p>
                <p>📞 02-1234-5678</p>
                <p>📍 서울시 강남구 펭귄로 123</p>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">운영시간</h5>
              <div className="space-y-2 text-gray-400">
                <p>평일: 09:00 - 18:00</p>
                <p>주말: 10:00 - 20:00</p>
                <p>휴관일: 매주 월요일</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 이정모의 각종 펭귄과학관. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
