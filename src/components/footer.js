import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>&copy; 2021 <Link to="https://github.com/Xynnix/" text="Xynnix" /></p>
      </div>
    </div>
  );
}

export default Footer;
