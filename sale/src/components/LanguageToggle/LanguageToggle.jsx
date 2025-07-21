import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === 'english' ? 'తెలుగు' : 'English'}
    </motion.button>
  );
};

export default LanguageToggle;