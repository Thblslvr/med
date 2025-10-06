import React from 'react';
import './Products.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Горный мёд',
      price: 1200,
      image: 'https://ir.ozone.ru/s3/multimedia-k/w1200/6608337536.jpg',
      description: 'Собран в высокогорных районах Стерлитамака'
    },
    {
      id: 2,
      name: 'Цветочный мёд',
      price: 1000,
      image: 'https://avatars.mds.yandex.net/get-mpic/5009353/img_id5975024854332842429.jpeg/orig',
      description: 'Нежный аромат полевых цветов'
    },
    {
      id: 3,
      name: 'Липовый мёд',
      price: 1400,
      image: 'https://cache3.youla.io/files/images/780_780/5c/2b/5c2b5a0622a4497c9c6cc5e3.jpg',
      description: 'С насыщенным липовым вкусом'
    },
    {
      id: 4,
      name: 'Гречишный мёд',
      price: 1100,
      image: 'https://avatars.mds.yandex.net/get-mpic/3918703/img_id1305187492793238191.jpeg/orig',
      description: 'Тёмный мёд с богатым вкусом'
    }
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">Наша Продукция</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">{product.price} ₽</div>
              <button className="btn">В корзину</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Products);