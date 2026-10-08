import React from 'react';

export function CodeIcon({ size = 26, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function ServerNetworkIcon({ size = 26, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="6" rx="2" />
      <rect x="2" y="12" width="20" height="6" rx="2" />
      <line x1="6" y1="5" x2="6.01" y2="5" />
      <line x1="6" y1="15" x2="6.01" y2="15" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4" y1="22" x2="20" y2="22" />
    </svg>
  );
}

export function CloudIcon({ size = 26, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export function FrontendIcon({ size = 26, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <line x1="6" y1="5.5" x2="6.01" y2="5.5" />
      <line x1="9" y1="5.5" x2="9.01" y2="5.5" />
    </svg>
  );
}

export function DatabaseIcon({ size = 26, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function SupportIcon({ size = 26, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  );
}

// Tech Stack Icons
export function MicrosoftIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 2h9.5v9.5H2V2zm10.5 0H22v9.5h-9.5V2zM2 12.5h9.5V22H2v-9.5zm10.5 0H22V22h-9.5v-9.5z" />
    </svg>
  );
}

export function AwsIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.9 12.9a2.3 2.3 0 0 1-1.6.6c-1.1 0-1.7-.6-1.7-1.7 0-1.4 1-2 3.3-2v3.1zm-4.7 2c1.2.6 2.5.8 3.7.8 1.4 0 2.5-.3 3.3-1 .8-.7 1.1-1.6 1.1-2.9V6.7h-1.6v1.4c-.7-1-1.8-1.6-3.2-1.6-2.5 0-4.2 1.8-4.2 4.3 0 2.4 1.6 4.1 4.2 4.1 1.2 0 2.2-.4 2.9-1.2v.2c0 .8-.2 1.3-.7 1.7-.5.4-1.3.6-2.3.6-1 0-2.2-.2-3.2-.7v1.8zm-6 3.8c5.4 3 12 3 17.6 0 .3-.2.6 0 .4.4-4.8 3.5-12.8 3.5-18.4 0-.3-.3 0-.6.4-.4zm18.6-.2c.2-.3.9-.1 1.3-.1.4 0 .8.1 1.1.3.1.1 0 .3-.1.4-.7.8-1.7 1.5-2.7 1.8-.3.1-.5-.1-.4-.4.2-.6.5-1.4.8-2z" />
    </svg>
  );
}

export function GoogleIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.9 11.2h-3.9v-2.4h6.3c.1.4.1.9.1 1.4 0 3.7-2.5 6.4-6.4 6.4a7.8 7.8 0 1 1 0-15.6c2.1 0 4 .8 5.4 2.1l-2.2 2.2c-.8-.7-1.9-1.3-3.2-1.3a4.8 4.8 0 1 0 4.6 6.1z" />
    </svg>
  );
}

export function CodeBracesIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" />
      <path d="M16 21h2a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-2" />
    </svg>
  );
}

export function ServerLayersIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="5" rx="1.5" />
      <rect x="2" y="10.5" width="20" height="5" rx="1.5" />
      <rect x="2" y="18" width="20" height="5" rx="1.5" />
      <circle cx="6" cy="5.5" r="1" fill="currentColor" />
      <circle cx="6" cy="13" r="1" fill="currentColor" />
      <circle cx="6" cy="20.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function SecurityServerIcon({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="2" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="5" r="1" fill="currentColor" />
      <path d="M12 11c3.5 0 7 1.5 7 4.5 0 4.5-5 7.5-7 8.5-2-1-7-4-7-8.5 0-3 3.5-4.5 7-4.5Z" />
      <polyline points="10 16 12 18 15 14" />
    </svg>
  );
}
