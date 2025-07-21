import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { getText } = useLanguage();

  const scrollToSection = (sectionId) => {
    // Remove the '#' from the sectionId to match with HTML IDs
    const targetId = sectionId.replace('#', '');
    const section = document.getElementById(targetId);
    
    if (section) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="footer-info">
              <h4>{getText('footer', 'quickLinks.title')}</h4>
              <ul className="footer-links">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                  >
                    {getText('nav', 'home')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                  >
                    {getText('nav', 'about')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    {getText('nav', 'services')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('testimonials');
                    }}
                  >
                    {getText('nav', 'testimonials')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#blog" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('blog');
                    }}
                  >
                    {getText('nav', 'blog')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    {getText('nav', 'contact')}
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="footer-services">
              <h4>{getText('footer', 'services.title')}</h4>
              <ul className="footer-links">
                <li><a href="#sales">{getText('footer', 'services.sales')}</a></li>
                <li><a href="#repair">{getText('footer', 'services.repair')}</a></li>
                <li><a href="#parts">{getText('footer', 'services.parts')}</a></li>
                <li><a href="#support">{getText('footer', 'services.support')}</a></li>
                <li><a href="#warranty">{getText('footer', 'services.warranty')}</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="footer-contact">
              <h4>{getText('footer', 'contact.title')}</h4>
              <p>{getText('footer', 'contact.address')}</p>
              <p>
                <strong>Phone:</strong> {getText('footer', 'contact.phone')}<br />
                <strong>Email:</strong> {getText('footer', 'contact.email')}<br />
                <strong>Hours:</strong> {getText('footer', 'contact.hours')}
              </p>
            </div>
          </Col>
        </Row>

        <div className="footer-social">
          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </motion.a>
          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </motion.a>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            {getText('footer', 'bottom.copyright')}
          </div>
          <div className="footer-bottom-links">
            <a href="#terms">{getText('footer', 'bottom.terms')}</a>
            <a href="#privacy">{getText('footer', 'bottom.privacy')}</a>
            <a href="#sitemap">{getText('footer', 'bottom.sitemap')}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
