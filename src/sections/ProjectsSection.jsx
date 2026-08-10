import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-wrapper" role="region" aria-labelledby="projects-heading">
      <Container>
        <div className="text-center mb-5">
          <Badge className="tech-badge mb-2">Portfolio</Badge>
          <h2 id="projects-heading" className="display-6 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>
            Featured Backend Projects
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '1.05rem' }}>
            Backend web applications, relational database management systems, and collaborative software platforms.
          </p>
        </div>
        <Row className="g-4">
          {projectsData.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
