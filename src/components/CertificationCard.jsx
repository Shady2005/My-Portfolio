import React, { memo } from 'react';
import { Card } from 'react-bootstrap';

export const CertificationCard = memo(({ item, onSelectImage }) => {
  const isExperience = item.type === 'experience';

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && item.image) {
      e.preventDefault();
      onSelectImage?.(item);
    }
  };

  return (
    <Card className="tech-card border-0 h-100 d-flex flex-column overflow-hidden">
      {item.image && (
        <div
          className="cert-img-wrapper position-relative"
          onClick={() => onSelectImage?.(item)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`Preview full certificate image for ${item.title}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="cert-card-img"
            loading="lazy"
          />
          <div className="cert-img-overlay d-flex flex-column align-items-center justify-content-center">
            <i className="bi bi-arrows-angle-expand fs-4 text-white mb-1" aria-hidden="true"></i>
            <span className="badge bg-dark bg-opacity-75 text-white font-mono small px-2 py-1 border border-secondary">
              Click to view full image
            </span>
          </div>
        </div>
      )}

      <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">
            <span className="font-mono small fw-semibold" style={{ color: isExperience ? 'var(--accent-emerald)' : 'var(--accent-cyan)' }}>
              <i className={`bi ${isExperience ? 'bi-briefcase-fill' : 'bi-award-fill'} me-2`} aria-hidden="true"></i>
              {isExperience ? 'Practical Experience' : 'Official Certification'}
            </span>
            <span className="badge font-mono px-2 py-1" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-color)', fontSize: '0.75rem' }}>
              {item.date}
            </span>
          </div>
          <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--text-main)' }}>
            {item.title}
          </h3>
          <p className="small font-mono mb-2 fw-medium" style={{ color: 'var(--accent-blue)' }}>
            {item.issuer || item.company}
          </p>
          {item.role && (
            <p className="small font-mono mb-3" style={{ color: 'var(--text-dim)', fontSize: '0.825rem' }}>
              <i className="bi bi-person-badge me-1" aria-hidden="true"></i>
              {item.role}
            </p>
          )}
          <p className="small mb-0" style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.925rem' }}>
            {item.description}
          </p>
        </div>

        {(item.credentialUrl || item.image) && (
          <div className="pt-3 mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2" style={{ borderTop: '1px solid var(--border-color)' }}>
            {item.credentialUrl ? (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info text-decoration-none small font-mono d-inline-flex align-items-center gap-1 fw-medium"
                aria-label={`Verify credential for ${item.title}`}
              >
                Verify Credential <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
              </a>
            ) : <span />}

            {item.image && (
              <button
                type="button"
                onClick={() => onSelectImage?.(item)}
                className="btn btn-sm btn-outline-tech font-mono py-1 px-2 d-inline-flex align-items-center gap-1 ms-auto"
                style={{ fontSize: '0.8rem' }}
                aria-label={`View ${item.title} certificate modal`}
              >
                <i className="bi bi-eye-fill" aria-hidden="true"></i> View Certificate
              </button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
});

CertificationCard.displayName = 'CertificationCard';

