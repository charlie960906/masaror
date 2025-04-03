import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 添加路由支持
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> {/* 设置 basename 以匹配部署路径 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);