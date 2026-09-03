import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Seo from './components/Seo';
import JsonLd from './components/JsonLd';
import CookieConsent from './components/CookieConsent';
import { Privacy, Terms, ThankYou, NotFound } from './components/Legal';
import { Toaster } from './components/ui/toaster';
import { DEFAULT_DESCRIPTION } from './site';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Hackathons = lazy(() => import('./components/Hackathons'));
const Certificates = lazy(() => import('./components/Certificates'));
const Volunteer = lazy(() => import('./components/Volunteer'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Eleni Zafeiri | Informatics student, University of Athens"
        description={DEFAULT_DESCRIPTION}
        path="/"
        type="profile"
      />
      <JsonLd />
      <a href="#about" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
      <Suspense fallback={null}>
        <Hackathons />
      </Suspense>
      <Suspense fallback={null}>
        <Certificates />
      </Suspense>
      <Suspense fallback={null}>
        <Volunteer />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
