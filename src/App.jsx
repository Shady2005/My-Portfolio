import React, { lazy, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { HeaderNav } from './components/HeaderNav';
import { FooterShell } from './components/FooterShell';

// Code-split section components for optimal performance
const HeroSection = lazy(() => import('./sections/HeroSection').then((m) => ({ default: m.HeroSection })));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection })));
const CertificationsSection = lazy(() => import('./sections/CertificationsSection').then((m) => ({ default: m.CertificationsSection })));
const ResumeSection = lazy(() => import('./sections/ResumeSection').then((m) => ({ default: m.ResumeSection })));
const ContactSection = lazy(() => import('./sections/ContactSection').then((m) => ({ default: m.ContactSection })));

const SectionLoader = () => (
  <div className="py-5 text-center d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
    <Spinner animation="border" variant="info" role="status">
      <span className="visually-hidden">Loading section...</span>
    </Spinner>
  </div>
);

export function App() {
  return (
    <div className="bg-primary text-light min-vh-100 d-flex flex-column" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <HeaderNav />
      <main className="flex-grow-1" id="main-content">
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
          <ProjectsSection />
          <CertificationsSection />
          <ResumeSection />
          <ContactSection />
        </Suspense>
      </main>
      <FooterShell />
    </div>
  );
}

export default App;

