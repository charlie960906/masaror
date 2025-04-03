import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, User } from 'lucide-react';

const Article2 = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">技術如何改變社群互動</h1>
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-6">
            <User className="w-4 h-4 mr-1" />
            <span>HYJdevelop 技術組</span>
            <Calendar className="w-4 h-4 ml-4 mr-1" />
            <span>2025-02-28</span>
          </div>

          <div className="prose text-gray-700 whitespace-pre-wrap">
            在數位時代，技術不僅是工具，更是連接人與人之間的橋樑。HYJdevelop 通過網站建設、資源共享等方式，幫助學生社群提升影響力。這篇文章將深入探討技術如何改變社群互動，並分享我們的實際案例。
          </div>

          <Link to="/articles" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
            返回文章列表
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article2;