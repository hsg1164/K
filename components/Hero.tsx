import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="animate-text">مرحباً بكم في <span className="highlight">HSG</span></h1>
                <p className="animate-text delay-1">حلول تقنية متكاملة وخدمات احترافية لتطوير أعمالكم ومواكبة التطور التقني</p>
                <div className="cta-buttons animate-text delay-2">
                    <a href="#services" className="btn primary-btn"><i className="fas fa-cogs"></i> خدماتنا</a>
                    <a href="#contact" className="btn secondary-btn"><i className="fas fa-paper-plane"></i> تواصل معنا</a>
                </div>
            </div>
            <div className="hero-image animate-fade-in">
                <div className="hero-logo">
                    <img src="/880o868973.png" alt="HSG Logo" className="hero-logo-img" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
