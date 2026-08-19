import { useEffect } from 'react';
import { SITE_URL, SITE_NAME } from '../site';
import { portfolioData } from './data/mock';

const JsonLd = () => {
  useEffect(() => {
    const { personal } = portfolioData;
    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          inLanguage: 'en',
          publisher: { '@id': `${SITE_URL}/#person` },
        },
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: personal.name,
          givenName: 'Eleni',
          familyName: 'Zafeiri',
          jobTitle: 'Informatics student and software engineer',
          description: personal.bio,
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/photos/123.jpg`,
          email: personal.email,
          nationality: 'GR',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Athens',
            addressCountry: 'GR',
          },
          affiliation: {
            '@type': 'CollegeOrUniversity',
            name: 'National and Kapodistrian University of Athens',
            url: 'https://www.uoa.gr/',
          },
          sameAs: [
            personal.social_links.github,
            personal.social_links.linkedin,
            personal.social_links.instagram,
          ].filter(Boolean),
        },
        {
          '@type': 'ProfilePage',
          '@id': `${SITE_URL}/#profile`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          inLanguage: 'en',
          mainEntity: { '@id': `${SITE_URL}/#person` },
        },
      ],
    };

    let script = document.getElementById('local-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'local-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, []);

  return null;
};

export default JsonLd;
