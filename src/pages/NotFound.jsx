// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found flex flex-col items-center justify-center min-h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-light)] px-4">
      <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6 text-[var(--color-nav-white)]">Oops! Page Not Found</p>
      <p className="text-lg text-center mb-8 text-[var(--color-nav-white)]">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="btn rounded-full bg-[var(--color-primary)] hover:bg-transparent hover:border hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200 ease-in-out cursor-pointer px-6 py-3"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;