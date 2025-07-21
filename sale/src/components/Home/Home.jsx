import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

// Import hero background images
import hero1 from '../../assets/tractor_hero_5.jpg';
import hero2 from '../../assets/tractor_hero_2.jpg';
import hero3 from '../../assets/tractor_hero_1.png';
import hero4 from '../../assets/tractor_hero_4.jpg';
import hero5 from '../../assets/tractor_hero_6.png';

// Import product images
import premiumTractor1 from '../../assets/premium-tractor.png';
import premiumTractor2 from '../../assets/premium-tractor_2.png';
import premiumTractor3 from '../../assets/premium-tractor_3.jpg';

const slideVariants = {
  enter: {
    x: '100%',
  },
  center: {
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 1.2
    }
  }
};

const textVariants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { getText, currentLanguage } = useLanguage();

  // Get translated content
  const heroContent = {
    title: getText('home', 'title'),
    subtitle: getText('home', 'subtitle'),
    cta: getText('home', 'cta')
  };

  const featuredContent = {
    title: getText('home', 'featured.title'),
    subtitle: getText('home', 'featured.subtitle'),
    description: getText('home', 'featured.description'),
    learnMore: getText('home', 'featured.learnMore')
  };

  const slides = [hero1, hero2, hero3, hero4, hero5];

  // Get translated products
  const products = getText('home', 'products').map((product, index) => ({
    ...product,
    id: index + 1,
    image: [premiumTractor1, premiumTractor2, premiumTractor3][index]
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <motion.div 
      className="home" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      key={currentLanguage}
    >
      <section className="hero">
        {slides.map((image, index) => (
          <motion.div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            variants={slideVariants}
            initial="enter"
            animate={index === currentSlide ? "center" : "exit"}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        ))}

        <motion.div
          className="hero-content"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1>{heroContent.title}</motion.h1>
          <motion.p>{heroContent.subtitle}</motion.p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {heroContent.cta}
          </motion.button>
        </motion.div>

        <div className="hero-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`control-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="featured-products">
        <motion.div 
          className="featured-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">{featuredContent.subtitle}</span>
            <h2>{featuredContent.title}</h2>
            <p>{featuredContent.description}</p>
          </motion.div>

          <div className="products-grid">
            <AnimatePresence>
              {products.map((product, index) => (
                <motion.div 
                  key={`${product.id}-${currentLanguage}`}
                  className="product-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="product-image-wrapper">
                    <motion.img 
                      src={product.image} 
                      alt={product.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="power-badge">{product.power}</div>
                  </div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <ul className="features-list">
                      {product.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + (i * 0.1) }}
                        >
                          <span className="feature-dot"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button 
                      className="product-cta"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {featuredContent.learnMore}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
