"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    document.getElementById('stage')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isClient) {
    // Render as an anchor tag for SSR/no-JS
    return (
      <a
        href="#stage"
        className="md:hidden flex justify-center pb-6 cursor-pointer"
        aria-hidden="true"
      >
        <div className="text-primary-400 dark:text-stone-500 animate-bounce">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
      </a>
    );
  }

  // Render as a div with onClick for client-side with JS
  return (
    <div
      className="md:hidden flex justify-center pb-6 cursor-pointer"
      aria-hidden="true"
      onClick={handleClick}
    >
      <div className="text-primary-400 dark:text-stone-500 animate-bounce">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>
    </div>
  );
}

