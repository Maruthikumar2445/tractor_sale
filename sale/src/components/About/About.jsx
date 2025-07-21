import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, faUsers, faGlobe, faTools,
  faCheckCircle, faStar, faHandshake,
  faCertificate, faTractor, faSpinner,
  faHeadset, faCog, faTag
} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import tractorImage from '../../assets/premium-tractor.png';
import { useLanguage } from '../../context/LanguageContext';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './About.css';

const About = () => {
  const { getText, currentLanguage } = useLanguage();
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stats = [
    { 
      number: getText('about', 'stats.experience'),
      label: getText('about', 'stats.experienceLabel'),
      icon: faAward,
      color: '#FFB800',
      bgColor: '#FFF8E5'
    },
    { 
      number: getText('about', 'stats.customers'),
      label: getText('about', 'stats.customersLabel'),
      icon: faUsers,
      color: '#00C673',
      bgColor: '#E6FFF4'
    },
    { 
      number: getText('about', 'stats.products'), 
      label: getText('about', 'stats.productsLabel'),
      icon: faTractor,
      color: '#0066FF',
      bgColor: '#E5F0FF'
    },
    { 
      number: getText('about', 'stats.support'), 
      label: getText('about', 'stats.supportLabel'),
      icon: faHandshake,
      color: '#FF3D57',
      bgColor: '#FFE5E9'
    }
  ];

  const highlights = [
    {
      icon: faCheckCircle,
      text: getText('about', 'highlights.quality'),
      color: '#00C673',
      gradient: 'linear-gradient(135deg, #00C673 0%, #19E396 100%)'
    },
    {
      icon: faHeadset,
      text: getText('about', 'highlights.support'),
      color: '#0066FF',
      gradient: 'linear-gradient(135deg, #0066FF 0%, #5B9FFF 100%)'
    },
    {
      icon: faCog,
      text: getText('about', 'highlights.genuine'),
      color: '#FFB800',
      gradient: 'linear-gradient(135deg, #FFB800 0%, #FFC933 100%)'
    },
    {
      icon: faTag,
      text: getText('about', 'highlights.pricing'),
      color: '#FF3D57',
      gradient: 'linear-gradient(135deg, #FF3D57 0%, #FF7182 100%)'
    }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.section 
        key={currentLanguage}
        id="about" 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="about-container">
          <motion.div 
            className="about-header"
            variants={itemVariants}
          >
            <motion.span 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {getText('about', 'subtitle')}
            </motion.span>
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              {getText('about', 'title')}
            </motion.h2>
          </motion.div>

          <div className="about-content">
            <motion.div 
              className="about-image-container"
              variants={itemVariants}
            >
              <div className="image-wrapper">
                {!isImageLoaded && (
                  <div className="image-loader">
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </div>
                )}
                <LazyLoadImage
                  src={tractorImage}
                  alt="Premium Tractor"
                  effect="blur"
                  afterLoad={() => setIsImageLoaded(true)}
                />
              </div>
            </motion.div>

            <motion.div 
              className="about-text-content"
              variants={itemVariants}
            >
              <motion.h3 
                className="about-title"
                variants={itemVariants}
              >
                {getText('about', 'descriptionTitle')}
              </motion.h3>
              <motion.p 
                className="about-description"
                variants={itemVariants}
              >
                {getText('about', 'description')}
              </motion.p>
              
              <motion.div 
                className="highlights-container"
                variants={containerVariants}
              >
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="highlight-card"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <motion.div 
                      className="highlight-icon-wrapper"
                      style={{ background: highlight.gradient }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <FontAwesomeIcon icon={highlight.icon} />
                    </motion.div>
                    <motion.span 
                      className="highlight-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {highlight.text}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="stats-container"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="stat-icon"
                  style={{ backgroundColor: stat.bgColor, color: stat.color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={stat.icon} />
                </motion.div>
                <motion.h4 
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h4>
                <motion.p className="stat-label">
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default About;