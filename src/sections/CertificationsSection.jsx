import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { certificationsData } from '../data/certificationsData';
import { CertificationCard } from '../components/CertificationCard';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-wrapper" role="region" aria-labelledby="certifications-heading">
      <Container>
        <div className="text-center mb-5">
          <Badge className="tech-badge mb-2">Qualifications</Badge>
          <h2 id="certifications-heading" className="display-6 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>
            Certifications & Internships
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '1.05rem' }}>
            Official networking credentials, full-stack PHP web development certifications, and professional database management internships.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {certificationsData.map((item) => (
            <Col key={item.id} md={6} lg={4}>
              <CertificationCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
