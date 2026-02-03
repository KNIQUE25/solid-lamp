// src/pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
      specs: ['A17 Pro Chip', '256GB Storage', 'Titanium Design'],
      price: { current: 1199 },
      discount: 8
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
      specs: ['Snapdragon 8 Gen 3', '512GB Storage', 'S Pen Included'],
      price: { current: 1299 }
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M3 Max',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      specs: ['M3 Max Chip', '64GB RAM', '4TB SSD'],
      price: { current: 3499 },
      discount: 5
    },
    {
      id: 4,
      name: 'ASUS ROG Zephyrus G16',
      brand: 'ASUS',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w-400&h=400&fit=crop',
      specs: ['Intel i9', '32GB RAM', 'RTX 4080'],
      price: { current: 2499 }
    }
  ];

  const brands = ['Apple', 'Samsung', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Microsoft', 'Google'];

  return (
    <div className="techhaven-home">
      <Hero />
      
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">Top Brands</h2>
          <div className="brands-grid">
            {brands.map(brand => (
              <div key={brand} className="brand-item">
                <div className="brand-logo">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;