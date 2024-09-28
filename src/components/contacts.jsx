

// export default Contact;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMessage: ''
    });

    const [contactMessage, setContactMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: formData.userName,
            user_email: formData.userEmail,
            user_message: formData.userMessage
        };

        // Log form data and templateParams for debugging
        console.log('Form Data:', formData);
        console.log('Sending email with params:', templateParams);

        emailjs.send('service_5n2a32o', 'template_ir723qr', templateParams, 'pTj6suU_6ovk9FlTg')
            .then((result) => {
                console.log(result.text);
                setContactMessage('Your message has been sent successfully!');
                setFormData({
                    userName: '',
                    userEmail: '',
                    userMessage: ''
                });
                setTimeout(() => {
                    setContactMessage('');
                }, 5000);
            }, (error) => {
                console.log(error.text);
                setContactMessage('Message Not Sent!');
            });
    };

    return (
        <section className="contact section" id="contact">
            <div className="contacts__container container grid">
                <div className="contacts__data">
                    <h3 className="section__subtitle">
                        Get In <span>Touch</span>
                    </h3>
                    <h2 className="section__title">
                        Contact Me!
                    </h2>
                </div>
                <form 
                    className="contact__form" 
                    id="contact-form" 
                    onSubmit={handleSubmit}
                >
                    <div className="contact__group">
                        <input 
                            type="text" 
                            name="userName" 
                            required 
                            placeholder="Enter Your Name" 
                            className="contact__input"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        <input 
                            type="email" 
                            name="userEmail" 
                            required 
                            placeholder="Enter Your E-mail" 
                            className="contact__input"
                            value={formData.userEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea 
                        name="userMessage" 
                        required 
                        placeholder="Enter your Message" 
                        className="contact__input"
                        value={formData.userMessage}
                        onChange={handleChange}
                    />
                    <p className="contact__message">{contactMessage}</p>
                    <button type="submit" className="button contact__button">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
