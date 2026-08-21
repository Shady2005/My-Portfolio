import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const CvModal = ({ show, onHide, cvUrl = '/Shady_Hawwary_CV.pdf' }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      contentClassName="cv-modal-content"
      aria-labelledby="cv-modal-title"
    >
      <Modal.Header closeButton className="border-secondary border-opacity-25 py-3">
        <Modal.Title id="cv-modal-title" className="h5 fw-bold d-flex align-items-center gap-2" style={{ color: 'var(--text-main)' }}>
          <i className="bi bi-file-earmark-pdf-fill text-danger fs-4" aria-hidden="true"></i>
          Curriculum Vitae — Shady Hawwary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0 bg-dark position-relative overflow-hidden" style={{ minHeight: '75vh' }}>
        <iframe
          src={`${cvUrl}#view=FitH`}
          title="Shady Hawwary CV Preview"
          width="100%"
          height="100%"
          style={{ minHeight: '75vh', border: 'none' }}
        >
          <div className="p-5 text-center text-white">
            <p className="lead mb-3">Your browser does not support inline PDF previews.</p>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cyan font-mono"
            >
              Open PDF in New Tab
            </a>
          </div>
        </iframe>
      </Modal.Body>
      <Modal.Footer className="border-secondary border-opacity-25 py-2 d-flex justify-content-between flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-tech font-mono d-inline-flex align-items-center gap-1"
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i> Open in New Tab
          </a>
        </div>
        <div className="d-flex align-items-center gap-2">
          <a
            href={cvUrl}
            download="Shady_Hawwary_CV.pdf"
            className="btn btn-sm btn-cyan font-mono d-inline-flex align-items-center gap-1"
          >
            <i className="bi bi-download" aria-hidden="true"></i> Download PDF
          </a>
          <Button variant="secondary" size="sm" className="font-mono px-3" onClick={onHide}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
