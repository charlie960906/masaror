import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from 'src/components/Header.tsx';
import Footer from 'src/components/Footer.tsx';
import Home from 'src/pages/Home.tsx';
import Gallery from 'src/pages/Gallery.tsx'; // 假設存在
import Articles from 'src/pages/Articles.tsx';
import Article1 from 'src/pages/articles/Article1';
import Article2 from 'src/pages/articles/Article2';
import Article3 from 'src/pages/articles/Article3';
import Help from 'src/pages/Help.tsx'; // 假設存在

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  const getMetaData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'HYJdevelop - 創新科技與社群平台',
          description: '我們的產品將各地的人與人聯繫在一起，為大家創造機會並發出聲音，我們正在努力，建立一個安全、自由、開放的社群',
        };
      case '/gallery':
        return {
          title: 'HYJdevelop - 照片集',
          description: '探索 HYJdevelop 的照片集，記錄我們的精彩時刻。',
        };
      case '/articles':
        return {
          title: 'HYJdevelop - 文章',
          description: '閱讀 HYJdevelop 的最新文章與見解。',
        };
      case '/articles/student-autonomy':
        return {
          title: '推動學生自治：HYJdevelop 的使命',
          description: '我們如何通過技術支持學生團體實現自我管理與成長。',
        };
      case '/articles/tech-community':
        return {
          title: '技術如何改變社群互動',
          description: '探索技術在社群建設中的角色與影響。',
        };
      case '/articles/collaboration-experience':
        return {
          title: '與學生團體合作的經驗分享',
          description: '回顧我們與 SLRC 和其他團體的合作歷程。',
        };
      case '/help':
        return {
          title: 'HYJdevelop - 幫助他們',
          description: '了解如何通過 HYJdevelop 幫助他人，參與我們的公益行動。',
        };
      default:
        return {
          title: 'HYJdevelop - 創新科技與社群平台',
          description: 'HYJdevelop 致力於開發創新科技與社群平台',
        };
    }
  };

  const { title, description } = getMetaData();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://hyjdevelop.com/logo.png" />
        <meta property="og:url" content={`https://hyjdevelop.com${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://hyjdevelop.com/logo.png" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/student-autonomy" element={<Article1 />} />
          <Route path="/articles/tech-community" element={<Article2 />} />
          <Route path="/articles/collaboration-experience" element={<Article3 />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;