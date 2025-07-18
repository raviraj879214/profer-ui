import Link from 'next/link';

export function SignIn() {
  return (
    <>

    
      <main className="max-w-md mx-auto px-4 py-12 mt-16">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700 text-sm space-x-2">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="bg-[#0a113c] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#080d2b] transition"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-sm mt-16">
          Don't have an account?
          <Link href="/register" className="text-cyan-400 ml-1 hover:underline">
            Register Now
          </Link>
        </p>
      </main>
    </>
  );
}
