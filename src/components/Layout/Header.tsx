import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import GoogleTranslate from '../GoogleTranslate';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
              <Heart className="w-8 h-8 fill-current animate-gentle-bounce" />
              <span>Lovable</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`text-base font-medium transition-all duration-300 hover:text-primary relative ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <div className="ml-2">
              <GoogleTranslate />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-border mt-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ delay: isMenuOpen ? index * 0.1 : 0, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary/50 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="px-4 pt-2">
              <GoogleTranslate />
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;