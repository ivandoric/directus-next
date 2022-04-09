import Link from 'next/link';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { status } = useSession();

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="font-black">THE SHOP</a>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {status === 'authenticated' ? (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
              <Link href="/user-area">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  User area
                </a>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/sign-in">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
              </Link>
              <Link href="/sign-up">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
              </Link>
            </div>
          )}

        </div>
      </div>

      <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/">
                  <a className="font-black">THE SHOP</a>
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <Link href="/sign-up">
                <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <Link href="/sign-in">
                  <a className="text-indigo-600 hover:text-indigo-500">Sign in</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
