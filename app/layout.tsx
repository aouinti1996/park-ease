import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ParkEase - Smart Parking Solutions',
  description: 'Find and reserve parking spots with ease',
}

function ParkingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
  )
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen flex flex-col">
        <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="rounded-full bg-blue-500 p-2">
                  <ParkingIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ParkEase</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                {[
                  ['Home', '/'],
                  ['Reservations', '/reservations'],
                  ['Settings', '/settings'],
                ].map(([label, href]) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-4">
                <Link
                    href="/login"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                    href="/signup"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 pt-16">
          {children}
        </main>
      </div>
      </body>
      </html>
  )
}

