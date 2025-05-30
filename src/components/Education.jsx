const education = [
    {
        company: "Politeknik Negeri Samarinda",
        position: "D4/S1 Teknik Informatika Multimedia",
        duration: "2021 - 2025",
        gpa: "IPK : 3.91 / 4.0",  // Menambahkan informasi IPK
        description: [
            "Politeknik Negeri Samarinda (Polnes) adalah perguruan tinggi vokasi yang terletak di Samarinda, Kalimantan Timur, Indonesia. Polnes berfokus pada pengembangan pendidikan yang mengarah pada keterampilan praktis dan siap kerja di berbagai bidang industri Polnes memiliki berbagai program studi yang berfokus pada teknologi dan bisnis, dengan fasilitas yang lengkap dan pengajaran berbasis praktik untuk mempersiapkan mahasiswa menghadapi tantangan di dunia kerja. Sebagai lembaga pendidikan tinggi, Polnes juga aktif dalam riset dan pengembangan serta kerja sama dengan berbagai sektor industri untuk meningkatkan kualitas pendidikan dan pengembangan sumber daya manusia."
        ]
    },
    {
        company: "SMK Negeri 14 Samarinda",
        position: "Teknik Komputer dan Jaringan",
        duration: "2018 - 2021",
        gpa: "Ranking 2 Lulusan Terbaik Satu Jurusan",  // Menambahkan informasi IPK
        description: [
            "SMK Negeri 14 Samarinda adalah sekolah menengah kejuruan yang terletak di Samarinda, Kalimantan Timur, Indonesia. Sekolah ini menawarkan berbagai program kejuruan yang bertujuan untuk mempersiapkan siswa dengan keterampilan praktis yang siap digunakan di dunia kerja. Dengan fasilitas yang memadai, SMK Negeri 14 Samarinda fokus pada pengembangan kompetensi di bidang teknis, keterampilan, dan profesionalisme, guna mendukung perkembangan industri lokal dan kebutuhan pasar kerja."
        ]
    },

];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-gray-50 animate-slide-in-left">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        <span className="typing-text">Pendidikan</span>
                    </h2>
                    <div className="mt-16 space-y-10">
                        {education.map((edu, index) => (
                            <div key={index} className="relative animate-slide-in-up">
                                <div className="relative">
                                    {/* Company */}
                                    <h3 className="text-xl font-semibold text-indigo-600">
                                        <span className="typing-text">{edu.position}</span>
                                    </h3>

                                    {/* Company */}
                                    <span className="typing-text text-lg font-medium text-gray-800 italic">{edu.company}</span>

                                    {/* Duration */}
                                    <br></br>
                                    <span className="typing-text mt-1 text-sm text-gray-500">{edu.duration}</span>

                                    <br></br>                                    {/* GPA */}
                                    <span className="typing-text mt-1 text-sm text-gray-500">{edu.gpa}</span>
                                    <br></br>
                                    {/* Description */}
                                    <span className="mt-4 text-gray-700 typing-text max-w-prose mx-auto">{edu.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
