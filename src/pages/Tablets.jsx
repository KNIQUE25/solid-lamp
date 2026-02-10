// src/pages/Tablets.jsx
import React from 'react';
import ProductCard from '../Components/ProductCard';

const Tablets = () => {
  const tabletData = [
    {
      id: 1,
      name: 'iPad Pro 12.9" M2',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      specs: ['M2 Chip', '1TB Storage', 'ProMotion Display'],
      price: { current: 129900, original: 139900 },
      discount: 7
    },
    {
      id: 2,
      name: 'Samsung Galaxy Tab S9 Ultra',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
      specs: ['Snapdragon 8 Gen 2', '512GB Storage', 'S Pen Included'],
      price: { current: 11990 }
    },
    {
      id: 3,
      name: 'Microsoft Surface Pro 9',
      brand: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1617780421544-c5575a324c47?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specs: ['Windows 11', '256GB Storage', 'Detachable Keyboard'],
      price: { current: 349900}
    }
  ];

  return (
    <div className="category-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Tablets</h1>
          <p className="page-subtitle">Powerful tablets for work and entertainment</p>
        </div>
        
        <div className="products-grid">
          {tabletData.map(tablet => (
            <ProductCard key={tablet.id} product={tablet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tablets;