import React, { useState } from 'react';
import { Container, Row, Col, Badge, Modal, Button } from 'react-bootstrap';
import { certificationsData } from '../data/certificationsData';
import { CertificationCard } from '../components/CertificationCard';

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleClose = () => setSelectedCert(null);

  return (
    <section id="certifications" className="section-wrapper" role="region" aria-labelledby="certifications-heading">
      <Container>
        <div className="text-center mb-5">
          <Badge className="tech-badge mb-2">Qualifications</Badge>
          <h2 id="certifications-heading" className="display-6 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>
            Certifications & Experience
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '1.05rem' }}>
            Official networking credentials, full-stack PHP web development certifications, student activity leadership, and professional database management internships.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {certificationsData.map((item) => (
            <Col key={item.id} md={6} lg={4}>
              <CertificationCard item={item} onSelectImage={setSelectedCert} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Light Modal / Fullscreen Preview */}
      <Modal
        show={!!selectedCert}
        onHide={handleClose}
        centered
        size="lg"
        contentClassName="cert-modal-content"
        aria-labelledby="cert-modal-title"
      >
        {selectedCert && (
          <>
            <Modal.Header closeButton className="border-secondary border-opacity-25 pb-2">
              <Modal.Title id="cert-modal-title" className="h5 fw-bold" style={{ color: 'var(--text-main)' }}>
                {selectedCert.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 text-center">
              <div className="cert-modal-img-container position-relative d-inline-block w-100">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-img img-fluid rounded shadow-lg"
                />
              </div>
              <div className="mt-3 text-start px-2">
                <p className="small font-mono mb-1 fw-semibold" style={{ color: 'var(--accent-cyan)' }}>
                  <i className="bi bi-building me-1" aria-hidden="true"></i>
                  {selectedCert.issuer || selectedCert.company}
                  {selectedCert.role && ` • ${selectedCert.role}`}
                </p>
                <p className="small text-muted mb-0">
                  {selectedCert.description}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-secondary border-opacity-25 pt-2 d-flex justify-content-between">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-tech font-mono d-inline-flex align-items-center gap-1"
              >
                <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i> Open Original Image
              </a>
              <Button variant="secondary" size="sm" className="font-mono px-3" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

