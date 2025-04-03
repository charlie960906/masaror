import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, User } from 'lucide-react';

const Article3 = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">與學生團體合作的經驗分享</h1>
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-6">
            <User className="w-4 h-4 mr-1" />
            <span>HYJdevelop 社群經理</span>
            <Calendar className="w-4 h-4 ml-4 mr-1" />
            <span>2025-01-10</span>
          </div>

          <div className="prose text-gray-700 whitespace-pre-wrap">
            HYJdevelop 與多個學生團體合作，例如 SLRC 和嘉義青年基地，協助他們建立線上平台並推廣理念。這篇文章將分享合作中的挑戰、成果以及我們從中學到的經驗教訓。
          </div>

          <Link to="/articles" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
            返回文章列表
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article3;