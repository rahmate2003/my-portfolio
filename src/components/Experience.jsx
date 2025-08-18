const experiences = [

  {
    company: "PT. Eramart at Head Office Lembuswana Samarinda",
    position: "Staff IT",
    duration: "Jun 2025 - Present",
    description: [
      // "Menganalisis dan memetakan alur proses bisnis ERP (Buyer, Accounting, POS dll) dari sistem yang ditawarkan oleh vendor baru.",
      "Melakukan evaluasi terhadap kesesuaian sistem ERP baru (Purchasing, Accounting, POS dll) dengan kebutuhan operasional Eramart.",
      "Bekerja sama dengan vendor dalam implementasi dan pengujian sistem keamanan, blackbox & smoke testing untuk memastikan integrasi yang optimal dengan proses internal perusahaan sebelumnya.",
      "Instalasi, Repair, Troubleshooting Hardware (PC) dan Software POS Eramart untuk Head Office dan 84 Toko (Windows/Linux)",
      "Instalasi, Repair, Troubleshooting Jaringan Komputer (Router, Switch, Access Point) untuk Head Office dan 84 Toko.",
      "Instalasi, Repair, Troubleshooting CCTV untuk Head Office dan 84 Toko.",
    ],
  },
  {
    company: "PT. Media Kreasi Abadi",
    position: "Backend Web Developer (Magang)",
    duration: "Mar 2025 - May 2025",
    description: [
      "Merancang dan Membangun database dan backend REST API platform prototipe ERP NukaPOS menggunakan Node.js dan Redis.",
      "Mengembangkan dan mengintegrasikan REST API untuk sistem manajemen inventaris, penjualan, dan laporan.",
      "Menerapkan autentikasi dan otorisasi pengguna menggunakan JWT (JSON Web Tokens)",
      "Merancang dan Membangun ERD Database MYSQL",
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
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 animate-fade-in-down">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent typing-text">
                Pengalaman Kerja
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-7xl mx-auto">
              Perjalanan karir dan pengalaman profesional yang telah membentuk keahlian saya
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  {/* Experience Card */}
                  <div className="md:ml-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          <span className="typing-text">{experience.position}</span>
                        </h3>
                        <p className="text-lg font-semibold text-indigo-600 mb-2">
                          <span className="typing-text">{experience.company}</span>
                        </p>
                      </div>
                      <div className="flex items-center mt-4 lg:mt-0">
                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
                          <span className="text-sm font-semibold text-indigo-800 typing-text">
                            📅 {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-100 to-teal-100 text-green-800">
                        {index === 0 ? '🔥 Current' : `💼 Experience ${experiences.length - index}`}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      {experience.description.map((item, idx) => (
                        <div key={idx} className="flex items-start p-4 bg-gray-50/50 rounded-xl hover:bg-indigo-50/30 transition-colors duration-300">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed typing-text">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Skills Tags */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {/* Dynamic skill tags based on experience */}
                        {index === 0 && (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Hardware</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Networking</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Software</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">ERP</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">CCTV</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Node.js</span>
                            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Redis</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">REST API</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Google Cloud</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Backend</span>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">IT Support</span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Accounting</span>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Freelance</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">PC Assembly</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
