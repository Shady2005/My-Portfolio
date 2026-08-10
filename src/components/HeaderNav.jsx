import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export const HeaderNav = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('shady_portfolio_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shady_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'certifications', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="py-3"
      style={{
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold fs-4 font-mono d-flex align-items-center gap-2" style={{ color: 'var(--text-main)' }}>
          <span className="text-info">&lt;</span>ShadyHawwary <span className="text-info">/&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none text-light" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link
              href="#hero"
              className={`nav-link-custom px-2 fw-medium ${activeSection === 'hero' ? 'active text-info' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`nav-link-custom px-2 fw-medium ${activeSection === 'projects' ? 'active text-info' : ''}`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#certifications"
              className={`nav-link-custom px-2 fw-medium ${activeSection === 'certifications' ? 'active text-info' : ''}`}
            >
              Credentials & Experience
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`nav-link-custom px-2 fw-medium ${activeSection === 'contact' ? 'active text-info' : ''}`}
            >
              Contact
            </Nav.Link>
            <Button
              variant="outline-tech"
              size="sm"
              onClick={toggleTheme}
              className="font-mono ms-lg-2 d-flex align-items-center gap-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <>
                  <i className="bi bi-sun-fill text-warning"></i> Light
                </>
              ) : (
                <>
                  <i className="bi bi-moon-stars-fill text-info"></i> Dark
                </>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
