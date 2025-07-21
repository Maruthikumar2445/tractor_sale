import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTractor, 
  faBars, 
  faTimes, 
  faGlobe,
  faChevronDown 
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { getText, currentLanguage, setLanguage } = useLanguage();
  const langMenuRef = useRef(null);
  const sections = ['home', 'about', 'services', 'testimonials', 'blog', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faTractor} className="logo-icon" />
          <span> Sri Maruthi Tractor Sales</span>
        </motion.div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {sections.map((section, index) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                color: 'var(--primary-color)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {getText('nav', section)}
            </motion.a>
          ))}
        </div>

        <div className="nav-right">
          <div className="language-switcher" ref={langMenuRef}>
            <motion.button 
              className="language-toggle"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
              <span>{currentLanguage === 'en' ? 'English' : 'తెలుగు'}</span>
              <motion.div
                className="chevron-icon"
                animate={{ rotate: isLangMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  className="language-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    onClick={() => {
                      setLanguage('en');
                      setIsLangMenuOpen(false);
                    }}
                    className={currentLanguage === 'en' ? 'active' : ''}
                    whileHover={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
                  >
                    English
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setLanguage('te');
                      setIsLangMenuOpen(false);
                    }}
                    className={currentLanguage === 'te' ? 'active' : ''}
                    whileHover={{ backgroundColor: 'rgba(0, 102, 255, 0.1)' }}
                  >
                    తెలుగు
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
