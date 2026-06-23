import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Price Predictor', href: '#predictor' },
      { name: 'Crop Advisory', href: '#advisory' },
      { name: 'Market Analysis', href: '#analysis' },
      { name: 'Seasonal Planning', href: '#planning' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Data Sources', href: '#data' },
      { name: 'Research Papers', href: '#research' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#careers' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Feedback', href: '#feedback' },
      { name: 'Report Bug', href: '#bug' }
    ]
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: '#github', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#twitter', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#linkedin', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, href: '#facebook', label: 'Facebook' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Section */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Leaf size={32} />
              </div>
              <div className="footer-logo-text">
                <h3 className="gradient-text">Farmer Market</h3>
                <span>Price Predictor</span>
              </div>
            </div>
            <p className="footer-description">
              Empowering farmers with AI-driven insights for better crop decisions 
              and sustainable agricultural practices.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>support@farmermarket.ai</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                {footerLinks.product.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Farmer Market Price Predictor. All rights reserved.</p>
            </div>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
