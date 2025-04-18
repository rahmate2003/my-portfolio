// src/components/Experience.jsx
const experiences = [
        {
        company: "PT. Media Kreasi Abadi",
        position: "Backend Developer",
        duration: "Mar 2025 - May 2025",
        description: [
            "Membangun REST API untuk platform POS, SCM dan CRM",
            "Mengonfigurasi dan mengelola infrastruktur cloud, termasuk pengaturan server virtual, penyimpanan data, dan pengelolaan jaringan.",

        ]
    },
    {
        company: "MSIB Kampus Merdeka - Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
        position: "Cloud Computing",
        duration: "Feb 2024 - Juli 2024",
        description: [
            "Memahami dasar-dasar teknologi cloud computing yang memungkinkan penyimpanan data, pengolahan, dan pengelolaan sumber daya secara fleksibel dan efisien melalui internet.",
            "Mengonfigurasi dan mengelola infrastruktur cloud, termasuk pengaturan server virtual, penyimpanan data, dan pengelolaan jaringan.",
            "Menguasai layanan cloud spesifik seperti Google Compute Engine, Google Cloud Storage.",

        ]
    },
    {
         company: "Kantor Kesyahbandaran dan Otoritas Pelabuhan Samarinda",
  position: "IT Support dan Akuntansi Internship",
  duration: "Juni 2019 - Desember 2019",

        description: [
    "Memberikan dukungan teknis untuk infrastruktur IT kantor, termasuk menangani masalah perangkat keras dan perangkat lunak agar operasional harian berjalan lancar.",
    "Membantu memelihara dan memperbarui sistem komputer dan jaringan.",
    "Melakukan entri data pemasukan dan pengeluaran Pajak dan Administrasi Kapal.",
    "Mencetak Kwitansi dan penyusunan laporan keuangan bulanan."
        ]
    },
    // Add more experiences...
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white animate-fade-in-down">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        <span className="typing-text">Pengalaman</span>
                    </h2>
                    <div className="mt-16 space-y-10">
                        {experiences.map((experiences, index) => (
                            <div key={index} className="relative animate-slide-in-up">
                                <div className="relative">
                                    {/* Company */}
                                    <h3 className="text-xl font-semibold text-indigo-600">
                                        <span className="typing-text">{experiences.position}</span>
                                    </h3>

                                    {/* Company */}
                                    <span className="typing-text text-lg font-medium text-gray-800 italic">{experiences.company}</span>

                                    {/* Duration */}
                                    <br></br>
                                    <span className="typing-text mt-1 text-sm text-gray-500">{experiences.duration}</span>

                                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                                        {experiences.description.map((item, idx) => (
                                            <li key={idx} className={`typing-text delay-${idx * 300}`}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
