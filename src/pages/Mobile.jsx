// src/pages/Mobile.jsx
import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';

const Mobile = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const mobileBrands = ['All', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'OPPO', 'Vivo', 'Realme'];
  
  const mobileData = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
      specs: ['A17 Pro Chip', '256GB Storage', 'Titanium Design'],
      price: { current: 1199, original: 1299 },
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
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
      specs: ['Tensor G3', '256GB Storage', 'AI Features'],
      price: { current: 999, original: 1099 },
      discount: 9
    },
    {
      id: 4,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
      specs: ['Snapdragon 8 Gen 3', '512GB Storage', '100W Charging'],
      price: { current: 899 }
    },
    {
      id: 5,
      name: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      image: 'https://cdn.akakce.com/z/xiaomi/xiaomi-14-pro.jpg',
      specs: ['Leica Camera', '512GB Storage', '120W Charging'],
      price: { current: 79900 }
    },
    {
      id: 6,
      name: 'OPPO Find X7 Ultra',
      brand: 'OPPO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Eh6U5KlUm-PRCMqeTwUPVABQ1Wv3WcRhYA&s',
      specs: ['Dual Periscope', '1TB Storage', 'Hasselblad'],
      price: { current: 119900 }
    }
  ];

  const filteredMobiles = selectedBrand === 'All' 
    ? mobileData 
    : mobileData.filter(mobile => mobile.brand === selectedBrand);

  return (
    <div className="category-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Mobile Phones</h1>
          <p className="page-subtitle">Latest smartphones from top brands</p>
        </div>
        
        <div className="category-filters">
          <div className="filter-group">
            <h3>Filter by Brand</h3>
            <div className="brand-filters">
              {mobileBrands.map(brand => (
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
          
          <div className="filter-actions">
            <button 
              className="btn-clear"
              onClick={() => setSelectedBrand('All')}
            >
              Clear Filter
            </button>
          </div>
        </div>
        
        <div className="sort-bar">
          <span className="results-count">{filteredMobiles.length} products found</span>
          <div className="sort-options">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
        
        <div className="products-grid">
          {filteredMobiles.map(mobile => (
            <ProductCard key={mobile.id} product={mobile} />
          ))}
        </div>
        
        {filteredMobiles.length === 0 && (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your filters or search for something else</p>
            <button 
              className="btn-clear"
              onClick={() => setSelectedBrand('All')}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;