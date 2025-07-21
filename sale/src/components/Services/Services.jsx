import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTractor, 
  faTools, 
  faShieldAlt,
  faArrowRight,
  faWrench,
  faHeadset,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { getText } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: faTractor,
      title: getText('services', 'tractor.title'),
      description: getText('services', 'tractor.description'),
      features: [
        getText('services', 'tractor.features.tech'),
        getText('services', 'tractor.features.smart')
      ],
      gradient: 'var(--service-gradient-1)'
    },
    {
      icon: faTools,
      title: getText('services', 'repair.title'),
      description: getText('services', 'repair.description'),
      features: [
        getText('services', 'repair.features.expert'),
        getText('services', 'repair.features.support')
      ],
      gradient: 'var(--service-gradient-2)'
    },
    {
      icon: faShieldAlt,
      title: getText('services', 'warranty.title'),
      description: getText('services', 'warranty.description'),
      features: [
        getText('services', 'warranty.features.coverage'),
        getText('services', 'warranty.features.peace')
      ],
      gradient: 'var(--service-gradient-3)'
    },
    {
      icon: faWrench,
      title: getText('services', 'maintenance.title'),
      description: getText('services', 'maintenance.description'),
      features: [
        getText('services', 'maintenance.features.scheduled'),
        getText('services', 'maintenance.features.quality')
      ],
      gradient: 'var(--service-gradient-4)'
    },
    {
      icon: faHeadset,
      title: getText('services', 'support.title'),
      description: getText('services', 'support.description'),
      features: [
        getText('services', 'support.features.hours'),
        getText('services', 'support.features.quick')
      ],
      gradient: 'var(--service-gradient-5)'
    },
    {
      icon: faCreditCard,
      title: getText('services', 'financing.title'),
      description: getText('services', 'financing.description'),
      features: [
        getText('services', 'financing.features.plans'),
        getText('services', 'financing.features.rates')
      ],
      gradient: 'var(--service-gradient-6)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <motion.section 
      className="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="services-container"
        variants={containerVariants}
      >
        <motion.div 
          className="services-header"
          variants={headerVariants}
        >
          <span className="section-subtitle">{getText('services', 'subtitle')}</span>
          <h2>{getText('services', 'title')}</h2>
          <p>{getText('services', 'description')}</p>
        </motion.div>

        <div className="services-grid">
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="service-icon-wrapper"
                  style={{ background: service.gradient }}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon icon={service.icon} className="service-icon" />
                </motion.div>

                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="feature-icon" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  className="learn-more-btn"
                  style={{ background: service.gradient }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {getText('services', 'learnMore')}
                  <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="services-more">
          <button 
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More services'}
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
