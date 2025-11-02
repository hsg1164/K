import React, { useEffect } from 'react';
import { servicesData } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
    return (
        <div className="service-card fancy-service" style={{ order: -3 + index }}>
             <div className="card-glow-effect"></div>
            <div className={`service-icon ${service.id === 'telegram-bot' ? 'telegram-bg' : service.id === 'ai-integration' ? 'ai-bg' : 'gradient-bg'}`}>
                <i className={`fas ${service.icon} fa-2x`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-features">
                <h4>{service.featuresTitle}</h4>
                <ul className="service-details">
                    {service.features.map((feature, i) => (
                        <li key={i}><i className="fas fa-check-circle"></i> {feature}</li>
                    ))}
                </ul>
                {service.portfolio && (
                    <div className="service-portfolio">
                        <h4>{service.portfolio.title}</h4>
                        <ul>
                            {service.portfolio.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                 {service.result && (
                     <p className={service.id === 'telegram-bot' ? "service-highlight" : "service-result"}>
                        {service.result}
                     </p>
                 )}
            </div>
        </div>
    );
};

const Services: React.FC = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => observer.observe(card));

        const handleMouseMove = (e: MouseEvent) => {
            const glow = (e.currentTarget as HTMLElement).querySelector('.card-glow-effect') as HTMLElement;
            if (glow) {
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
            }
        };

        cards.forEach(card => card.addEventListener('mousemove', handleMouseMove));
        
        return () => {
            cards.forEach(card => {
                observer.unobserve(card);
                card.removeEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);

    return (
    <section id="services" className="services">
        <div className="container">
            <div className="section-header">
                <h2>🛠️ خدماتنا</h2>
                <div className="underline"></div>
                <p className="section-description">في HSG، لا نُقدّم مجرد خدمات رقمية...
                    بل نخلق تجارب فريدة تُعبّر عنك وتبني لك حضورًا إلكترونيًا لا يُنسى.
                    نمزج بين الذوق الفني العالي وقوة الذكاء الاصطناعي لنمنحك موقعًا ذكيًا يتفاعل، يُقنع، ويبيع.</p>
            </div>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
