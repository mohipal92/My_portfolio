import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact  = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_lqfdgfk',      // 🔁 Replace with your service ID
        'template_3x1hjfs',     // 🔁 Replace with your template ID
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          message: formData.message,
        },
        'Xo39vTIxijI_r37Ux'  // 🔁 Replace with your public key
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ fullName: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div name='Contact' className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Contact ;
