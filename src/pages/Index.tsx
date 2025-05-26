
import React from 'react';
import Hero from '../components/Hero';
import ProjectShowcase from '../components/ProjectShowcase';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <ProjectShowcase />
      <Footer />
    </div>
  );
};

export default Index;
