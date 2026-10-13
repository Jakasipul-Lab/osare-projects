export default function VerifiedBadge({ className = '' }) {
  return (
    <span
      title="Details confirmed by the operator"
      className={`inline-block h-[72px] w-[72px] drop-shadow-md ${className}`}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="OSARE verified">
        <defs>
          <path id="osare-stamp-top" d="M 18 50 A 32 32 0 0 1 82 50" />
          <path id="osare-stamp-bottom" d="M 11 50 A 39 39 0 0 0 89 50" />
        </defs>
        <circle cx="50" cy="50" r="49" fill="#ffffff" />
        <circle cx="50" cy="50" r="46" fill="#1e3a8a" />
        <circle cx="50" cy="50" r="43" fill="none" stroke="#ffffff" strokeWidth="1" />
        <circle cx="50" cy="50" r="27" fill="none" stroke="#ffffff" strokeWidth="1" />
        <text fill="#ffffff" fontSize="11" fontWeight="700" letterSpacing="1.5" fontFamily="Arial, Helvetica, sans-serif">
          <textPath href="#osare-stamp-top" startOffset="50%" textAnchor="middle">OSARE</textPath>
        </text>
        <text fill="#ffffff" fontSize="9.5" fontWeight="700" letterSpacing="1" fontFamily="Arial, Helvetica, sans-serif">
          <textPath href="#osare-stamp-bottom" startOffset="50%" textAnchor="middle">VERIFIED</textPath>
        </text>
        <circle cx="12" cy="50" r="1.6" fill="#ffffff" />
        <circle cx="88" cy="50" r="1.6" fill="#ffffff" />
        <path d="M 38 51 L 47 60 L 63 40" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
