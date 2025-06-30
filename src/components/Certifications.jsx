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
    {
        title: "CCNA - ENSA",
        image: "/cert8.jpg",
    },
    {
        title: "CCNA - SRWE",
        image: "/cert9.jpg",
    },
];

export default function Certification() {
    return (
        <section id="certifications" className="py-24 bg-white animate-slide-in-left">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                    Sertifikat
                </h2>
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg shadow-md overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-56 object-cover object-center"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-sm font-medium text-gray-900">{cert.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
