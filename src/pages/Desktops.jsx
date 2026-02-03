// src/pages/Desktops.jsx
import React from 'react';
import ProductCard from '../Components/ProductCard';

const Desktops = () => {
  const desktopData = [
    {
      id: 1,
      name: 'Apple Mac Studio M2 Ultra',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop',
      specs: ['M2 Ultra Chip', '64GB RAM', '2TB SSD'],
      price: { current: 3999 }
    },
    {
      id: 2,
      name: 'Dell Alienware Aurora R16',
      brand: 'Dell',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop',
      specs: ['Intel i9-14900KF', '32GB RAM', 'RTX 4090'],
      price: { current: 2999, original: 3499 },
      discount: 14
    },
    {
      id: 3,
      name: 'HP Envy 34 All-in-One',
      brand: 'HP',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop',
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