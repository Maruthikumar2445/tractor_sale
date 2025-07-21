import React, { createContext, useState, useContext, memo } from "react";

// Create and export the context
const LanguageContext = createContext(undefined);

// Define translations object
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact"
    },
    home: {
      title: "Your Trusted Partner in Modern Agriculture",
      subtitle: "Quality Agricultural Equipment and Services",
      cta: "Explore Our Products",
      featured: {
        title: "Our Premium Tractors",
        subtitle: "Premium Selection",
        description: "Discover our range of advanced farming solutions designed for optimal performance",
        learnMore: "Learn More"
      },
      products: [
        {
          name: "Premium Series",
          power: "40-50 HP",
          features: [
            "Advanced Hydraulics",
            "Digital Dashboard",
            "AC Cabin"
          ]
        },
        {
          name: "Economy Series",
          power: "30-40 HP",
          features: [
            "Fuel Efficient",
            "Low Maintenance",
            "Reliable Performance"
          ]
        },
        {
          name: "Heavy Duty Series",
          power: "50-60 HP",
          features: [
            "Maximum Power",
            "Heavy Lifting",
            "All-Terrain"
          ]
        }
      ],
      features: {
        quality: {
          title: "Premium Quality",
          description: "Top-grade agricultural equipment"
        },
        support: {
          title: "24/7 Support",
          description: "Round-the-clock technical assistance"
        },
        parts: {
          title: "Genuine Parts",
          description: "Original spare parts for all brands"
        },
        service: {
          title: "Expert Service",
          description: "Professional maintenance and repairs"
        }
      }
    },
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
        certification: "ISO 9001:2015 Certified",
        award: "National Agriculture Excellence Award",
        network: "Pan-India Service Network",
        support: "24/7 Expert Support",
        quality: "Quality Service Guaranteed",
        genuine: "Genuine Spare Parts",
        pricing: "Competitive Pricing"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "What We Offer",
      description: "Discover our comprehensive range of agricultural solutions designed to enhance your farming experience",
      learnMore: "Learn More",
      showMore: "View All Services",
      showLess: "Show Less",
      tractor: {
        title: "Tractor Sales",
        description: "Premium tractors with cutting-edge technology for modern farming needs",
        features: {
          tech: "Latest Technology Integration",
          efficiency: "High Fuel Efficiency",
          safety: "Advanced Safety Features",
          smart: "Smart Connectivity Options"
        }
      },
      repair: {
        title: "Service & Repair",
        description: "Professional maintenance and repair services by certified technicians",
        features: {
          expert: "Expert Technical Team",
          genuine: "Genuine Spare Parts",
          warranty: "Extended Warranty Options",
          support: "24/7 Emergency Support"
        }
      },
      eco: {
        title: "Eco Solutions",
        description: "Environmentally conscious farming solutions for sustainable agriculture",
        features: {
          sustainable: "Sustainable Practices",
          efficient: "Energy Efficient Models",
          clean: "Clean Technology",
          future: "Future-Ready Solutions"
        }
      },
      warranty: {
        title: "Warranty Service",
        description: "Comprehensive warranty coverage for worry-free ownership",
        features: {
          coverage: "Extended Coverage Plans",
          support: "Priority Support",
          parts: "Original Parts Guarantee",
          peace: "Peace of Mind Assurance"
        }
      },
      maintenance: {
        title: "Preventive Maintenance",
        description: "Keep your equipment running at peak performance with our comprehensive maintenance programs",
        features: {
          scheduled: "Scheduled Maintenance Plans",
          diagnostic: "Advanced Diagnostic Services",
          repair: "Preventive Repairs",
          quality: "Quality Assurance Checks"
        }
      },
      support: {
        title: "24/7 Technical Support",
        description: "Round-the-clock expert assistance for all your agricultural equipment needs",
        features: {
          hours: "24/7 Availability",
          expert: "Expert Technical Team",
          quick: "Quick Response Time",
          remote: "Remote Diagnostics Support"
        }
      },
      financing: {
        title: "Equipment Financing",
        description: "Flexible financing solutions to help you acquire the equipment you need",
        features: {
          plans: "Customized Payment Plans",
          rates: "Competitive Interest Rates",
          approval: "Quick Approval Process",
          terms: "Flexible Terms & Conditions"
        }
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      phone: {
        title: "Let's Talk",
        number: "+91 98404 54758",
        subText: "We're available 24/7 for urgent inquiries"
      },
      email: {
        title: "Email Us",
        address: "hello@frugaltrail.com",
        subText: "We typically respond within 24 hours"
      },
      address: {
        title: "Visit Our Office",
        text: "46&T47, Booma Iam Money Garden,Vudupati, Kadachanendal,Madurai - 625104"
      },
      hours: {
        text: "Open Monday-Friday, 9:00 AM - 6:00 PM"
      },
      social: {
        title: "Connect With Us"
      },
      form: {
        title: "Send us a message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        phonePlaceholder: "Phone Number",
        messagePlaceholder: "Your Message",
        submitButton: "Send Message",
        successMessage: "Thank you for your message! We will get back to you soon."
      }
    },
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "Voice of Our Valued Customers",
      description: "Discover what our customers say about their experience with our tractors and services",
      readMore: "Read More",
      readLess: "Read Less",
      viewMore: "View More Reviews",
      viewLess: "Show Less",
      verifiedBadge: "Verified Purchase",
      reviews: [
        {
          name: "Rajesh Kumar",
          role: "Progressive Farmer",
          location: "Ludhiana, Punjab",
          quote: "The tractor's performance has significantly improved my farm's productivity...",
          fullQuote: "The tractor's performance has significantly improved my farm's productivity. With its advanced features and robust build quality, I've seen a 40% increase in efficiency. The fuel economy and comfort are exceptional.",
          rating: 5,
          model: "Premium Series X-500",
          tags: ["Performance", "Efficiency", "Quality"]
        },
        {
          name: "Amit Patel",
          role: "Agricultural Contractor",
          location: "Ahmedabad, Gujarat",
          quote: "Outstanding service support and reliable machinery that exceeds expectations...",
          fullQuote: "Outstanding service support and reliable machinery that exceeds expectations. The team's commitment to customer satisfaction is evident in every interaction. The tractor's performance in varied conditions is remarkable.",
          rating: 5,
          model: "Professional Series P-600",
          tags: ["Service", "Reliability", "Support"]
        },
        {
          name: "Suresh Singh",
          role: "Estate Owner",
          location: "Rohtak, Haryana",
          quote: "Best-in-class features and exceptional after-sales support...",
          fullQuote: "Best-in-class features and exceptional after-sales support make this tractor stand out. The advanced technology integration has revolutionized our farming operations. Highly recommended for serious agriculturists.",
          rating: 4,
          model: "Advanced Series A-400",
          tags: ["Technology", "Support", "Innovation"]
        },
        {
          name: "Venkat Reddy",
          role: "Commercial Farmer",
          location: "Warangal, Telangana",
          quote: "Excellent fuel efficiency and superior performance in tough conditions...",
          fullQuote: "Excellent fuel efficiency and superior performance in tough conditions. The tractor handles various terrains with ease, and the maintenance cost is surprisingly low. A perfect balance of power and economy.",
          rating: 5,
          model: "Economy Series E-300",
          tags: ["Efficiency", "Performance", "Economy"]
        },
        {
          name: "Mohan Kumar",
          role: "Organic Farmer",
          location: "Coimbatore, Tamil Nadu",
          quote: "Perfect for modern farming needs with eco-friendly features...",
          fullQuote: "Perfect for modern farming needs with eco-friendly features. The advanced technology helps in precision farming, and the comfort during long working hours is unmatched. A great investment for progressive farmers.",
          rating: 5,
          model: "Smart Series S-800",
          tags: ["Technology", "Comfort", "Modern"]
        },
        {
          name: "Harpreet Singh",
          role: "Dairy Farmer",
          location: "Moga, Punjab",
          quote: "Versatile performance and excellent resale value...",
          fullQuote: "Versatile performance and excellent resale value make this tractor a smart choice. The power output is consistent, and the brand's reputation for quality is well-deserved. Ideal for diverse agricultural operations.",
          rating: 5,
          model: "Utility Series U-250",
          tags: ["Versatility", "Value", "Quality"]
        }
      ]
    },
    blog: {
      title: "Latest Updates",
      subtitle: "News & Insights",
      description: "Stay informed about the latest developments in agricultural technology and industry trends",
      readMore: "Read More",
      viewMore: "View All Posts",
      categories: {
        all: "All Posts",
        technology: "Technology",
        farming: "Farming Tips",
        maintenance: "Maintenance",
        industry: "Industry News"
      },
      posts: [
        {
          title: "Advanced Farming Technologies for 2025",
          category: "Technology",
          excerpt: "Discover the latest technological innovations transforming modern agriculture with AI-powered tractors and precision farming techniques...",
          date: "May 15, 2025",
          readTime: "5 min read",
          author: "Dr. Suresh Kumar"
        },
        {
          title: "Maximizing Crop Yield with Smart Tractors",
          category: "Farming Tips",
          excerpt: "Learn how smart tractor features can help optimize your farming operations and increase productivity in various conditions...",
          date: "May 10, 2025",
          readTime: "4 min read",
          author: "Rajesh Patel"
        },
        {
          title: "Essential Tractor Maintenance Tips",
          category: "Maintenance",
          excerpt: "Keep your agricultural equipment running efficiently with these comprehensive maintenance guidelines and expert advice...",
          date: "May 5, 2025",
          readTime: "6 min read",
          author: "Amit Singh"
        },
        {
          title: "The Future of Sustainable Farming",
          category: "Industry News",
          excerpt: "Explore how sustainable farming practices and eco-friendly tractors are shaping the future of agriculture...",
          date: "May 1, 2025",
          readTime: "5 min read",
          author: "Dr. Priya Sharma"
        },
        {
          title: "Cost-Effective Farming Solutions",
          category: "Farming Tips",
          excerpt: "Discover practical ways to reduce operational costs while maintaining high productivity in your agricultural operations...",
          date: "April 25, 2025",
          readTime: "4 min read",
          author: "Vikram Reddy"
        },
        {
          title: "Seasonal Maintenance Schedule",
          category: "Maintenance",
          excerpt: "Follow our comprehensive seasonal maintenance guide to ensure your tractor performs optimally throughout the year...",
          date: "April 20, 2025",
          readTime: "7 min read",
          author: "Mohammad Khan"
        }
      ],
      viewLess: "Show Less"
    },
    footer: {
      quickLinks: {
        title: "Quick Links",
        home: "Home",
        about: "About Us",
        services: "Our Services",
        products: "Products",
        contact: "Contact Us"
      },
      services: {
        title: "Services",
        sales: "Tractor Sales",
        repair: "Repair & Maintenance",
        parts: "Spare Parts",
        support: "24/7 Support",
        warranty: "Warranty Service"
      },
      contact: {
        title: "Contact Info",
        address: "46&T47, Booma Iam Money Garden,\nVudupati, Kadachanendal,\nMadurai - 625104",
        phone: "+91 98404 54758",
        email: "hello@frugaltrail.com",
        hours: "Mon - Fri: 9:00 AM - 6:00 PM"
      },
      social: {
        title: "Connect With Us",
        facebook: "Follow on Facebook",
        twitter: "Follow on Twitter",
        instagram: "Follow on Instagram",
        linkedin: "Connect on LinkedIn"
      },
      newsletter: {
        title: "Newsletter",
        subtitle: "Subscribe to our newsletter for updates and exclusive offers",
        placeholder: "Enter your email",
        button: "Subscribe",
        success: "Thank you for subscribing!",
        error: "Please enter a valid email"
      },
      bottom: {
        copyright: "© 2025 Frugal Trail. All rights reserved.",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        sitemap: "Sitemap"
      }
    }
  },
  te: {
    nav: {
      home: "హోమ్",
      about: "మా గురించి",
      services: "సేవలు",
      testimonials: "అభిప్రాయాలు",
      blog: "బ్లాగ్",
      contact: "సంప్రదించండి"
    },
    home: {
      title: "ఆధునిక వ్యవసాయంలో మీ విశ్వసనీయ భాగస్వామి",
      subtitle: "నాణ్యమైన వ్యవసాయ పరికరాలు మరియు సేవలు",
      cta: "ఉత్పత్తులను అన్వేషించండి",
      featured: {
        title: "మా ప్రీమియం ట్రాక్టర్లు",
        subtitle: "ప్రీమియం సెలెక్షన్",
        description: "అత్యుత్తమ పనితీరు కోసం రూపొందించబడిన మా అధునాతన వ్యవసాయ పరిష్కారాలను కనుగొనండి",
        learnMore: "మరింత తెలుసుకోండి"
      },
      products: [
        {
          name: "ప్రీమియం సిరీస్",
          power: "40-50 HP",
          features: [
            "అధునాతన హైడ్రాలిక్స్",
            "డిజిటల్ డాష్‌బోర్డ్",
            "ఏసీ కేబిన్"
          ]
        },
        {
          name: "ఎకానమీ సిరీస్",
          power: "30-40 HP",
          features: [
            "ఇంధన సామర్థ్యం",
            "తక్కువ నిర్వహణ",
            "నమ్మదగిన పనితీరు"
          ]
        },
        {
          name: "హెవీ డ్యూటీ సిరీస్",
          power: "50-60 HP",
          features: [
            "గరిష్ట శక్తి",
            "భారీ లిఫ్టింగ్",
            "అన్ని టెర్రైన్‌లు"
          ]
        }
      ],
      features: {
        quality: {
          title: "ప్రీమియం నాణ్యత",
          description: "అత్యుత్తమ వ్యవసాయ పరికరాలు"
        },
        support: {
          title: "24/7 మద్దతు",
          description: "నిరంతర సాంకేతిక సహాయం"
        },
        parts: {
          title: "అసలైన భాగాలు",
          description: "అన్ని బ్రాండ్లకు అసలు స్పేర్ పార్ట్స్"
        },
        service: {
          title: "నిపుణ సేవ",
          description: "వృత్తిపరమైన నిర్వహణ మరియు మరమ్మతులు"
        }
      }
    },
    about: {
      title: "మా గురించి",
      subtitle: "30+ సంవత్సరాల అనుభవంతో నాణ్యమైన సేవ",
      descriptionTitle: "మీ విశ్వసనీయ వ్యవసాయ భాగస్వామి",
      description: "భారతదేశం అంతటా రైతులకు ఉత్తమమైన వ్యవసాయ పరిష్కారాలను అందించడానికి మేము కట్టుబడి ఉన్నాము.",
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
        certification: "ISO 9001:2015 ప్రమాణీకరణ",
        award: "జాతీయ వ్యవసాయ ఉత్కృష్టత అవార్డు",
        network: "పాన్-ఇండియా సేవా నెట్‌వర్క్",
        quality: "నాణ్యమైన సేవ హామీ",
        support: "24/7 వినియోగదారుల మద్దతు",
        genuine: "అసలైన స్పేర్ పార్ట్స్",
        pricing: "పోటీ ధరలు"
      }
    },
    services: {
      title: "మా సేవలు",
      subtitle: "మేము అందించేవి",
      description: "మీ వ్యవసాయ అనుభవాన్ని మెరుగుపరచడానికి రూపొందించబడిన మా సమగ్ర వ్యవసాయ పరిష్కారాలను కనుగొనండి",
      learnMore: "మరింత తెలుసుకోండి",
      showMore: "అన్ని సేవలను చూడండి",
      showLess: "తక్కువ చూపించు",
      tractor: {
        title: "ట్రాక్టర్ అమ్మకాలు",
        description: "ఆధునిక వ్యవసాయ అవసరాల కోసం అత్యాధునిక సాంకేతికతతో కూడిన ప్రీమియం ట్రాక్టర్లు",
        features: {
          tech: "తాజా సాంకేతిక పరిజ్ఞానం",
          efficiency: "అధిక ఇంధన సామర్థ్యం",
          safety: "అధునాతన భద్రతా ఫీచర్లు",
          smart: "స్మార్ట్ కనెక్టివిటీ ఎంపికలు"
        }
      },
      repair: {
        title: "సర్వీస్ & రిపేర్",
        description: "సర్టిఫైడ్ టెక్నీషియన్ల ద్వారా వృత్తిపరమైన నిర్వహణ మరియు మరమ్మతు సేవలు",
        features: {
          expert: "నిపుణ సాంకేతిక బృందం",
          genuine: "అసలైన స్పేర్ పార్ట్స్",
          warranty: "విస్తరించిన వారంటీ ఎంపికలు",
          support: "24/7 అత్యవసర మద్దతు"
        }
      },
      eco: {
        title: "పర్యావరణ పరిష్కారాలు",
        description: "సుస్థిర వ్యవసాయం కోసం పర్యావరణ అనుకూల వ్యవసాయ పరిష్కారాలు",
        features: {
          sustainable: "సుస్థిర పద్ధతులు",
          efficient: "శక్తి సామర్థ్య మోడల్స్",
          clean: "క్లీన్ టెక్నాలజీ",
          future: "భవిష్యత్తుకు సిద్ధంగా ఉన్న పరిష్కారాలు"
        }
      },
      warranty: {
        title: "వారంటీ సేవ",
        description: "ఆందోళన లేని యాజమాన్యం కోసం సమగ్ర వారంటీ కవరేజ్",
        features: {
          coverage: "విస్తరించిన కవరేజ్ ప్లాన్లు",
          support: "ప్రాధాన్య మద్దతు",
          parts: "అసలు పార్ట్స్ గ్యారంటీ",
          peace: "మనశ్శాంతి హామీ"
        }
      },
      maintenance: {
        title: "నివారణ నిర్వహణ",
        description: "మా సమగ్ర నిర్వహణ కార్యక్రమాలతో మీ పరికరాలను ఉత్తమ పనితీరుతో నడపండి",
        features: {
          scheduled: "షెడ్యూల్డ్ మెయింటెనెన్స్ ప్రణాళికలు",
          diagnostic: "అధునాతన డయాగ్నోస్టిక్ సేవలు",
          repair: "నివారణ మరమ్మతులు",
          quality: "నాణ్యత హామీ తనిఖీలు"
        }
      },
      support: {
        title: "24/7 సాంకేతిక మద్దతు",
        description: "మీ వ్యవసాయ పరికరాల అవసరాలన్నింటికీ రౌండ్-ది-క్లాక్ నిపుణ సహాయం",
        features: {
          hours: "24/7 అందుబాటు",
          expert: "నిపుణ సాంకేతిక బృందం",
          quick: "త్వరిత స్పందన సమయం",
          remote: "రిమోట్ డయాగ్నోస్టిక్స్ మద్దతు"
        }
      },
      financing: {
        title: "పరికరాల ఆర్థిక సహాయం",
        description: "మీకు అవసరమైన పరికరాలను పొందడానికి సౌకర్యవంతమైన ఆర్థిక పరిష్కారాలు",
        features: {
          plans: "అనుకూల చెల్లింపు ప్రణాళికలు",
          rates: "పోటీ వడ్డీ రేట్లు",
          approval: "త్వరిత ఆమోదం ప్రక్రియ",
          terms: "సౌకర్యవంతమైన నిబంధనలు & షరతులు"
        }
      }
    },
    contact: {
      title: "సంప్రదించండి",
      subtitle: "మా బృందంతో సంప్రదించండి",
      phone: {
        title: "మాట్లాడదాం",
        number: "+91 98404 54758",
        subText: "అత్యవసర విచారణలకు 24/7 అందుబాటులో ఉన్నాము"
      },
      email: {
        title: "ఇమెయిల్ చేయండి",
        address: "hello@frugaltrail.com",
        subText: "సాధారణంగా 24 గంటల్లో స్పందిస్తాము"
      },
      address: {
        title: "మా కార్యాలయాన్ని సందర్శించండి",
        text: "46&T47, బూమా ఐయామ్ మనీ గార్డెన్, వుడుపట్టి, కడచనేందల్, మదురై - 625104"
      },
      hours: {
        text: "సోమవారం-శుక్రవారం, ఉ. 9:00 నుండి సా. 6:00 వరకు"
      },
      social: {
        title: "మాతో కనెక్ట్ అవ్వండి"
      },
      form: {
        title: "మాకు సందేశం పంపండి",
        namePlaceholder: "మీ పేరు",
        emailPlaceholder: "మీ ఇమెయిల్",
        phonePlaceholder: "ఫోన్ నంబర్",
        messagePlaceholder: "మీ సందేశం",
        submitButton: "సందేశం పంపండి",
        successMessage: "మీ సందేశానికి ధన్యవాదాలు! త్వరలో మేము మిమ్మల్ని సంప్రదిస్తాము."
      }
    },
    testimonials: {
      title: "వినియోగదారుల అభిప్రాయాలు",
      subtitle: "మా విలువైన వినియోగదారుల స్వరం",
      description: "మా ట్రాక్టర్లు మరియు సేవలతో వారి అనుభవం గురించి మా వినియోగదారులు ఏమి చెప్తున్నారో తెలుసుకోండి",
      readMore: "మరింత చదవండి",
      readLess: "తక్కువ చదవండి",
      viewMore: "మరిన్ని అభిప్రాయాలు చూడండి",
      viewLess: "తక్కువ చూపించు",
      verifiedBadge: "ధృవీకరించబడిన కొనుగోలు",
      reviews: [
        {
          name: "రాజేష్ కుమార్",
          role: "ప్రగతిశీల రైతు",
          location: "లుధియానా, పంజాబ్",
          quote: "ట్రాక్టర్ పనితీరు నా పొలం ఉత్పాదకతను గణనీయంగా మెరుగుపరిచింది...",
          fullQuote: "ట్రాక్టర్ పనితీరు నా పొలం ఉత్పాదకతను గణనీయంగా మెరుగుపరిచింది. దీని ఆధునిక ఫీచర్లు మరియు దృఢమైన నిర్మాణ నాణ్యతతో, నేను సామర్థ్యంలో 40% పెరుగుదలను చూశాను. ఇంధన ఆదా మరియు సౌకర్యం అద్భుతంగా ఉన్నాయి.",
          rating: 5,
          model: "ప్రీమియం సిరీస్ X-500",
          tags: ["పనితీరు", "సామర్థ్యం", "నాణ్యత"]
        },
        {
          name: "అమిత్ పటేల్",
          role: "వ్యవసాయ కాంట్రాక్టర్",
          location: "అహ్మదాబాద్, గుజరాత్",
          quote: "అద్భుతమైన సేవా మద్దతు మరియు నమ్మదగిన యంత్రాలు అంచనాలను మించాయి...",
          fullQuote: "అద్భుతమైన సేవా మద్దతు మరియు నమ్మదగిన యంత్రాలు అంచనాలను మించాయి. వినియోగదారుల సంతృప్తి పట్ల బృందం నిబద్ధత ప్రతి సంభాషణలో స్పష్టంగా కనిపిస్తుంది. వివిధ పరిస్థితులలో ట్రాక్టర్ పనితీరు గణనీయంగా ఉంది.",
          rating: 5,
          model: "ప్రొఫెషనల్ సిరీస్ P-600",
          tags: ["సేవ", "విశ్వసనీయత", "మద్దతు"]
        },
        {
          name: "సురేష్ సింగ్",
          role: "ఎస్టేట్ యజమాని",
          location: "రోహ్తక్, హర్యానా",
          quote: "తరగతిలో అత్యుత్తమ ఫీచర్లు మరియు అద్భుతమైన అమ్మకాల తర్వాత మద్దతు...",
          fullQuote: "తరగతిలో అత్యుత్తమ ఫీచర్లు మరియు అద్భుతమైన అమ్మకాల తర్వాత మద్దతు ఈ ట్రాక్టర్‌ను ప్రత్యేకంగా చేస్తుంది. ఆధునిక సాంకేతిక పరిజ్ఞానం మా వ్యవసాయ కార్యకలాపాలను విప్లవాత్మకంగా మార్చింది. తీవ్రమైన వ్యవసాయదారులకు అత్యంత సిఫార్సు చేయబడింది.",
          rating: 4,
          model: "అడ్వాన్స్డ్ సిరీస్ A-400",
          tags: ["సాంకేతికత", "మద్దతు", "ఆవిష్కరణ"]
        },
        {
          name: "వెంకట్ రెడ్డి",
          role: "వాణిజ్య రైతు",
          location: "వరంగల్, తెలంగాణ",
          quote: "అద్భుతమైన ఇంధన సామర్థ్యం మరియు కఠినమైన పరిస్థితులలో అత్యుత్తమ పనితీరు...",
          fullQuote: "అద్భుతమైన ఇంధన సామర్థ్యం మరియు కఠినమైన పరిస్థితులలో అత్యుత్తమ పనితీరు. ట్రాక్టర్ వివిధ భూభాగాలను సులభంగా నిర్వహిస్తుంది, మరియు నిర్వహణ ఖర్చు ఆశ్చర్యకరంగా తక్కువగా ఉంది. శక్తి మరియు ఆర్థిక వ్యవస్థ యొక్క పరిపూర్ణ సమతుల్యత.",
          rating: 5,
          model: "ఎకానమీ సిరీస్ E-300",
          tags: ["సామర్థ్యం", "పనితీరు", "ఆర్థికత"]
        },
        {
          name: "మోహన్ కుమార్",
          role: "సేంద్రీయ రైతు",
          location: "కోయంబత్తూర్, తమిళనాడు",
          quote: "పర్యావరణ అనుకూల ఫీచర్లతో ఆధునిక వ్యవసాయ అవసరాలకు సరిపోతుంది...",
          fullQuote: "పర్యావరణ అనుకూల ఫీచర్లతో ఆధునిక వ్యవసాయ అవసరాలకు సరిపోతుంది. ఆధునిక సాంకేతికత ఖచ్చితమైన వ్యవసాయానికి సహాయపడుతుంది, మరియు దీర్ఘకాలిక పని సమయంలో సౌకర్యం అసమానమైనది. ప్రగతిశీల రైతులకు ఒక గొప్ప పెట్టుబడి.",
          rating: 5,
          model: "స్మార్ట్ సిరీస్ S-800",
          tags: ["సాంకేతికత", "సౌకర్యం", "ఆధునిక"]
        },
        {
          name: "హర్ప్రీత్ సింగ్",
          role: "పాడి రైతు",
          location: "మోగా, పంజాబ్",
          quote: "బహుముఖ ప్రజ్ఞ పనితీరు మరియు అద్భుతమైన మళ్లీ అమ్మకపు విలువ...",
          fullQuote: "బహుముఖ ప్రజ్ఞ పనితీరు మరియు అద్భుతమైన మళ్లీ అమ్మకపు విలువ ఈ ట్రాక్టర్‌ను తెలివైన ఎంపికగా చేస్తుంది. పవర్ అవుట్‌పుట్ నిలకడగా ఉంటుంది, మరియు నాణ్యత కోసం బ్రాండ్ ఖ్యాతి బాగా అర్హమైనది. వైవిధ్యమైన వ్యవసాయ కార్యకలాపాలకు ఆదర్శప్రాయం.",
          rating: 5,
          model: "యుటిలిటీ సిరీస్ U-250",
          tags: ["బహుళోపయోగం", "విలువ", "నాణ్యత"]
        }
      ]
    },
    blog: {
      title: "తాజా విశేషాలు",
      subtitle: "వార్తలు & అంతర్దృష్టులు",
      description: "వ్యవసాయ సాంకేతికత మరియు పరిశ్రమ ధోరణులలో తాజా పరిణామాల గురించి తెలుసుకోండి",
      readMore: "మరింత చదవండి",
      viewMore: "అన్ని పోస్ట్‌లు చూడండి",
      categories: {
        all: "అన్ని పోస్ట్‌లు",
        technology: "సాంకేతికత",
        farming: "వ్యవసాయ చిట్కాలు",
        maintenance: "నిర్వహణ",
        industry: "పరిశ్రమ వార్తలు"
      },
      posts: [
        {
          title: "2025 కోసం అధునాతన వ్యవసాయ సాంకేతికతలు",
          category: "సాంకేతికత",
          excerpt: "AI-ఆధారిత ట్రాక్టర్లు మరియు ఖచ్చితమైన వ్యవసాయ పద్ధతులతో ఆధునిక వ్యవసాయాన్ని మార్చే తాజా సాంకేతిక ఆవిష్కరణలను కనుగొనండి...",
          date: "మే 15, 2025",
          readTime: "5 నిమిషాల పఠనం",
          author: "డా. సురేష్ కుమార్"
        },
        {
          title: "స్మార్ట్ ట్రాక్టర్లతో పంట దిగుబడిని పెంచడం",
          category: "వ్యవసాయ చిట్కాలు",
          excerpt: "వివిధ పరిస్థితులలో స్మార్ట్ ట్రాక్టర్ ఫీచర్లు మీ వ్యవసాయ కార్యకలాపాలను ఎలా మెరుగుపరుస్తాయో మరియు ఉత్పాదకతను పెంచుతాయో తెలుసుకోండి...",
          date: "మే 10, 2025",
          readTime: "4 నిమిషాల పఠనం",
          author: "రాజేష్ పటేల్"
        },
        {
          title: "ముఖ్యమైన ట్రాక్టర్ నిర్వహణ చిట్కాలు",
          category: "నిర్వహణ",
          excerpt: "ఈ సమగ్ర నిర్వహణ మార్గదర్శకాలు మరియు నిపుణుల సలహాతో మీ వ్యవసాయ పరికరాలను సమర్థవంతంగా నడపండి...",
          date: "మే 5, 2025",
          readTime: "6 నిమిషాల పఠనం",
          author: "అమిత్ సింగ్"
        },
        {
          title: "సుస్థిర వ్యవసాయం భవిష్యత్తు",
          category: "పరిశ్రమ వార్తలు",
          excerpt: "సుస్థిర వ్యవసాయ పద్ధతులు మరియు పర్యావరణ అనుకూల ట్రాక్టర్లు వ్యవసాయ భవిష్యత్తును ఎలా రూపొందిస్తున్నాయో అన్వేషించండి...",
          date: "మే 1, 2025",
          readTime: "5 నిమిషాల పఠనం",
          author: "డా. ప్రియా శర్మ"
        },
        {
          title: "ఆర్థికంగా సమర్థవంతమైన వ్యవసాయ పరిష్కారాలు",
          category: "వ్యవసాయ చిట్కాలు",
          excerpt: "మీ వ్యవసాయ కార్యకలాపాలలో అధిక ఉత్పాదకతను కొనసాగిస్తూనే నిర్వహణ ఖర్చులను తగ్గించే ఆచరణాత్మక మార్గాలను కనుగొనండి...",
          date: "ఏప్రిల్ 25, 2025",
          readTime: "4 నిమిషాల పఠనం",
          author: "విక్రమ్ రెడ్డి"
        },
        {
          title: "రుతువుల వారీ నిర్వహణ షెడ్యూల్",
          category: "నిర్వహణ",
          excerpt: "సంవత్సరం పొడవునా మీ ట్రాక్టర్ అత్యుత్తమంగా పనిచేయడానికి మా సమగ్ర రుతువుల వారీ నిర్వహణ మార్గదర్శిని అనుసరించండి...",
          date: "ఏప్రిల్ 20, 2025",
          readTime: "7 నిమిషాల పఠనం",
          author: "మహమ్మద్ ఖాన్"
        }
      ],
      viewLess: "తక్కువ చూపించు"
    },
    footer: {
      quickLinks: {
        title: "త్వరిత లింక్‌లు",
        home: "హోమ్",
        about: "మా గురించి",
        services: "మా సేవలు",
        products: "ఉత్పత్తులు",
        contact: "సంప్రదించండి"
      },
      services: {
        title: "సేవలు",
        sales: "ట్రాక్టర్ అమ్మకాలు",
        repair: "మరమ్మతు & నిర్వహణ",
        parts: "స్పేర్ పార్ట్స్",
        support: "24/7 మద్దతు",
        warranty: "వారంటీ సేవ"
      },
      contact: {
        title: "సంప్రదింపు సమాచారం",
        address: "46&T47, బూమా ఐయామ్ మనీ గార్డెన్,\nవుడుపట్టి, కడచనేందల్,\nమదురై - 625104",
        phone: "+91 98404 54758",
        email: "hello@frugaltrail.com",
        hours: "సోమ - శుక్ర: ఉ. 9:00 - సా. 6:00"
      },
      social: {
        title: "మాతో కనెక్ట్ అవ్వండి",
        facebook: "ఫేస్‌బుక్‌లో అనుసరించండి",
        twitter: "ట్విటర్‌లో అనుసరించండి",
        instagram: "ఇన్‌స్టాగ్రామ్‌లో అనుసరించండి",
        linkedin: "లింక్డ్‌ఇన్‌లో కనెక్ట్ అవ్వండి"
      },
      newsletter: {
        title: "న్యూస్‌లెటర్",
        subtitle: "అప్‌డేట్‌లు మరియు ప్రత్యేక ఆఫర్‌ల కోసం మా న్యూస్‌లెటర్‌కు సబ్‌స్క్రైబ్ చేసుకోండి",
        placeholder: "మీ ఇమెయిల్ ఎంటర్ చేయండి",
        button: "సబ్‌స్క్రైబ్",
        success: "సబ్‌స్క్రైబ్ చేసినందుకు ధన్యవాదాలు!",
        error: "దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్‌ను ఎంటర్ చేయండి"
      },
      bottom: {
        copyright: "© 2025 ఫ్రుగల్ ట్రెయిల్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
        terms: "నిబంధనలు & షరతులు",
        privacy: "గోప్యతా విధానం",
        sitemap: "సైట్ మ్యాప్"
      }
    }
  }
};

// Create Provider Component using memo
const LanguageProvider = memo(({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [languageSelected, setLanguageSelected] = useState(false);

  const getText = React.useCallback((section, key) => {
    if (!translations[currentLanguage]?.[section]) return '';
    
    if (key.includes('.')) {
      const keys = key.split('.');
      let value = translations[currentLanguage][section];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || '';
    }
    
    return translations[currentLanguage][section][key] || '';
  }, [currentLanguage]);

  const value = React.useMemo(() => ({
    currentLanguage,
    languageSelected,
    setLanguage: (lang) => {
      setCurrentLanguage(lang);
      setLanguageSelected(true);
    },
    getText
  }), [currentLanguage, languageSelected, getText]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
});

// Name the component for better debugging
LanguageProvider.displayName = 'LanguageProvider';

// Custom hook
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Named exports
export { LanguageContext, LanguageProvider, useLanguage };