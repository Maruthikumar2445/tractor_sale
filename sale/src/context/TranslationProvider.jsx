import React, { createContext, useState, useContext } from 'react';

const TranslationContext = createContext();

const translations = {
  en: {
    about: {
      title: "About Us",
      subtitle: "Quality Service with 30+ Years Experience",
      descriptionTitle: "Your Trusted Agricultural Partner",
      description: "We are committed to providing the best agricultural solutions to farmers across India. Our expertise and dedication have made us a trusted name in the industry.",
      stats: {
        experience: "30+",
        experienceLabel: "Years Experience",
        customers: "10K+",
        customersLabel: "Happy Customers",
        products: "500+",
        productsLabel: "Premium Products",
        support: "24/7",
        supportLabel: "Customer Support"
      },
      highlights: {
        certification: "ISO 9001:2015 Certified Company",
        award: "Award Winning Service Provider",
        network: "Pan India Dealer Network",
        support: "24/7 Technical Support"
      }
    }
  },
  te: {
    about: {
      title: "మా గురించి",
      subtitle: "30+ సంవత్సరాల అనుభవంతో నాణ్యమైన సేవ",
      descriptionTitle: "మీ విశ్వసనీయ వ్యవసాయ భాగస్వామి",
      description: "భారతదేశం అంతటా రైతులకు ఉత్తమమైన వ్యవసాయ పరిష్కారాలను అందించడానికి మేము కట్టుబడి ఉన్నాము. మా నైపుణ్యం మరియు అంకితభావం పరిశ్రమలో మాకు విశ్వసనీయమైన పేరును తెచ్చిపెట్టాయి.",
      stats: {
        experience: "30+",
        experienceLabel: "సంవత్సరాల అనుభవం",
        customers: "10K+",
        customersLabel: "సంతృప్తి చెందిన వినియోగదారులు",
        products: "500+",
        productsLabel: "ప్రీమియం ఉత్పత్తులు",
        support: "24/7",
        supportLabel: "కస్టమర్ సపోర్ట్"
      },
      highlights: {
        certification: "ISO 9001:2015 సర్టిఫైడ్ కంపెనీ",
        award: "అవార్డు గెలుచుకున్న సేవా ప్రదాత",
        network: "పాన్ ఇండియా డీలర్ నెట్‌వర్క్",
        support: "24/7 సాంకేతిక మద్దతు"
      }
    }
  }
};

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const getText = (section, key) => {
    return translations[currentLanguage]?.[section]?.[key] || '';
  };

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ currentLanguage, setLanguage, getText }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);