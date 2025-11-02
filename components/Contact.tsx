import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `
        *رسالة جديدة من موقع HSG*%0A%0A
        *الاسم:* ${formState.name}%0A
        *رقم الهاتف:* ${formState.phone}%0A
        *الرسالة:*%0A${formState.message}
    `;
    const whatsappUrl = `https://wa.me/972592311460?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormState({ name: '', phone: '', message: '' });
  };
  
  const contactLinks = [
    { href: "mailto:cpshzt@gmail.com", icon: "fas fa-envelope", text: "cpshzt@gmail.com" },
    { href: "https://wa.me/message/4TYV7IWEUNAXN1", icon: "fab fa-whatsapp", text: "واتساب" },
    { href: "https://www.tiktok.com/@hsg_new", icon: "fab fa-tiktok", text: "تيك توك" },
    { href: "https://www.youtube.com/@HSG-NEW", icon: "fab fa-youtube", text: "يوتيوب" },
  ];

  return (
    <section id="contact" className="contact-section">
        <div className="section-title">
            <h2>تواصل معنا</h2>
        </div>
        <div className="contact-content">
            <div className="contact-form">
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="name" placeholder="الاسم الكريم" required value={formState.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="tel" id="phone" placeholder="رقم الهاتف" required value={formState.phone} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <textarea id="message" placeholder="رسالتك" required value={formState.message} onChange={handleInputChange}></textarea>
                    </div>
                    <button type="submit" className="submit-btn">إرسال الرسالة</button>
                </form>
            </div>
            
            <div className="contact-info">
                 {contactLinks.map(link => (
                    <div className="contact-item" key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <i className={link.icon}></i>
                            <span>{link.text}</span>
                        </a>
                    </div>
                 ))}
            </div>
        </div>
    </section>
  );
};

export default Contact;
