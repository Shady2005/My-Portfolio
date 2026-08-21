import React, { useState } from 'react';
import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import { CvModal } from '../components/CvModal';

export const ResumeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const cvUrl = '/Shady_Hawwary_CV.pdf';

  return (
    <section id="resume" className="section-wrapper" role="region" aria-labelledby="resume-heading">
      <Container>
        <div className="text-center mb-5">
          <Badge className="tech-badge mb-2">Curriculum Vitae</Badge>
          <h2 id="resume-heading" className="display-6 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>
            Resume & Professional Credentials
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '1.05rem' }}>
            Preview my full curriculum vitae, technical capabilities, education background, and practical experience.
          </p>
        </div>

        <Row className="g-4 align-items-center">
          {/* Left Column: Quick Summary & Action Card */}
          <Col lg={5}>
            <Card className="tech-card border-0 p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <i className="bi bi-file-earmark-person-fill fs-3 text-info" aria-hidden="true"></i>
                  <div>
                    <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-main)' }}>
                      Shady Hawwary — CV
                    </h3>
                    <span className="small font-mono text-muted">PDF Document • Updated 2026</span>
                  </div>
                </div>

                <p className="small mb-4 text-muted" style={{ lineHeight: '1.65' }}>
                  A comprehensive overview of my software engineering capabilities, academic record at CIC (BTI), certifications, database management experience, and backend projects.
                </p>

                <div className="p-3 mb-4 rounded-3" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)' }}>
                  <div className="d-flex align-items-center gap-2 mb-2 font-mono small text-cyan fw-semibold">
                    <i className="bi bi-check-circle-fill text-success" aria-hidden="true"></i> Key Qualifications
                  </div>
                  <ul className="list-unstyled small mb-0 font-mono text-muted" style={{ fontSize: '0.85rem' }}>
                    <li className="mb-1">✓ Senior Business Technology Student at CIC</li>
                    <li className="mb-1">✓ Full Stack PHP & Laravel Certified (120 hrs ITI)</li>
                    <li className="mb-1">✓ Cisco CCNA: Introduction to Networks</li>
                    <li className="mb-1">✓ 2x Database Internships at Summit Tech Solutions</li>
                    <li>✓ Backend Developer & IT Member at Enactus CIC</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column gap-2 pt-2">
                <a
                  href={cvUrl}
                  download="Shady_Hawwary_CV.pdf"
                  className="btn btn-cyan font-mono py-2.5 d-flex align-items-center justify-content-center gap-2"
                  aria-label="Download Shady Hawwary CV PDF"
                >
                  <i className="bi bi-download fs-5" aria-hidden="true"></i> Download CV (PDF)
                </a>

                <div className="d-flex gap-2">
                  <Button
                    variant="outline-tech"
                    className="w-100 font-mono py-2 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => setShowModal(true)}
                    aria-label="Preview CV in modal window"
                  >
                    <i className="bi bi-eye-fill text-info" aria-hidden="true"></i> Preview Fullscreen
                  </Button>
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-tech font-mono px-3 py-2 d-flex align-items-center justify-content-center"
                    aria-label="Open CV PDF in new browser tab"
                    title="Open in new tab"
                  >
                    <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </Card>
          </Col>

          {/* Right Column: Live Embedded PDF Viewer Frame */}
          <Col lg={7}>
            <div className="cv-preview-card position-relative rounded-3 overflow-hidden shadow-lg" style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
              <div className="d-flex align-items-center justify-content-between p-3 border-bottom border-secondary" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-file-pdf-fill text-danger fs-5" aria-hidden="true"></i>
                  <span className="font-mono small fw-semibold" style={{ color: 'var(--text-main)' }}>
                    Shady_Hawwary_CV.pdf
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-tech font-mono py-1 px-2 d-flex align-items-center gap-1"
                    onClick={() => setShowModal(true)}
                    style={{ fontSize: '0.75rem' }}
                  >
                    <i className="bi bi-arrows-fullscreen" aria-hidden="true"></i> Expand
                  </button>
                  <a
                    href={cvUrl}
                    download="Shady_Hawwary_CV.pdf"
                    className="btn btn-sm btn-cyan font-mono py-1 px-2 d-flex align-items-center gap-1"
                    style={{ fontSize: '0.75rem' }}
                  >
                    <i className="bi bi-download" aria-hidden="true"></i> Download
                  </a>
                </div>
              </div>

              <div className="cv-iframe-wrapper" style={{ height: '520px', width: '100%' }}>
                <iframe
                  src={`${cvUrl}#view=FitH`}
                  title="Embedded CV Viewer"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                >
                  <div className="p-4 text-center text-muted font-mono">
                    <p>PDF preview is not directly supported in your browser.</p>
                    <a href={cvUrl} download="Shady_Hawwary_CV.pdf" className="btn btn-cyan btn-sm">
                      Download PDF
                    </a>
                  </div>
                </iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Lightbox / Fullscreen Modal */}
      <CvModal show={showModal} onHide={() => setShowModal(false)} cvUrl={cvUrl} />
    </section>
  );
};
