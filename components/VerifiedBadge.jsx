export default function VerifiedBadge({ className = '' }) {
  return (
    <span
      title="Details confirmed by the operator"
      className={`inline-flex items-center gap-1.5 rounded-full bg-[#1e3a8a] px-3 py-1 text-xs font-bold text-white shadow-sm ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3z" fill="currentColor" stroke="none" />
        <path d="m8.5 12 2.5 2.5 4.5-5" stroke="#1e3a8a" />
      </svg>
      Verified
    </span>
  )
}
