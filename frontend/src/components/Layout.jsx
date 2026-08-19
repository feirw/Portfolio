import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  const showStickyCta = pathname !== '/contact';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('has-sticky-cta', showStickyCta);
    return () => document.body.classList.remove('has-sticky-cta');
  }, [showStickyCta]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        Skip to main content
      </a>
      <Navbar isHome={pathname === '/'} />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
      {showStickyCta && (
        <Link className="sticky-cta" to="/contact">
          Get in touch
        </Link>
      )}
    </div>
  );
};

export default Layout;
