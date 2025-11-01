import React, { useState } from 'react';

const Contact = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
    setFormData({
...formData,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
    
    setTimeout(() => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    }, 3000);
};

if (submitted) {
    return (
    <div className="contact-page">
        <div className="contact-card">
        <h2 className="contact-title">¡Gracias por contactarnos!</h2>
        <p className="contact-subtitle">
            Hemos recibido tu mensaje y te responderemos pronto.
        </p>
        </div>
    </div>
    );
}

return (
    <div className="contact-page">
    <div className="contact-card">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="contact-subtitle">
        ¿Tenés dudas o sugerencias? ¡Escribinos!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
        </div>
        <button type="submit" className="contact-button">
            Enviar mensaje
        </button>
        </form>
    </div>
    </div>
);
};

export default Contact;