import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🍯 Мёд Премиум</h3>
            <p>Натуральный мёд от Руселя</p>
          </div>
          <div className="footer-section">
            <h4>Меню</h4>
            <a href="#products">Продукция</a>
            <a href="#about">О нас</a>
            <a href="#contact">Контакты</a>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>+7 (999) 123-45-67</p>
            <p>info@honey-premium.ru</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Мёд Руселя. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;