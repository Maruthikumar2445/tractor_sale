import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelect.css';

const LanguageSelect = () => {
  const { setLanguage } = useLanguage();

  return (
    <motion.div 
      className="language-select"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="language-container">
        <h2>Select Your Language</h2>
        <p>భాషను ఎంచుకోండి</p>
        <div className="language-buttons">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage('en')}
          >
            English
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage('te')}
          >
            తెలుగు
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageSelect;