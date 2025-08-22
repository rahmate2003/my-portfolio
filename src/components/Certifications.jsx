const certifications = [
    {
        title: "MSIB Kampus Merdeka - Bangkit Academy led by Google, Gojek, Tokopedia & Traveloka",
        image: "/cert1.jpg",
    },
    {
        title: "MSIB Kampus Merdeka - Studi Independen",
        image: "/cert10.jpg",
    },
    {
        title: "CCNA - ENSA",
        image: "/cert8.jpg",
    },
    {
        title: "CCNA - SRWE",
        image: "/cert9.jpg",
    },
    {
        title: "CCNA - IT ESSENTIALS",
        image: "/cert11.jpg",
    },
    {
        title: "TOEFL - Prediction Test (477)",
        image: "/toefl_1.png",
    },
    {
        title: "Coursera - Technical Support Fundamentals",
        image: "/cert13.jpg",
    },
    {
        title: "Coursera - Bits and Bytes of Computer Networking",
        image: "/cert12.jpg",
    },
    {
        title: "Dicoding - Belajar dasar AI",
        image: "/cert2.jpg",
    },
    {
        title: "Dicoding - Belajar Penerapan ML dengan Google Cloud",
        image: "/cert3.jpg",
    },
    {
        title: "Dicoding - Belajar Membuat Backend untuk Pemula dengan Google Cloud",
        image: "/cert4.jpg",
    },
    {
        title: "Dicoding - Belajar dasar pemrograman JavaScript",
        image: "/cert5.jpg",
    },
    {
        title: "Dicoding - Belajar dasar pemrograman Web",
        image: "/cert6.jpg",
    },
    {
        title: "Dicoding - Menjadi Google Cloud Engineer",
        image: "/cert7.jpg",
    },
];

import { useState } from 'react';

export default function Certification() {
    const [selectedImage, setSelectedImage] = useState(null);

    const getCertificationProvider = (title) => {
        if (title.includes('Bangkit Academy')) return { icon: '🚀', color: 'from-blue-500 to-indigo-600' };
        if (title.includes('CCNA')) return { icon: '🌐', color: 'from-green-500 to-teal-600' };
        if (title.includes('Coursera')) return { icon: '🎓', color: 'from-purple-500 to-pink-600' };
        if (title.includes('Dicoding')) return { icon: '💻', color: 'from-orange-500 to-red-600' };
        if (title.includes('MSIB')) return { icon: '🏆', color: 'from-indigo-500 to-purple-600' };
        return { icon: '📜', color: 'from-gray-500 to-slate-600' };
    };

    const getProviderStats = () => {
        const providers = {
            'Dicoding': certifications.filter(cert => cert.title.includes('Dicoding')).length,
            'CCNA': certifications.filter(cert => cert.title.includes('CCNA')).length,
            'Coursera': certifications.filter(cert => cert.title.includes('Coursera')).length,
            'Bangkit Academy': certifications.filter(cert => cert.title.includes('Bangkit Academy')).length,
            'MSIB': certifications.filter(cert => cert.title.includes('MSIB')).length
        };
        return providers;
    };

    return (
        <section id="certifications" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Sertifikat & Pencapaian
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Koleksi sertifikat profesional yang menunjukkan komitmen terhadap pembelajaran berkelanjutan dan pengembangan keahlian
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
                    {certifications.map((cert, index) => {
                        const provider = getCertificationProvider(cert.title);
                        return (
                            <div
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Certificate Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                        onClick={() => setSelectedImage(cert.image)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Provider Badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${provider.color} shadow-lg`}>
                                            <span className="mr-1">{provider.icon}</span>
                                            Verified
                                        </span>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(cert.image);
                                    }}
                                    >


                                        <div
                                            className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage(cert.image);
                                            }}
                                        >
                                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Certificate Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                                                {cert.title}
                                            </h3>
                                        </div>
                                        <div className="ml-2 flex-shrink-0">
                                            <span className="text-2xl">{provider.icon}</span>
                                        </div>
                                    </div>

                                    {/* Certificate Status */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            <span>Tersertifikasi</span>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            #{String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Provider Statistics */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Statistik Sertifikasi</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {Object.entries(getProviderStats()).map(([provider, count]) => (
                                <div key={provider} className="text-center">
                                    <div className="text-2xl mb-1">
                                        {getCertificationProvider(provider).icon}
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">{provider}</div>
                                    <div className="text-lg font-bold text-indigo-600">{count}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Certificate Preview"
                            className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
