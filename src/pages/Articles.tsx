import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, User } from 'lucide-react';

const Articles = () => {
  // 文章概覽數據
  const articles = [
    {
      id: 1,
      slug: 'student-autonomy',
      title: '推動學生自治：HYJdevelop 的使命',
      excerpt: '我們如何通過技術支持學生團體實現自我管理與成長。',
      author: 'HYJdevelop 團隊',
      date: '2025-03-15',
    },
    {
      id: 2,
      slug: 'tech-community',
      title: '技術如何改變社群互動',
      excerpt: '探索技術在社群建設中的角色與影響。',
      author: 'HYJdevelop 技術組',
      date: '2025-02-28',
    },
    {
      id: 3,
      slug: 'collaboration-experience',
      title: '與學生團體合作的經驗分享',
      excerpt: '回顧我們與 SLRC 和其他團體的合作歷程。',
      author: 'HYJdevelop 社群經理',
      date: '2025-01-10',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-4 relative">
        {/* 內容 */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我們的文章</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            探索 HYJdevelop 的故事、經驗與見解，了解我們如何用技術改變社群。
          </p>
        </div>

        {/* 向下滾動箭頭 */}
        <div className="animate-bounce absolute bottom-4 mid transform -translate-x-1/2 z-10">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 22 22"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* 文章列表 */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{article.title}</h2>
              </div>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <User className="w-4 h-4 mr-1" />
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{article.date}</span>
              </div>

              <p className="text-gray-600 mb-6 line-clamp-3">{article.excerpt}</p>

              <Link
                to={`/articles/${article.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                閱讀全文
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* 注意事項 */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            想了解更多或提出建議？請聯繫{' '}
            <a href="mailto:support@hyjdevelop.com" className="text-blue-600 hover:underline">
              support@hyjdevelop.com
            </a>
            。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;