import React from 'react';
import FeatureCard from './FeatureCard.js';

const FeaturesSection = () => {
  const features = [
    { 
      icon: "shield-alt", 
      title: "Wide Coverage", 
      description: "Comprehensive protection across medical, travel, life & more" 
    },
    { 
      icon: "bolt", 
      title: "Instant Policies", 
      description: "Get your policy issued in minutes with our streamlined process" 
    },
    { 
      icon: "mobile-alt", 
      title: "Digital Access", 
      description: "Manage your policies anytime, anywhere with our secure portal" 
    },
    { 
      icon: "handshake", 
      title: "Trusted Providers", 
      description: "Partner with Qatar's most reliable insurance network" 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;