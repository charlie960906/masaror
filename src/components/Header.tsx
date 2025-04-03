import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// 定義選單項目的類型
interface MenuItem {
  to: string;
  label: string;
}

// 動畫配置
const ANIMATION_CONFIG = {
  ITEM_DURATION: 0.12,
  STAGGER_DELAY: 0.1,
  INITIAL_DELAY: 0.05,
  EASE: [0.33, 1, 0.68, 1],
} as const;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 修改後的選單項目
  const menuItems: MenuItem[] = [
    { to: '/', label: '首頁' },
    { to: '/gallery', label: '照片集' },
    { to: '/articles', label: '文章' },
    { to: '/help', label: '幫助他們' },
  ];

  const totalItems = menuItems.length;
  const animationDuration = ANIMATION_CONFIG.INITIAL_DELAY + (totalItems - 1) * ANIMATION_CONFIG.STAGGER_DELAY;
  const backgroundDuration = animationDuration - 0.2;

  // 動畫變體
  const containerVariants: Variants = {
    initial: { 
      opacity: 0,
      transform: 'translateY(-10%)',
    },
    animate: { 
      opacity: 1,
      transform: 'translateY(0)',
      transition: { 
        opacity: { duration: backgroundDuration, ease: ANIMATION_CONFIG.EASE },
        transform: { duration: animationDuration, ease: ANIMATION_CONFIG.EASE },
        when: 'beforeChildren',
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
      },
    },
    exit: { 
      opacity: 0,
      transform: 'translateY(-10%)',
      transition: { 
        opacity: { duration: backgroundDuration, ease: ANIMATION_CONFIG.EASE },
        transform: { duration: animationDuration, ease: ANIMATION_CONFIG.EASE },
        when: 'afterChildren',
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: [number, number]) => {
      const [i] = custom;
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: ANIMATION_CONFIG.ITEM_DURATION,
          delay: ANIMATION_CONFIG.INITIAL_DELAY + i * ANIMATION_CONFIG.STAGGER_DELAY,
        },
      };
    },
    exit: (custom: [number, number]) => {
      const [i, length] = custom;
      return {
        opacity: 0,
        y: -20,
        transition: {
          duration: ANIMATION_CONFIG.ITEM_DURATION,
          delay: (length - 1 - i) * ANIMATION_CONFIG.STAGGER_DELAY,
        },
      };
    },
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src="/logo.png" alt="HYJdevelop 標誌" className="h-10" />
            <span className="text-xl font-bold">HYJdevelop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="hover:text-blue-600"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 w-full overflow-hidden"
              style={{ top: 0, right: 0, willChange: 'transform, opacity' }}
            >
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col space-y-4 text-right"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={[index, totalItems]}
                  >
                    <Link
                      to={item.to}
                      className="px-6 py-2 hover:bg-blue-50 block"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;