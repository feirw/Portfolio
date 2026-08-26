import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    </div>
  );
};

export default Layout;
