


export function Logo({ isFooter = false }) {
  return (
    <div className={`flex items-center space-x-2 ${isFooter ? "text-white" : ""}`}>
      <img
        src="/images/Profer logo.png"
        alt="Profer Logo"
        className="h-8 w-auto object-contain"
      />
      <img
        src="/images/logo.png"
        alt="Secondary Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}
