// src/pages/Desktops.jsx
import React from 'react';
import ProductCard from '../Components/ProductCard';

const Desktops = () => {
  const desktopData = [
    {
      id: 1,
      name: 'Apple Mac Studio M2 Ultra',
      brand: 'Apple',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZP_Fm2XFU5-OcN8RQ2Ev1aMcn5JWreDQqA&s',
      specs: ['M2 Ultra Chip', '64GB RAM', '2TB SSD'],
      price: { current: 3999 }
    },
    {
      id: 2,
      name: 'Dell Alienware Aurora R16',
      brand: 'Dell',
      image: 'https://sm.pcmag.com/pcmag_me/photo/default/078fwui2ishfdtodnicyblr-3_1qn8.jpg',
      specs: ['Intel i9-14900KF', '32GB RAM', 'RTX 4090'],
      price: { current: 2999, original: 3499 },
      discount: 14
    },
    {
      id: 3,
      name: 'HP Envy 34 All-in-One',
      brand: 'HP',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOy0ao7Mfy4Olr43Tbx7cm5WW1O4UdmelEQ&s',
      specs: ['Intel i7', '32GB RAM', '34" 5K Display'],
      price: { current: 2499 }
    }
  ];

  return (
    <div className="category-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Desktops</h1>
          <p className="page-subtitle">Powerful desktop computers for every need</p>
        </div>
        
        <div className="products-grid">
          {desktopData.map(desktop => (
            <ProductCard key={desktop.id} product={desktop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desktops;