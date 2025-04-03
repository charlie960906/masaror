import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, User } from 'lucide-react';

const Article1 = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">推動學生自治：HYJdevelop 的使命</h1>
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-6">
            <User className="w-4 h-4 mr-1" />
            <span>HYJdevelop 團隊</span>
            <Calendar className="w-4 h-4 ml-4 mr-1" />
            <span>2025-03-15</span>
          </div>

          <div className="prose text-gray-700 whitespace-pre-wrap">
            自 2024 年以來，HYJdevelop 致力於推廣學生自治發展。我們鼓勵學生團體跳脫傳統框架，探索潛在可能性，並通過技術支持幫助他們建立官方網頁，讓理念傳播到更廣泛的群體。這篇文章將介紹我們的初衷、方法以及未來的願景。
          </div>

          <Link to="/articles" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
            返回文章列表
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article1;