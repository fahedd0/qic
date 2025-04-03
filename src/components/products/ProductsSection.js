import React from 'react';
import ProductCard from './ProductCard.js';

const ProductsSection = () => {
  const products = [
    { 
      icon: "heartbeat", 
      title: "Medical Insurance", 
      description: "Comprehensive healthcare coverage for individuals and families" 
    },
    { 
      icon: "tooth", 
      title: "Dental Coverage", 
      description: "Specialized plans for dental care and procedures" 
    },
    { 
      icon: "plane-departure", 
      title: "Travel Insurance", 
      description: "Protection for your journeys anywhere in the world" 
    },
    { 
      icon: "briefcase", 
      title: "Corporate Plans", 
      description: "Tailored solutions for businesses of all sizes" 
    },
    { 
      icon: "car", 
      title: "Motor Insurance", 
      description: "Full coverage for your vehicles with roadside assistance" 
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our comprehensive range of insurance solutions designed to provide you with peace of mind.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;