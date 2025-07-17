


export function Logo({ isFooter = false }) {
  return (
    <div className={`flex items-center space-x-1 ${isFooter ? "text-white" : ""}`}>
       <img src="/images/Profer logo.png" alt="Logo" />
      <img src="/images/logo.png" alt="Logo" />
    </div>
  );
}