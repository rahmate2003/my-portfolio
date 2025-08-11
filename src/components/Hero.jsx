export default function Hero() {
    return (
        
        <div id="beranda" className="relative min-h-screen flex items-center justify-center">
            {/* Background dengan overlay gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/bg-hero2.jpg')", // Tambahkan gambar background ke folder public
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 animate-fade-in-down">
                <div className="text-center">
                    {/* Profile Image */}
                    <div className="mb-8 relative inline-block">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto transform transition duration-500 hover:scale-105">
                            <img
                                src="/pasfoto.jpg" // Tambahkan foto profil ke folder public
                                alt="Rahmat Wahyudi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Animated ring effect */}
                        <div className="absolute inset-0 rounded-full border-4 border-indigo-500/50 animate-pulse"></div>
                    </div>

                    {/* Name and Title with glass effect background */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 animate-fade-in-down">
                        <span className="typing-text">Rahmat Wahyudi</span>
                    </h1>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        <span className="typing-text delay-100">Backend Developer</span> |
                        <span className="typing-text delay-600"> Cloud Computing</span> |
                        <span className="typing-text delay-900"> Network</span>
                    </p>
                    <div className="mt-4 flex justify-center space-x-6 mb-8">
                        <a href="https://github.com/rahmate2003" target="_blank" rel="noopener noreferrer" className="group text-sm font-semibold text-white transition-all duration-300 hover:text-indigo-400">
                            <span className="typing-text sr-only">GitHub</span>
                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/rhmtw" target="_blank" rel="noopener noreferrer" className="group text-sm font-semibold text-white transition-all duration-300 hover:text-indigo-400">
                            <span className="typing-text sr-only">LinkedIn</span>
                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        {/* <a
                            href="https://instagram.com/matterizz_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-sm font-semibold text-white transition-all duration-300 hover:text-indigo-400"
                        >
                            <span className="typing-text sr-only">Instagram</span>
                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5a4.25 4.25 0 01-4.25-4.25v-8.5a4.25 4.25 0 014.25-4.25zm4.25 3.75a4 4 0 100 8 4 4 0 000-8zm0 1.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.25-.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
                            </svg>
                        </a> */}
                    </div>

                    {/* Buttons with enhanced styling */}
                    <div className="flex items-center justify-center gap-x-6 animate-fade-in-up">
                        <a href="https://drive.google.com/file/d/1z9LYgg8LimT_maJjp0Noo9AbS2777nYs/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                            download  // Menambahkan atribut download
                            className="animate-slide-in-left animated-button bg-indigo-600 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                        >
                            Resume
                        </a>
                        <a
                            href="#projects"
                            className="animate-slide-in-right group text-sm font-semibold text-white transition-all duration-300 hover:text-indigo-300"
                        >
                            Lihat Projek
                            <span className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-5 left-1/2-1 transform -translate-x-1/2 text-center animate-bounce">
                <a
                    href="#about"
                    className="group text-sm font-semibold text-white transition-all duration-300 hover:text-indigo-400"
                >
                    <svg
                        className="h-14 w-14 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 36 36"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
