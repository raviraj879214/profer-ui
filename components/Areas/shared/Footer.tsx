import { Logo } from "./Logo";






export  function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo isFooter />
          <span className="text-sm">© 2025 Profer</span>
        </div>
        <div className="space-x-6 text-sm underline flex items-center">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex-shrink-0">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0bfe6e9-13bf-4906-8265-300ce4990723.png"
            alt="Illustration showing two characters working with a ladder and tools on a modern styled background in blue and red tones"
            className="h-24 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </footer>
  );
}
