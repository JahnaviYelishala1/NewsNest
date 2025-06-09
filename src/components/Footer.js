// Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-4">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} <strong>JahnaviYelishala</strong>. All rights reserved.</p>
        <p className="mb-0">
          Go to GitHub: <a href="https://github.com/JahnaviYelishala1" className="text-info" target="_blank" rel="noreferrer">JahnaviYelishala</a>
        </p>
      </div>
    </footer>
  );
}
