// src/pages/Shop.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const Shop = () => {
  const allProducts = [
    // Mobile
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
      specs: ['A17 Pro Chip', '256GB Storage', 'Titanium Design'],
      price: { current: 1199 },
      discount: 8
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
      specs: ['Snapdragon 8 Gen 3', '512GB Storage', 'S Pen Included'],
      price: { current: 1299 }
    },
    // Laptops
    {
      id: 3,
      name: 'MacBook Pro 16" M3 Max',
      brand: 'Apple',
      category: 'laptop',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      specs: ['M3 Max Chip', '64GB RAM', '4TB SSD'],
      price: { current: 3499 }
    },
    {
      id: 4,
      name: 'ASUS ROG Zephyrus G16',
      brand: 'ASUS',
      category: 'laptop',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
      specs: ['Intel Core i9', '32GB RAM', 'RTX 4080'],
      price: { current: 2499 }
    },
    // Tablets
    {
      id: 5,
      name: 'iPad Pro 12.9" M2',
      brand: 'Apple',
      category: 'tablet',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      specs: ['M2 Chip', '1TB Storage', 'ProMotion Display'],
      price: { current: 1299 },
      discount: 7
    },
    // Desktops
    {
      id: 6,
      name: 'Dell Alienware Aurora R16',
      brand: 'Dell',
      category: 'desktop',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop',
      specs: ['Intel i9-14900KF', '32GB RAM', 'RTX 4090'],
      price: { current: 2999 },
      discount: 14
    }
  ];

  const categories = [
    { name: 'Mobile', count: 6, path: '/mobile' },
    { name: 'Laptops', count: 6, path: '/laptops' },
    { name: 'Tablets', count: 3, path: '/tablets' },
    { name: 'Desktops', count: 3, path: '/desktops' }
  ];

  return (
    <div className="category-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">All Products</h1>
          <p className="page-subtitle">Browse our complete collection of tech products</p>
        </div>

        <div className="categories-section" style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Shop by Category
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <Link
                key={category.name}
                to={category.path}
                style={{
                  padding: '1rem 2rem',
                  background: '#00adb5',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '30px',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;