


export function Logo({ isFooter = false }) {
  return (
    <div className={`flex items-center space-x-1 ${isFooter ? "text-white" : ""}`}>
      <svg
        className={`w-6 h-6 fill-current ${isFooter ? "text-white" : "text-gray-900"}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="14" height="16" rx="2" ry="2" />
        <rect x="18" y="10" width="4" height="2" rx="1" ry="1" fill={isFooter ? "white" : "#e53e3e"} />
      </svg>
      <span className={`font-bold text-xl ${isFooter ? "text-white" : "text-gray-900"}`}>
        Profer
      </span>
    </div>
  );
}