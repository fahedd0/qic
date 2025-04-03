import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import FeaturesSection from '../components/features/FeaturesSection';
import ProductsSection from '../components/products/ProductsSection';
import LoginPanel from '../components/login/LoginPanel';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <LoginPanel />
    </>
  );
};

export default HomePage;