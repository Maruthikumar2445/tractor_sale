import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faQuoteRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './Testimonials.css';

// Import images
import rajeshImg from '../../assets/rajesh.jpg';
import amitImg from '../../assets/amit.jpg';
import sureshImg from '../../assets/suresh.jpg';
import prakashImg from '../../assets/prakash.jpg';
import manojImg from '../../assets/manoj.jpg';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const { getText } = useLanguage();

  // Combine images with testimonial data from language context
  const testimonialImages = [rajeshImg, amitImg, sureshImg, prakashImg, manojImg];
  const testimonials = getText('testimonials', 'reviews').map((testimonial, index) => ({
    ...testimonial,
    image: testimonialImages[index]
  }));

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="testimonials">
      <Container>
        <motion.div 
          className="testimonials-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">
            {getText('testimonials', 'subtitle')}
          </span>
          <h2 className="section-title">
            {getText('testimonials', 'title')}
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <Row className="g-4 mt-4">
          <AnimatePresence>
            {displayedTestimonials.map((testimonial, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="testimonial-card"
                >
                  <div className="testimonial-img-wrapper">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-img" 
                    />
                    <div className="quote-icon">
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                  </div>
                  
                  <div className="testimonial-content">
                    <div className="testimonial-header">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <small className="text-primary">{testimonial.location}</small>
                    </div>

                    <div className="testimonial-text">
                      {expandedCard === index ? testimonial.fullQuote : testimonial.quote}
                    </div>

                    <div className="testimonial-footer mt-auto">
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FontAwesomeIcon 
                            key={i}
                            icon={faStar}
                            className="star-icon"
                          />
                        ))}
                      </div>
                      
                      <button 
                        className="read-more-btn"
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      >
                        {expandedCard === index ? 
                          getText('testimonials', 'readLess') : 
                          getText('testimonials', 'readMore')
                        }
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className={`ms-2 ${expandedCard === index ? 'rotated' : ''}`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {testimonials.length > 3 && (
          <motion.div 
            className="text-center mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="view-more-btn"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ 
                y: -5,
                boxShadow: "0 8px 25px rgba(26, 188, 156, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll ? 
                getText('testimonials', 'viewLess') : 
                getText('testimonials', 'viewMore')
              }
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className={`ms-2 ${showAll ? 'rotated' : ''}`}
              />
            </motion.button>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
