import React from 'react';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لاشتراكك في نشرتنا البريدية!');
  };

  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="./9709798.png" alt="HSG Logo" className="footer-logo-img" />
                    <p>حلول تقنية متكاملة</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-column">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><a href="#home">الرئيسية</a></li>
                            <li><a href="#services">خدماتنا</a></li>
                            <li><a href="#projects">مشاريعنا</a></li>
                            <li><a href="#about">من نحن</a></li>
                            <li><a href="#contact">اتصل بنا</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <h3>خدماتنا</h3>
                        <ul>
                            <li><a href="#services">تطوير المواقع الإلكترونية</a></li>
                            <li><a href="#services">الذكاء الاصطناعي</a></li>
                            <li><a href="#services">بوتات تلجرام</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <h3>تواصل معنا</h3>
                         <ul>
                            <li><a href="mailto:cpshzt@gmail.com"><i className="fas fa-envelope"></i> البريد الإلكتروني</a></li>
                            <li><a href="tel:+972592311460"><i className="fas fa-phone"></i> الهاتف</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <h3>اشترك في نشرتنا البريدية</h3>
                <p>احصل على آخر الأخبار والعروض الحصرية</p>
                <div className="newsletter-contact">
                    <p><i className="fas fa-envelope"></i> البريد الإلكتروني: cpshzt@gmail.com</p>
                    <p><i className="fas fa-phone"></i> رقم الهاتف: +972592311460</p>
                </div>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <input type="email" placeholder="أدخل بريدك الإلكتروني" required />
                    <button type="submit" className="btn primary-btn">
                        <i className="fas fa-paper-plane"></i> اشتراك
                    </button>
                </form>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 شركة HSG للحلول التقنية المتكاملة | جميع الحقوق محفوظة</p>
                <div className="footer-social">
                    <a href="https://www.tiktok.com/@hsg_new" target="_blank" rel="noopener noreferrer" title="تيك توك"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.youtube.com/@HSG-NEW" target="_blank" rel="noopener noreferrer" title="يوتيوب"><i className="fab fa-youtube"></i></a>
                    <a href="https://wa.me/message/4TYV7IWEUNAXN1" target="_blank" rel="noopener noreferrer" title="واتساب"><i className="fab fa-whatsapp"></i></a>
                    <a href="mailto:cpshzt@gmail.com" title="البريد الإلكتروني"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;