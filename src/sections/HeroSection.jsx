import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { profileData } from '../data/profileData';

export const HeroSection = () => {
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
            <p className="lead text-muted mb-4 pe-lg-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              {profileData.bio}
            </p>

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

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn btn-cyan" aria-label="Navigate to Projects section">
                View Projects <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </a>
              <a href="#contact" className="btn btn-outline-tech" aria-label="Navigate to Contact section">
                Contact Me
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
                  className="text-muted text-decoration-none fs-4 px-1"
                  aria-label={`Visit ${profileData.name} on ${social.name}`}
                  title={social.name}
                  style={{ transition: 'color 0.2s ease' }}
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
            <div className="tech-card p-3 mx-auto shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '16px' }}>
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
                style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', minHeight: '280px' }}
              >
                <div>
                  <p className="text-info small mb-1">class BackendDeveloper:</p>
                  <p className="text-muted ps-3 small mb-1">name = "Shady Hawwary"</p>
                  <p className="text-muted ps-3 small mb-1">role = "Backend Dev & BizTech"</p>
                  <p className="text-muted ps-3 small mb-1">status = "Available for Hire"</p>
                  <p className="text-emerald ps-3 small mb-1" style={{ color: 'var(--accent-emerald)' }}>focus = ["PHP / Laravel", "MySQL", "DB Design"]</p>
                </div>
                <div className="text-center mt-3 pt-2 border-top border-secondary">
                  <i className="bi bi-person-bounding-box text-info display-4 mb-2 d-block" aria-hidden="true"></i>
                  <span className="badge bg-dark border border-secondary text-muted font-mono" style={{ fontSize: '0.7rem' }}>
                    Shady Hawwary
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
