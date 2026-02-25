// Cognytia logo: "C" formed by connected nodes and lines
export default function LogoSVG({ className = 'h-8 w-auto' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cognytia Solutions"
    >
      {/* Connection lines */}
      <line x1="60" y1="10" x2="22" y2="30" stroke="#3DBCB8" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <line x1="60" y1="10" x2="98" y2="30" stroke="#3DBCB8" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="22" y1="30" x2="12" y2="60" stroke="#3DBCB8" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <line x1="12" y1="60" x2="22" y2="90" stroke="#3DBCB8" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <line x1="22" y1="90" x2="60" y2="110" stroke="#3DBCB8" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <line x1="60" y1="110" x2="98" y2="90" stroke="#3DBCB8" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="22" y1="30" x2="22" y2="90" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      <line x1="22" y1="60" x2="12" y2="60" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>

      {/* Nodes — primary arc (the C shape) */}
      <circle cx="60" cy="10" r="5" fill="#3DBCB8"/>
      <circle cx="22" cy="30" r="5" fill="#3DBCB8"/>
      <circle cx="12" cy="60" r="6" fill="#3DBCB8"/>
      <circle cx="22" cy="90" r="5" fill="#3DBCB8"/>
      <circle cx="60" cy="110" r="5" fill="#3DBCB8"/>

      {/* Nodes — secondary (open end hints) */}
      <circle cx="98" cy="30" r="3.5" fill="#3DBCB8" opacity="0.4"/>
      <circle cx="98" cy="90" r="3.5" fill="#3DBCB8" opacity="0.4"/>

      {/* Inner accent node */}
      <circle cx="22" cy="60" r="3" fill="#0A2E2E" opacity="0.6"/>
    </svg>
  )
}

// Watermark version — subtle outline for section backgrounds
export function LogoWatermark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="60" y1="10" x2="22" y2="30" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="60" y1="10" x2="98" y2="30" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="22" y1="30" x2="12" y2="60" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="60" x2="22" y2="90" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="22" y1="90" x2="60" y2="110" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="60" y1="110" x2="98" y2="90" stroke="#3DBCB8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="60" cy="10" r="4" stroke="#3DBCB8" strokeWidth="1.5"/>
      <circle cx="22" cy="30" r="4" stroke="#3DBCB8" strokeWidth="1.5"/>
      <circle cx="12" cy="60" r="5" stroke="#3DBCB8" strokeWidth="1.5"/>
      <circle cx="22" cy="90" r="4" stroke="#3DBCB8" strokeWidth="1.5"/>
      <circle cx="60" cy="110" r="4" stroke="#3DBCB8" strokeWidth="1.5"/>
      <circle cx="98" cy="30" r="3" stroke="#3DBCB8" strokeWidth="1.5"/>
      <circle cx="98" cy="90" r="3" stroke="#3DBCB8" strokeWidth="1.5"/>
    </svg>
  )
}
