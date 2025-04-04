import { Facebook, Instagram, Disc as Discord } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Footer = () => {
  useScrollToTop();

  // 定義導航連結
  const navLinks = [
    { to: '/gallery', label: '照片集' },
    { to: '/articles', label: '文章' },
    { to: '/help', label: '幫助他們' },
  ];

  // 定義社交媒體連結
  const socialLinks = [
    {
      href: 'https://fb.hyjdevelop.com',
      icon: Facebook,
      hoverColor: 'hover:text-blue-600',
      ariaLabel: 'Follow us on Facebook',
    },
    {
      href: 'https://ig.hyjdevelop.com',
      icon: Instagram,
      hoverColor: 'hover:text-pink-600',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      href: '#',
      icon: Discord,
      hoverColor: 'hover:text-indigo-600',
      ariaLabel: 'Join us on Discord',
    },
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-sm text-gray-800 border-t">
      <div className="container mx-auto px-4 py-8">
        {/* 錯誤回報 */}
        <div className="text-center mb-8">
          <p>
            網站出錯了？{' '}
            <a
              href="https://forms.gle/H4T7bKnj5FFMDAev5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              點此告訴我們
            </a>
          </p>
        </div>

        {/* 導航連結 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {navLinks.map((link, index) => (
            <div key={index} className="text-center">
              <h3>
                <Link
                  to={link.to}
                  className="font-bold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </h3>
            </div>
          ))}
        </div>

        {/* 社交媒體與版權資訊 */}
        <div className="text-center">
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">
              Powered by{' '}
              <a
                href="https://hyjdevelop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                HYJdevelop
              </a>
            </h4>
            <h4 className="text-sm font-medium mb-4">關注我們</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 ${social.hoverColor} transition-colors`}
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} HYJdevelop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;