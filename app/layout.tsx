import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
        <html lang="en" >
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />
        </head>
        <body className={cn(
            inter.className,
            "min-h-screen bg-gray-950 text-gray-100"
        )}>
        <div className="min-h-screen flex flex-col">
            <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="rounded-full bg-blue-600 p-2">
                                <ParkingIcon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">ParkEase</span>
                        </Link>
                        <nav className="hidden md:flex space-x-8">
                            {[
                                ['Home', '/'],
                                ['How It Works', '/#how-it-works'],
                                ['Features', '/#features'],
                                ['About', '/#about'],
                                ['FAQ', '/#faq'],
                                ['Blog', '/#blog'],
                            ].map(([label, href]) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-gray-300 hover:text-white transition-colors relative group"
                                >
                                    {label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
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
                                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
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
            <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">ParkEase</h3>
                            <p className="text-sm">Making parking smarter and easier for everyone.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">Contact</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                            <div className="flex space-x-4">
                                {[
                                    ['facebook', 'Facebook'],
                                    ['twitter', 'Twitter'],
                                    ['instagram', 'Instagram'],
                                    ['linkedin', 'LinkedIn'],
                                ].map(([icon, label]) => (
                                    <Link
                                        key={icon}
                                        href="#"
                                        className="text-2xl hover:text-blue-400 transition-transform hover:scale-110"
                                        aria-label={label}
                                    >
                                        <i className={`fab fa-${icon}`} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Download App</h4>
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
                                >
                                    App Store
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
                                >
                                    Google Play
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                        © {new Date().getFullYear()} ParkEase. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
        </body>
        </html>
    )
}

