import React, { memo } from 'react';
import { Card } from 'react-bootstrap';

export const ProjectCard = memo(({ project }) => {
  return (
    <Card className="tech-card border-0 h-100 p-4 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="font-mono text-info small">
            <i className="bi bi-folder2-open me-2" aria-hidden="true"></i>Backend System
          </span>
          {project.featured && (
            <span className="badge bg-info bg-opacity-10 text-info border border-info font-mono" style={{ fontSize: '0.7rem' }}>
              Featured
            </span>
          )}
        </div>
        <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--text-main)' }}>
          {project.title}
        </h3>
        <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
          {project.description}
        </p>
      </div>

      <div>
        <div className="d-flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge font-mono px-2 py-1"
              style={{
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--accent-cyan)',
                border: '1px solid var(--border-color)',
                fontSize: '0.75rem'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-3 border-top border-secondary">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cyan btn-sm w-100 text-center d-flex align-items-center justify-content-center gap-2 font-mono py-2"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <i className="bi bi-github fs-6" aria-hidden="true"></i> View Code
          </a>
        </div>
      </div>
    </Card>
  );
});

ProjectCard.displayName = 'ProjectCard';
