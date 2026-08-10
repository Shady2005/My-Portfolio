import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Badge, Alert, Spinner } from 'react-bootstrap';
import { profileData } from '../data/profileData';
import { sendContactEmail } from '../utils/emailService';
import { sanitizeInput } from '../utils/security';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAlert, setSubmitAlert] = useState(null);

  const validateField = (name, value) => {
    let error = '';
    const trimmed = value.trim();
    if (name === 'name') {
      if (!trimmed) error = 'Name is required';
      else if (trimmed.length < 2) error = 'Name must be at least 2 characters';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmed) error = 'Email is required';
      else if (!emailRegex.test(trimmed)) error = 'Please enter a valid email address';
    } else if (name === 'subject') {
      if (!trimmed) error = 'Subject is required';
      else if (trimmed.length < 3) error = 'Subject must be at least 3 characters';
    } else if (name === 'message') {
      if (!trimmed) error = 'Message is required';
      else if (trimmed.length < 10) error = 'Message must be at least 10 characters';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAlert(null);

    // Validate fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Sanitize input values before sending
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    };

    try {
      const result = await sendContactEmail(sanitizedData);
      if (result.success) {
        setSubmitAlert({
          type: 'success',
          text: result.message || 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setSubmitAlert({
          type: 'danger',
          text: result.error || 'Failed to send message. Please try again later.'
        });
      }
    } catch (err) {
      setSubmitAlert({
        type: 'danger',
        text: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper" role="region" aria-labelledby="contact-heading">
      <Container>
        <div className="text-center mb-5">
          <Badge className="tech-badge mb-2">Get In Touch</Badge>
          <h2 id="contact-heading" className="display-6 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>
            Let's Build Something Powerful
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '1.05rem' }}>
            Available for backend engineering roles, system architecture consulting, and technical collaborations.
          </p>
        </div>

        <Row className="gy-4 justify-content-center">
          <Col lg={4}>
            <div className="tech-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h5 fw-bold mb-4" style={{ color: 'var(--text-main)' }}>
                  Contact Information
                </h3>
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="rounded p-2 text-info" style={{ backgroundColor: 'var(--bg-surface)' }}>
                    <i className="bi bi-envelope-check-fill fs-4" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className="small text-muted font-mono d-block">Direct Email</span>
                    <a href="mailto:shadu.hawwary.17@gmail.com" className="text-decoration-none fw-medium text-break" style={{ color: 'var(--text-main)' }}>
                      shadu.hawwary.17@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="rounded p-2 text-emerald" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--accent-emerald)' }}>
                    <i className="bi bi-geo-alt-fill fs-4" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className="small text-muted font-mono d-block">Location</span>
                    <span className="fw-medium" style={{ color: 'var(--text-main)' }}>Available for Remote Work</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="small text-muted font-mono mb-2">// SOCIAL NETWORKS</p>
                <div className="d-flex flex-wrap gap-2">
                  {profileData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-tech btn-sm font-mono"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <i className={`bi ${social.icon} me-1`} aria-hidden="true"></i> {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="tech-card p-4 p-md-5">
              <h3 className="h5 fw-bold mb-4" style={{ color: 'var(--text-main)' }}>
                Send a Message
              </h3>

              {submitAlert && (
                <Alert
                  variant={submitAlert.type}
                  className="mb-4 font-mono small d-flex align-items-center gap-2"
                  dismissible
                  onClose={() => setSubmitAlert(null)}
                  role="alert"
                >
                  <i className={`bi ${submitAlert.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'}`} aria-hidden="true"></i>
                  {submitAlert.text}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="contactName">
                      <Form.Label className="small font-mono text-muted">Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`custom-input ${errors.name ? 'is-invalid' : ''}`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <div id="name-error" className="invalid-feedback font-mono small">{errors.name}</div>}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="contactEmail">
                      <Form.Label className="small font-mono text-muted">Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`custom-input ${errors.email ? 'is-invalid' : ''}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <div id="email-error" className="invalid-feedback font-mono small">{errors.email}</div>}
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="contactSubject">
                      <Form.Label className="small font-mono text-muted">Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Backend Engineering Opportunity"
                        className={`custom-input ${errors.subject ? 'is-invalid' : ''}`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                      />
                      {errors.subject && <div id="subject-error" className="invalid-feedback font-mono small">{errors.subject}</div>}
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="contactMessage">
                      <Form.Label className="small font-mono text-muted">Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project requirements or team role..."
                        className={`custom-input ${errors.message ? 'is-invalid' : ''}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && <div id="message-error" className="invalid-feedback font-mono small">{errors.message}</div>}
                    </Form.Group>
                  </Col>

                  <Col md={12} className="text-end pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-cyan w-100 w-md-auto px-4 d-inline-flex align-items-center justify-content-center gap-2"
                      aria-label="Send Contact Message"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner animation="border" size="sm" role="status" aria-hidden="true" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <i className="bi bi-send-fill" aria-hidden="true"></i>
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
