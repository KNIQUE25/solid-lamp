// src/pages/Laptops.jsx
import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';

const Laptops = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const laptopBrands = ['All', 'Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'MSI', 'Acer'];
  
  const laptopData = [
    {
      id: 1,
      name: 'MacBook Pro 16" M3 Max',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      specs: ['M3 Max Chip', '64GB RAM', '4TB SSD'],
      price: { current: 3499 }
    },
    {
      id: 2,
      name: 'Dell XPS 15 9530',
      brand: 'Dell',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      specs: ['Intel i9-13900H', '32GB RAM', '1TB SSD'],
      price: { current: 2399, original: 2699 },
      discount: 11
    },
    {
      id: 3,
      name: 'ASUS ROG Zephyrus G16',
      brand: 'ASUS',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
      specs: ['Intel Core i9', '32GB RAM', 'RTX 4080'],
      price: { current: 2499 }
    },
    {
      id: 4,
      name: 'HP Spectre x360 16',
      brand: 'HP',
      image: 'https://sm.pcmag.com/pcmag_au/review/h/hp-spectre/hp-spectre-x360-16-2024_m8n4.jpg',
      specs: ['Intel i7-1360P', '16GB RAM', '2-in-1 Design'],
      price: { current: 1699, original: 1899 },
      discount: 11
    },
    {
      id: 5,
      name: 'Lenovo ThinkPad X1 Carbon',
      brand: 'Lenovo',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      specs: ['Intel i7-1365U', '16GB RAM', 'Ultra-Light'],
      price: { current: 1899 }
    },
    {
      id: 6,
      name: 'MSI Titan 18 HX',
      brand: 'MSI',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      specs: ['Intel i9-14900HX', '64GB RAM', 'RTX 4090'],
      price: { current: 4999 }
    }
  ];

  const filteredLaptops = selectedBrand === 'All' 
    ? laptopData 
    : laptopData.filter(laptop => laptop.brand === selectedBrand);

  return (
    <div className="category-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Laptops</h1>
          <p className="page-subtitle">Powerful machines for work, creativity, and gaming</p>
        </div>
        
        <div className="category-filters">
          <div className="filter-group">
            <h3>Filter by Brand</h3>
            <div className="brand-filters">
              {laptopBrands.map(brand => (
                <button
                  key={brand}
                  className={`brand-filter ${selectedBrand === brand ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="products-grid">
          {filteredLaptops.map(laptop => (
            <ProductCard key={laptop.id} product={laptop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptops;