import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { t } = useTranslation();

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append('access_key', '6d7bc3fc-6190-43c5-8298-89ac5ef7494f');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    if (res.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }
  };
  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">{t('contactForm.nameLabel')}</label>
            <input
              name="name"
              placeholder={t('contactForm.namePlaceholder')}
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">{t('contactForm.emailLabel')}</label>
            <input
              name="email"
              placeholder={t('contactForm.emailPlaceholder')}
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">{t('contactForm.subjectLabel')}</label>
            <input
              name="subject"
              placeholder={t('contactForm.subjectPlaceholder')}
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">{t('contactForm.messageLabel')}</label>
            <textarea
              name="message"
              placeholder={t('contactForm.messagePlaceholder')}
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
              type="submit"
            >
              {loading ? t('contactForm.sending') : t('contactForm.send')}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
