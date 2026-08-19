import React, { useState } from 'react';

const Tip = ({ title, text, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="tip"
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span className="tooltip" role="tooltip">
          {title && <strong>{title}</strong>}
          {text}
        </span>
      )}
    </span>
  );
};

export default Tip;
