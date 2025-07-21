import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faArrowRight,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { getText, currentLanguage } = useLanguage();
  const [formStatus, setFormStatus] = useState({ show: false, type: '', message: '' });

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: getText('contact', 'address.title'),
      text: getText('contact', 'address.text'),
      subText: getText('contact', 'hours.text')
    },
    {
      icon: faPhone,
      title: getText('contact', 'phone.title'),
      text: getText('contact', 'phone.number'),
      subText: getText('contact', 'phone.subText')
    },
    {
      icon: faEnvelope,
      title: getText('contact', 'email.title'),
      text: getText('contact', 'email.address'),
      subText: getText('contact', 'email.subText')
    }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: faFacebook, url: 'https://www.facebook.com/profile.php?id=61573447725702' },
    { platform: 'Twitter', icon: faTwitter, url: '#' },
    { platform: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/frugal_trail/' },
    { platform: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/company/frugal-trail/?viewAsMember=true' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      show: true,
      type: 'success',
      message: getText('contact', 'form.successMessage')
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="contact" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Container>
        <motion.div className="text-center mb-5" variants={itemVariants}>
          <span className="section-subtitle">{getText('contact', 'subtitle')}</span>
          <h2 className="section-title">{getText('contact', 'title')}</h2>
          <div className="title-underline mx-auto"></div>
        </motion.div>

        <Row className="g-4">
          <Col lg={4}>
            <motion.div className="contact-info" variants={containerVariants}>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="info-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="info-card-icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div className="info-card-content">
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
                    <small className="text-muted">{info.subText}</small>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="social-links"
              variants={itemVariants}
            >
              <h4>{getText('contact', 'social.title')}</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.url} 
                    className={`social-icon ${social.platform.toLowerCase()}`}
                    data-platform={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={7} className="offset-lg-1">
            <motion.div 
              className="contact-form"
              variants={itemVariants}
            >
              <AnimatePresence>
                {formStatus.show && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Alert 
                      variant={formStatus.type}
                      onClose={() => setFormStatus({...formStatus, show: false})}
                      dismissible
                    >
                      {formStatus.message}
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="text"
                        placeholder={getText('contact', 'form.namePlaceholder')}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="email"
                        placeholder={getText('contact', 'form.emailPlaceholder')}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="tel"
                    placeholder={getText('contact', 'form.phonePlaceholder')}
                    required
                    pattern="[0-9]{10}"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder={getText('contact', 'form.messagePlaceholder')}
                    required
                  />
                </Form.Group>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getText('contact', 'form.submitButton')}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </motion.button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Contact;
