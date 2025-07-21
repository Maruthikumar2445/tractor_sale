import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';
import { useLanguage } from '../../context/LanguageContext';

// Import your existing images
import sustainable from '../../assets/tractor_hero_3.png';
import automation from '../../assets/tractor_hero_4.jpg';
import seasonal from '../../assets/tractor_hero_5.jpg';
import costEffective from '../../assets/tractor_hero_6.png';
import modernFarming from '../../assets/tractor_hero_1.png';
import maintenance from '../../assets/tractor_hero_2.jpg';

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const { getText } = useLanguage();

  const blogImages = [automation, seasonal, sustainable, modernFarming, costEffective, maintenance];
  const posts = getText('blog', 'posts').map((post, index) => ({
    ...post,
    image: blogImages[index]
  }));

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section className="blog-section">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">{getText('blog', 'subtitle')}</span>
          <h2 className="section-title">{getText('blog', 'title')}</h2>
          <div className="title-underline mx-auto"></div>
        </motion.div>

        <Row className="g-4">
          <AnimatePresence>
            {visiblePosts.map((post, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="blog-card h-100">
                    <div className="blog-image-wrapper">
                      <Card.Img variant="top" src={post.image} className="blog-image" />
                      <motion.div 
                        className="blog-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.span className="category-badge">
                          <FontAwesomeIcon icon={faTag} className="me-2" />
                          {post.category}
                        </motion.span>
                      </motion.div>
                    </div>

                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.excerpt}</Card.Text>
                      <motion.button 
                        className="read-more-btn"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {getText('blog', 'readMore')}
                        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                      </motion.button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {posts.length > 3 && (
          <motion.div 
            className="text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="show-all-btn"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? getText('blog', 'viewLess') : getText('blog', 'viewMore')}
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

export default Blog;
