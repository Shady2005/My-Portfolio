import React, { memo } from 'react';
import { Card } from 'react-bootstrap';

export const CertificationCard = memo(({ item }) => {
  const isExperience = item.type === 'experience';

  return (
    <Card className="tech-card border-0 h-100 p-4 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="font-mono small" style={{ color: isExperience ? 'var(--accent-emerald)' : 'var(--accent-cyan)' }}>
            <i className={`bi ${isExperience ? 'bi-briefcase-fill' : 'bi-award-fill'} me-2`} aria-hidden="true"></i>
            {isExperience ? 'Practical Internship' : 'Official Certification'}
          </span>
          <span className="badge bg-dark text-muted font-mono" style={{ fontSize: '0.75rem' }}>
            {item.date}
          </span>
        </div>
        <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--text-main)' }}>
          {item.title}
        </h3>
        <p className="small font-mono mb-3" style={{ color: 'var(--accent-blue)' }}>
          {item.issuer || item.company}
        </p>
        <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
          {item.description}
        </p>
      </div>

      {item.credentialUrl && (
        <div className="pt-3 mt-3 border-top border-secondary">
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info text-decoration-none small font-mono d-inline-flex align-items-center gap-1"
            aria-label={`Verify credential for ${item.title}`}
          >
            Verify Credential <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      )}
    </Card>
  );
});

CertificationCard.displayName = 'CertificationCard';
