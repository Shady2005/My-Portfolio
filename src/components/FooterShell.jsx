import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { profileData } from '../data/profileData';

export const FooterShell = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-5" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
      <Container>
        <Row className="gy-4 align-items-center justify-content-between">
          <Col md={6} className="text-center text-md-start">
            <span className="fw-bold fs-5 font-mono" style={{ color: 'var(--text-main)' }}>
              <span className="text-info">&lt;</span>ShadyHawwary <span className="text-info">/&gt;</span>
            </span>
            <p className="small mb-0 mt-2 font-mono" style={{ color: 'var(--text-muted)' }}>
              &copy; {new Date().getFullYear()} {profileData.name}. {profileData.title}.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
            {profileData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fs-5 px-1"
                aria-label={social.name}
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
            <Button
              variant="outline-tech"
              size="sm"
              onClick={scrollToTop}
              className="font-mono ms-2"
              aria-label="Back to Top"
            >
              <i className="bi bi-arrow-up"></i> Top
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
