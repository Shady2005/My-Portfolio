import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { profileData } from '../data/profileData';
import { CvModal } from '../components/CvModal';

export const HeroSection = () => {
  const [showCvModal, setShowCvModal] = useState(false);

  return (
    <section id="hero" className="section-wrapper pt-5 mt-4 d-flex align-items-center" style={{ minHeight: '88vh' }} role="region" aria-labelledby="hero-heading">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <div className="mb-3">
              <Badge className="tech-badge px-3 py-2">
                <i className="bi bi-cpu-fill me-2" aria-hidden="true"></i>{profileData.title}
              </Badge>
            </div>
            <h1 id="hero-heading" className="display-4 fw-extrabold mb-3" style={{ color: 'var(--text-main)' }}>
              Engineering Scalable Backend & <span className="gradient-text">Business Tech Systems</span>
            </h1>
            <p className="lead mb-4 pe-lg-3" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              {profileData.bio}
            </p>

            {/* Personal Details Highlight Box */}
            <div className="p-3 mb-4 rounded-3" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <Row className="g-3 align-items-center">
                <Col sm={4} className="d-flex align-items-center gap-2">
                  <div className="rounded p-2 text-info" style={{ backgroundColor: 'var(--bg-surface)' }}>
                    <i className="bi bi-person-lines-fill fs-5" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className="d-block font-mono text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>AGE</span>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{profileData.age}</strong>
                  </div>
                </Col>
                <Col sm={8} className="d-flex align-items-center gap-2 border-start-sm">
                  <div className="rounded p-2 text-info" style={{ backgroundColor: 'var(--bg-surface)' }}>
                    <i className="bi bi-mortarboard-fill fs-5" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span className="d-block font-mono text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>EDUCATION</span>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.85rem', lineHeight: '1.4' }} className="d-block">
                      {profileData.education}
                    </strong>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Core Skills Badges */}
            <div className="mb-4">
              <p className="small text-muted font-mono mb-2">// CORE TECHNICAL STACK</p>
              <div className="d-flex flex-wrap gap-2">
                {profileData.coreSkills.map((skill) => (
                  <span key={skill} className="tech-badge" style={{ fontSize: '0.8rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons with Prominent CV Action */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a
                href="/Shady_Hawwary_CV.pdf"
                download="Shady_Hawwary_CV.pdf"
                className="btn btn-cyan font-mono d-inline-flex align-items-center gap-2"
                aria-label="Download Shady Hawwary CV PDF"
              >
                <i className="bi bi-download fs-5" aria-hidden="true"></i> Download CV
              </a>
              <button
                type="button"
                className="btn btn-outline-tech font-mono d-inline-flex align-items-center gap-2"
                onClick={() => setShowCvModal(true)}
                aria-label="Preview Shady Hawwary CV in modal"
              >
                <i className="bi bi-file-earmark-pdf-fill text-danger fs-5" aria-hidden="true"></i> Preview CV
              </button>
              <a href="#projects" className="btn btn-outline-tech font-mono" aria-label="Navigate to Projects section">
                Projects <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            </div>

            {/* Social Icons */}
            <div className="d-flex align-items-center gap-3 pt-2">
              <span className="small text-muted font-mono me-2">Connect:</span>
              {profileData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none fs-4 px-1"
                  aria-label={`Visit ${profileData.name} on ${social.name}`}
                  title={social.name}
                  style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </Col>

          {/* Photo / Terminal Frame */}
          <Col lg={5} className="text-center">
            <div className="tech-card p-3 mx-auto shadow-lg" style={{ width: '100%', maxWidth: '420px', borderRadius: '16px' }}>
              <div className="d-flex align-items-center justify-content-between px-2 pb-2 mb-3 border-bottom border-secondary">
                <div className="d-flex gap-1">
                  <span className="rounded-circle bg-danger d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                  <span className="rounded-circle bg-warning d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                  <span className="rounded-circle bg-success d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                </div>
                <span className="small font-mono text-muted" style={{ fontSize: '0.75rem' }}>shady_hawwary.py</span>
              </div>

              <div
                className="rounded-3 p-4 text-start font-mono d-flex flex-column justify-content-between"
                style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', minHeight: '340px' }}
              >
                <div>
                  <p className="mb-2" style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>class BackendDeveloper:</p>
                  <p className="ps-3 mb-1 small" style={{ color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--accent-blue)' }}>name</span> = <span style={{ color: 'var(--accent-emerald)' }}>"{profileData.name}"</span>
                  </p>
                  <p className="ps-3 mb-1 small" style={{ color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--accent-blue)' }}>age</span> = <span style={{ color: 'var(--accent-cyan)' }}>21</span>
                  </p>
                  <p className="ps-3 mb-1 small" style={{ color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--accent-blue)' }}>status</span> = <span style={{ color: 'var(--accent-cyan)' }}>"Senior 4th Year Student"</span>
                  </p>
                  <p className="ps-3 mb-1 small" style={{ color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--accent-blue)' }}>college</span> = <span style={{ color: 'var(--accent-emerald)' }}>"CIC (70% CS / 30% Biz)"</span>
                  </p>
                  <p className="ps-3 mb-1 small" style={{ color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--accent-blue)' }}>focus</span> = [<span style={{ color: 'var(--accent-emerald)' }}>"PHP/Laravel"</span>, <span style={{ color: 'var(--accent-emerald)' }}>"MySQL"</span>, <span style={{ color: 'var(--accent-emerald)' }}>"DB Design"</span>]
                  </p>
                </div>
                <div className="text-center mt-3 pt-3 border-top border-secondary">
                  <img
                    src="/My Photo.jpeg"
                    alt={profileData.name}
                    className="profile-hero-img mb-2"
                  />
                  <div>
                    <span className="badge font-mono px-3 py-1" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)', border: '1px solid var(--border-color)', fontSize: '0.75rem' }}>
                      {profileData.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CV Modal Preview */}
      <CvModal show={showCvModal} onHide={() => setShowCvModal(false)} />
    </section>
  );
};

