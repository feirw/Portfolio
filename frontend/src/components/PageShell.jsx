import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';
import Breadcrumbs from './Breadcrumbs';

const PageShell = ({
  children,
  title,
  description,
  path,
  crumbs,
  noIndex = false,
}) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Seo title={title} description={description} path={path} noIndex={noIndex} />
      <a href="#content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="content" className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageShell;
