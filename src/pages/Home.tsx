import { Camera, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // 假設的募款數據
  const fundraisingGoal = 100000; // 目標金額（單位：美元）
  const currentAmount = 65000; // 當前金額
  const progressPercentage = Math.min((currentAmount / fundraisingGoal) * 100, 100); // 計算進度百分比

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          我們致力於幫助馬紹爾群島
          <div className="mt-4 space-x-10">
            <span className="text-blue-500">軟體</span>
            <span className="text-yellow-300">網站</span>
            <span className="text-red-600">社群</span>
          </div>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-0">
          我們的產品將各地的人與人聯繫在一起
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-0">
          為大家創造機會並發出聲音
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-0">
          我們正在努力，建立一個安全、自由、開放的社群
        </p>
        <div className="animate-bounce absolute bottom-4 mid transform -translate-x-1/2">
          <svg
            className="w-8 h-8 text-gray-400"
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

      {/* Fundraising Progress Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">募款進度</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            我們正在為馬紹爾群島的社群項目募集資金，您的支持將幫助我們實現目標！
          </p>

          {/* 進度條 */}
          <div className="max-w-xl mx-auto">
            <div className="flex justify-between mb-2 text-gray-700">
              <span>已募得: ${currentAmount.toLocaleString()}</span>
              <span>目標: ${fundraisingGoal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="mt-2 text-blue-600 font-semibold">
              {progressPercentage.toFixed(1)}% 已達成
            </p>
          </div>

          <Link
            to="/help"
            className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            立即捐款支持
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Gallery */}
            <div className="text-center p-6 flex flex-col h-full justify-between">
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">照片集</h3>
                <p className="text-gray-600 flex-1">
                  探索我們在馬紹爾群島的活動與精彩時刻。
                </p>
              </div>
              <Link to="/gallery" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                查看照片
              </Link>
            </div>

            {/* Articles */}
            <div className="text-center p-6 flex flex-col h-full justify-between">
              <div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">文章</h3>
                <p className="text-gray-600 flex-1">
                  閱讀我們的故事、經驗與技術見解。
                </p>
              </div>
              <Link to="/articles" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                閱讀文章
              </Link>
            </div>

            {/* Help */}
            <div className="text-center p-6 flex flex-col h-full justify-between">
              <div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">幫助他們</h3>
                <p className="text-gray-600 flex-1">
                  了解如何參與我們的項目並提供支持。
                </p>
              </div>
              <Link to="/help" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;