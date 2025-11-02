import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2>من نحن</h2>
                    <div className="underline"></div>
                </div>
                <div className="about-content">
                    <div className="about-box">
                        <h3>نحن HSG - شريكك في النجاح الرقمي</h3>
                        <p>نحن فريق متخصص في تقديم حلول تقنية متكاملة تساعد الشركات والأفراد على تحقيق أهدافهم في العالم الرقمي. نجمع بين الخبرة التقنية والإبداع لنقدم حلولاً مبتكرة تلبي احتياجات عملائنا.</p>
                        <div className="about-features">
                            <div className="feature">
                                <i className="fas fa-rocket"></i>
                                <h4>رؤيتنا</h4>
                                <p>أن نكون الشريك الأول في التحول الرقمي وتقديم حلول تقنية مبتكرة تساهم في نجاح عملائنا.</p>
                            </div>
                            <div className="feature">
                                <i className="fas fa-bullseye"></i>
                                <h4>مهمتنا</h4>
                                <p>تقديم خدمات تقنية عالية الجودة تساعد عملائنا على النمو والتطور في العصر الرقمي.</p>
                            </div>
                            <div className="feature">
                                <i className="fas fa-star"></i>
                                <h4>قيمنا</h4>
                                <p>الجودة، الابتكار، الموثوقية، والتركيز على نجاح العميل.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
