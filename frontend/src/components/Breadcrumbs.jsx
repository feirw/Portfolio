import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="breadcrumbs">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.label} aria-current={last ? 'page' : undefined}>
              {last || !item.to ? (
                item.label
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
