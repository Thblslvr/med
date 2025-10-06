import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Натуральный мёд премиум-качества</h1>
            <p>Собранный в экологически чистых регионах Стерлитамака. 100% натуральный продукт без добавок и консервантов.</p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Выбрать мёд</a>
              <a href="#about" className="btn btn-secondary">Узнать больше</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://avatars.mds.yandex.net/get-mpic/5009353/img_id5975024854332842429.jpeg/orig" alt="Банка мёда" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;