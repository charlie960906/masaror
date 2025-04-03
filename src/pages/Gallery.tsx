import { Camera } from 'lucide-react';

const Gallery = () => {
  // 假設的相片數據（您可以替換為真實的圖片路徑）
  const photos = [
    { id: 1, src: '/images/photo1.jpg', alt: '馬紹爾群島活動 1', description: '2024年社群活動' },
    { id: 2, src: '/images/photo2.jpg', alt: '馬紹爾群島活動 2', description: '2023年技術分享會' },
    { id: 3, src: '/images/photo3.jpg', alt: '馬紹爾群島活動 3', description: '2022年團隊合影' },
    { id: 4, src: '/images/photo4.jpg', alt: '馬紹爾群島活動 4', description: '2024年志工活動' },
    { id: 5, src: '/images/photo5.jpg', alt: '馬紹爾群島活動 5', description: '2023年社群聚會' },
    { id: 6, src: '/images/photo6.jpg', alt: '馬紹爾群島活動 6', description: '2022年學習營' },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">相片集</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">探索我們在馬紹爾群島的精彩時刻</p>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">記錄社群活動與成長的點滴</p>
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

      {/* 相片集展示區 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Camera className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-800">我們的回憶</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;