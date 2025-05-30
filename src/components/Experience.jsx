const experiences = [
    
    {
      company: "PT. Media Kreasi Abadi",
      position: "Backend Web Developer (Magang)",
      duration: "Mar 2025 - May 2025",
      description: [
        "Merancang dan Membangun database dan backend REST API platform prototipe ERP NukaPOS menggunakan Node.js, MySQL dan Redis.",
        "Mengintegrasikan REST API dengan caching Redis.",
        "Menerapkan Git dan CI/CD untuk otomatisasi build, test, dan deployment.",
        "Menggunakan Docker untuk containerization layanan backend.",
      ],
    },
    {
      company: "Bangkit Academy by Google, GoTo, Traveloka",
      position: "Cloud Computing (MSIB)",
      duration: "Feb 2024 - Jul 2024",
      description: [
        "Melakukan penerapan Google Cloud Platform (GCP) untuk virtualisasi, auto-scaling, dan manajemen backend.",
        "Mengembangkan backend aplikasi proyek akhir CalorieWise untuk pelacakan nutrisi dan data makanan beserta kandungannya.",
        "Berkolaborasi dalam tim capstone (cloud computing, mobile development & machine learning) untuk menyelesaikan proyek akhir.",
      ],
    },
    {
      company: "Bendahara Kantor Kesyahbandaran dan Otoritas Pelabuhan Samarinda",
      position: "IT Support & Akuntan (Magang)",
      duration: "Jun 2019 - Dec 2019",
      description: [
        "Troubleshooting infrastruktur IT terkait masalah perangkat keras, perangkat lunak & jaringan komputer pegawai.",
        "Menginput, menyusun dan merekap pembayaran PNBP (Penerimaan Negara Bukan Pajak) terkait pelayanan kapal melalui sistem SIMLALA.",
        "Membuat, mencetak dan mengarsipkan kwitansi secara manual dan digital sebagai bagian dari pelaporan.",
      ],
    },
    {
        company: "Freelance",
        position: "Instalasi, Troubleshooting Software & Perakitan Komputer",
        duration: "Jan 2025 - Present",
        description: [
          "Instalasi, Troubleshooting sistem operasi Windows/Linux dan mengkonfigurasi perangkat keras untuk 20+ pelanggan",
        ],
      },
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
              {experiences.map((experience, index) => (
                <div key={index} className="relative animate-slide-in-up">
                  <div className="relative">
                    {/* Position */}
                    <h3 className="text-xl font-semibold text-indigo-600">
                      <span className="typing-text">{experience.position}</span>
                    </h3>
  
                    {/* Company */}
                    <span className="typing-text text-lg font-medium text-gray-800 italic">{experience.company}</span>
  
                    {/* Duration */}
                    <br></br>
                    <span className="typing-text mt-1 text-sm text-gray-500">{experience.duration}</span>
  
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                      {experience.description.map((item, idx) => (
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
  