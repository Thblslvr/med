import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">О нашем мёде</h2>
            <p>
              Мы - семейная пасека с 20-летним опытом работы. Наши ульи расположены 
              в экологически чистых районах, где Русель и природа сохранили
              свою первозданную чистоту.
            </p>
            <ul>
              <li>✓ 100% натуральный продукт</li>
              <li>✓ Без сахарных добавок</li>
              <li>✓ Собран вручную</li>
              <li>✓ Сертифицированная продукция</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="https://cdn0.youla.io/files/images/720_720_out/62/e5/62e53ab71afcc627c02760ef-1.jpg" alt="Пасека" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;