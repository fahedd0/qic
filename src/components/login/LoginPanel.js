import React from 'react';
import LoginOption from './LoginOption.js';

const LoginPanel = () => {
  const loginOptions = [
    { 
      icon: "user-shield", 
      title: "Customer Login",
      description: "Access your policies, file claims, and view documents securely in one place."
    },
    { 
      icon: "building", 
      title: "Corporate Login",
      description: "Easily manage your organization's insurance plans and employee benefits."
    },
    { 
      icon: "user-tie", 
      title: "Agent Login",
      description: "Track leads, issue policies, and manage clients via your sales dashboard."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Login to Your Portal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Access your personalized dashboard to manage your insurance needs efficiently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {loginOptions.map((option, index) => (
            <LoginOption 
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoginPanel;