import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const StickyCta = () => {
  const { pathname } = useLocation();
  if (pathname === '/thank-you') return null;

  if (pathname === '/') {
    return (
      <a className="sticky-cta" href="#contact">
        Get in touch
      </a>
    );
  }

  return (
    <Link className="sticky-cta" to={{ pathname: '/', hash: 'contact' }}>
      Get in touch
    </Link>
  );
};

export default StickyCta;
