import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from './PageShell';
import { portfolioData } from './data/mock';

const { name, email } = portfolioData.personal;

export const Privacy = () => (
  <PageShell
    title="Privacy policy"
    description={`How ${name} collects and uses information on this personal portfolio, including the contact form, cookies, and analytics.`}
    path="/privacy"
    crumbs={[
      { label: 'Home', to: '/' },
      { label: 'Privacy policy' },
    ]}
  >
    <article className="legal-copy">
      <h1 className="page-title">Privacy policy</h1>
      <p>Last updated: 20 August 2026.</p>
      <p>
        This site is a personal portfolio. It does not create user accounts. If you send a message
        through the contact form, your name, email, and message are used only to reply to you.
      </p>
      <h2>What is collected</h2>
      <ul>
        <li>Contact form fields (name, email, message) when you submit the form.</li>
        <li>Optional analytics cookies (Google Analytics) only if you accept cookies.</li>
        <li>Basic logs that the hosting provider may keep for security and uptime.</li>
      </ul>
      <h2>Cookies</h2>
      <p>
        You can accept or reject analytics cookies in the consent banner. Your choice is stored in
        local storage as <code>cookie-consent</code>.
      </p>
      <h2>Contact</h2>
      <p>
        Questions:{' '}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </article>
  </PageShell>
);

export const Terms = () => (
  <PageShell
    title="Terms of use"
    description={`Terms of use for the personal website of ${name}, including content, contact, and acceptable use.`}
    path="/terms"
    crumbs={[
      { label: 'Home', to: '/' },
      { label: 'Terms of use' },
    ]}
  >
    <article className="legal-copy">
      <h1 className="page-title">Terms of use</h1>
      <p>Last updated: 20 August 2026.</p>
      <p>
        Content on this site is shared for personal and informational purposes. Project names,
        logos, and third-party materials remain with their owners.
      </p>
      <h2>Use of the site</h2>
      <p>
        Please do not copy the site as your own portfolio without credit, and do not use contact
        details for unsolicited marketing.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about these terms, email <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </article>
  </PageShell>
);

export const ThankYou = () => (
  <PageShell
    title="Thank you"
    description="Your message was sent. Eleni Zafeiri usually replies within 3–5 working days."
    path="/thank-you"
    noIndex
    showSticky={false}
    crumbs={[
      { label: 'Home', to: '/' },
      { label: 'Thank you' },
    ]}
  >
    <article className="legal-copy">
      <h1 className="page-title">Thank you</h1>
      <div className="promise-box">
        Response time: I usually reply within 3–5 working days. During exams or events it may take a
        little longer.
      </div>
      <p>Your message is on its way. I will get back to you as soon as I can.</p>
      <p>
        <Link className="btn" to="/">
          Back home
        </Link>
      </p>
    </article>
  </PageShell>
);

export const NotFound = () => (
  <PageShell
    title="Page not found"
    description="This page does not exist on Eleni Zafeiri’s portfolio."
    path="/404"
    noIndex
    crumbs={[
      { label: 'Home', to: '/' },
      { label: '404' },
    ]}
  >
    <div className="error-page">
      <p className="error-code">404</p>
      <h1 className="page-title">This page does not exist</h1>
      <p>The link may be outdated, or the page was moved.</p>
      <p>
        <Link className="btn" to="/">
          Back home
        </Link>
      </p>
    </div>
  </PageShell>
);
