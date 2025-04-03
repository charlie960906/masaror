import { Heart, DollarSign, Mail } from 'lucide-react';

const Help = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section - 幫助他們首頁大圖區域 */}
      <section className="min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">幫助他們</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">您的支持能改變馬紹爾群島社群的未來</p>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">一起參與我們的項目，創造更美好的明天</p>
        <div className="animate-bounce absolute bottom-12 mid transform -translate-x-1/2">
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

      <div className="max-w-4xl mx-auto">
        {/* 參與方式 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-purple-600" />
            如何參與
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">成為志願者</h3>
              <p className="text-gray-600 mb-4">
                加入我們的志願者團隊，參與馬紹爾群島的社群活動，與我們一起推動技術教育和社群發展。
              </p>
              <a href="/volunteer" className="text-blue-600 hover:text-blue-700">
                申請成為志願者
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">分享我們的使命</h3>
              <p className="text-gray-600 mb-4">
                將我們的項目分享給您的朋友和社群，讓更多人了解並支持我們的使命。
              </p>
              <a href="/share" className="text-blue-600 hover:text-blue-700">
                了解如何分享
              </a>
            </div>
          </div>
        </div>

        {/* 捐款資訊 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <DollarSign className="w-6 h-6 mr-2 text-green-600" />
            捐款支持
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">您的捐款將如何使用</h3>
            <p className="text-gray-600 mb-4">
              您的每一筆捐款都將用於支持馬紹爾群島的技術教育項目，包括提供學習資源、舉辦技術工作坊以及改善社群基礎設施。
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
               也不知道如何捐款？我們接受多種捐款方式，包括銀行轉帳、線上支付和加密貨幣捐款。
              請聯繫我們以獲取更多資訊。
              </p>
              <a href="/donate" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                立即捐款
              </a>
            </div>
          </div>
        </div>

        {/* 聯繫我們 */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Mail className="w-6 h-6 mr-2 text-blue-600" />
            聯繫我們
          </h2>
          <p className="text-gray-600 mb-4">
            如果您有任何問題或需要更多資訊，請隨時與我們聯繫。
          </p>
          <p className="text-gray-600 mb-4">
            電子郵件：<a href="mailto:support@hyjdevelop.com" className="text-blue-600 hover:text-blue-700">support@hyjdevelop.com</a>
          </p>
          <p className="text-gray-600">
            電話：+886 123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;