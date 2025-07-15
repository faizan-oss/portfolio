import { useState } from 'react';
import './Contact.css';
import { Phone, Mail } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://portfolio-backend-sg9s.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(' Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      toast.error('Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="gradient-text"
  style={{ backgroundImage:  'linear-gradient(to right, #f5af19, #f12711)' }}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
<div className="contact-info">
  <p>
    <Phone size={18} style={{ marginRight: '8px' }} />
    +91 7739377803
  </p>
  <p>
    <Mail size={18} style={{ marginRight: '8px' }} />
    faizanrahmankhan18@gmail.com
  </p>
</div>
    </section>
  );
}
