import React from 'react';
import './style.css'; // Import the CSS file
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
