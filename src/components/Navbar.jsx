// src/components/Navbar.jsx
import { useState } from 'react'

const navigation = [
    { name: 'Tentang', href: '#about' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Projek', href: '#projects' },
    { name: 'Skill', href: '#skills' },
    { name: 'Kontak', href: '#contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full bg-white glass-effect shadow-sm z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    {/* <a href="#" className="gradient-text text-xl font-bold transform transition duration-300 hover:scale-105">
                        Rahmat Wahyudi
                    </a> */}
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="hover-shadow rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="nav-link text-sm font-semibold gradient-text"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            {/* Mobile menu with slide animation */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="fixed inset-y-0 right-0 z-50 w-full glass-effect px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="gradient-text text-xl font-bold">
                            Rahmat Wahyudi
                        </a>
                        <button
                            type="button"
                            className="hover-shadow rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}