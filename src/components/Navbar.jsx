import { useState, useEffect } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigation = [
        { name: 'Tentang', href: '#about' },
        { name: 'Pendidikan', href: '#education' },
        { name: 'Pengalaman', href: '#experience' },
        { name: 'Projek', href: '#projects' },
        { name: 'Sertifikat', href: '#certifications' },
        { name: 'Skill', href: '#skills' },
        { name: 'Kontak', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={` fixed w-full z-50 transition-all duration-300 glass-effect bg-white/90 
            }`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="gradient-text text-xl font-bold">

                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d={mobileMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="gradient-text nav-link text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>

            <div className={`lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`} onClick={() => setMobileMenuOpen(false)} />

            <div className={`lg:hidden fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        <span className="gradient-text text-lg font-semibold">Menu</span>
                        <button
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="p-4">
                    {navigation.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block py-3 px-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors mb-1"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                                transition: 'all 0.3s ease-in-out'
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}