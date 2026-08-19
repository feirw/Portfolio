import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GA_MEASUREMENT_ID } from '../site';

const STORAGE_KEY = 'cookie-consent';

const loadGoogleAnalytics = (id) => {
  if (!id || window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    if (stored === 'accepted') loadGoogleAnalytics(GA_MEASUREMENT_ID);
  }, []);

  const choose = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    if (value === 'accepted') loadGoogleAnalytics(GA_MEASUREMENT_ID);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        This site can use cookies for analytics (Google Analytics) after you opt in. Essential
        hosting cookies may still be set. See the{' '}
        <Link to="/privacy">privacy policy</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn" onClick={() => choose('accepted')}>
          Accept
        </button>
        <button type="button" className="btn btn-outline" onClick={() => choose('rejected')}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
