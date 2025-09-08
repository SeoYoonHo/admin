'use client';

import { useState } from 'react';
import PageLayout from '../components/Layout/PageLayout';

// 임시 데이터 (나중에 API에서 가져올 예정)
const mockDocuments = [
  { id: 1, title: '2024년 1월 운영보고서', category: '보고서', date: '2024-01-31', size: '2.3MB', type: 'pdf' },
  { id: 2, title: '펭귄 생태 연구 계획서', category: '연구', date: '2024-01-25', size: '1.8MB', type: 'docx' },
  { id: 3, title: '과학관 임대 계약서', category: '계약서', date: '2024-01-20', size: '0.9MB', type: 'pdf' },
  { id: 4, title: '직원 급여 명세서', category: '인사', date: '2024-01-15', size: '1.2MB', type: 'xlsx' },
  { id: 5, title: '펭귄 전시회 기획안', category: '기획', date: '2024-01-10', size: '3.1MB', type: 'pptx' },
  { id: 6, title: '안전 점검 체크리스트', category: '안전', date: '2024-01-05', size: '0.5MB', type: 'pdf' },
  { id: 7, title: '월간 재정 보고서', category: '재정', date: '2024-01-01', size: '1.7MB', type: 'xlsx' },
  { id: 8, title: '펭귄 사육 매뉴얼', category: '운영', date: '2023-12-28', size: '4.2MB', type: 'pdf' },
];

const categories = ['전체', '보고서', '연구', '계약서', '인사', '기획', '안전', '재정', '운영'];

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  
  const itemsPerPage = 5;
  
  // 카테고리별 필터링
  const filteredDocuments = selectedCategory === '전체' 
    ? mockDocuments 
    : mockDocuments.filter(doc => doc.category === selectedCategory);
  
  // 페이징
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);
  
  // 체크박스 핸들러
  const handleSelectDocument = (id: number) => {
    setSelectedDocuments(prev => 
      prev.includes(id) 
        ? prev.filter(docId => docId !== id)
        : [...prev, id]
    );
  };
  
  const handleSelectAll = () => {
    if (selectedDocuments.length === paginatedDocuments.length) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(paginatedDocuments.map(doc => doc.id));
    }
  };
  
  // 삭제 핸들러
  const handleDeleteSelected = () => {
    if (selectedDocuments.length === 0) return;
    if (confirm(`선택한 ${selectedDocuments.length}개의 서류를 삭제하시겠습니까?`)) {
      // 실제로는 API 호출
      console.log('삭제할 서류 ID들:', selectedDocuments);
      setSelectedDocuments([]);
    }
  };
  
  // 메일 보내기 핸들러
  const handleSendEmail = () => {
    if (selectedDocuments.length === 0) {
      alert('메일을 보낼 서류를 선택해주세요.');
      return;
    }
    setShowEmailModal(true);
  };
  
  // 파일 타입 아이콘
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'docx': return '📝';
      case 'xlsx': return '📊';
      case 'pptx': return '📈';
      default: return '📄';
    }
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        {/* 페이지 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <span className="mr-3">📋</span>
              서류관리
            </h1>
            <p className="text-gray-600 mt-2">과학관 운영에 필요한 모든 서류를 관리하세요</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">➕</span>
              서류 추가
            </button>
          </div>
        </div>

        {/* 필터 및 액션 바 */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* 카테고리 선택 */}
            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center space-x-2 bg-white border-2 border-gray-200 hover:border-blue-300 px-4 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="text-lg">🏷️</span>
                <span className="font-medium text-gray-800">{selectedCategory}</span>
                <span className={`text-gray-600 transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-10 overflow-hidden">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0 ${
                        selectedCategory === category 
                          ? 'bg-blue-100 text-blue-800 font-semibold' 
                          : 'text-gray-700 hover:text-blue-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">🏷️</span>
                        <span className="font-medium">{category}</span>
                        {selectedCategory === category && (
                          <span className="ml-auto text-blue-600">✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 선택된 항목 액션 */}
            {selectedDocuments.length > 0 && (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  {selectedDocuments.length}개 선택됨
                </span>
                <button
                  onClick={handleSendEmail}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">📧</span>
                  메일 보내기
                </button>
                <button
                  onClick={handleDeleteSelected}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">🗑️</span>
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 서류 목록 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedDocuments.length === paginatedDocuments.length && paginatedDocuments.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">서류명</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">카테고리</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">날짜</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">크기</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">타입</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">액션</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedDocuments.map((document) => (
                  <tr key={document.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedDocuments.includes(document.id)}
                        onChange={() => handleSelectDocument(document.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="mr-3 text-lg">{getFileIcon(document.type)}</span>
                        <span className="font-medium text-gray-900">{document.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {document.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{document.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{document.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 uppercase">{document.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          다운로드
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 페이징 */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              이전
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              다음
            </button>
          </div>
        )}

        {/* 통계 정보 */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 서류 현황</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredDocuments.length}</div>
              <div className="text-sm text-gray-600">총 서류</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{selectedDocuments.length}</div>
              <div className="text-sm text-gray-600">선택됨</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">카테고리</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{totalPages}</div>
              <div className="text-sm text-gray-600">페이지</div>
            </div>
          </div>
        </div>
      </div>

      {/* 메일 보내기 모달 (나중에 구현) */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">📧 메일 보내기</h3>
            <p className="text-gray-600 mb-4">
              선택한 {selectedDocuments.length}개의 서류를 첨부하여 메일을 보내시겠습니까?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={() => {
                  // 실제 메일 보내기 로직
                  alert('메일 보내기 기능은 추후 구현됩니다.');
                  setShowEmailModal(false);
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                보내기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 서류 추가 모달 (나중에 구현) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">➕ 서류 추가</h3>
            <p className="text-gray-600 mb-4">
              새로운 서류를 추가하시겠습니까?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={() => {
                  // 실제 서류 추가 로직
                  alert('서류 추가 기능은 추후 구현됩니다.');
                  setShowAddModal(false);
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
