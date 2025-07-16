import { Logo } from "./Logo";
import { UserBadge } from "./UserBadge";


export function Header() {
  return (
    <>
     {/* Nav top */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Logo />
          <nav className="hidden md:flex space-x-8 text-gray-400 text-sm font-semibold">
            <a href="#" className="hover:text-gray-600 transition">
              Search for Pros
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              Project Auction
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              Why Profer
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              How it Works
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              Profer Network
            </a>
          </nav>
        </div>

        <div className="space-x-3 flex items-center ml-auto">
          <button className="hidden md:inline-block rounded-full border border-gray-400 px-4 py-1.5 text-sm font-medium hover:bg-gray-100 transition">
            Sign In
          </button>
          <button className="rounded-full bg-red-600 py-1.5 px-5 text-sm text-white font-semibold hover:bg-red-700 transition">
            Join Profer
          </button>
          <UserBadge />
        </div>
      </header>
    
    </>
  );
}