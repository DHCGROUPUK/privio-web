export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Shield silhouette */}
      <path
        d="M16 2 28 7v9c0 7-5 12-12 14C9 28 4 23 4 16V7Z"
        fill="url(#logoGrad)"
      />
      {/* The "P" */}
      <path
        d="M12 10h6c2.8 0 5 2.2 5 5s-2.2 5-5 5h-3v4h-3Zm3 3v4h3a1.8 1.8 0 0 0 0-4Z"
        fill="#fff"
      />
    </svg>
  );
}
