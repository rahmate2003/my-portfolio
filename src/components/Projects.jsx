// Remove Slider imports as they are no longer needed
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Website Company Profile PT. Daniswara Berkah Perkasa",
    type: "Projek Kolaborasi",
    duration: "Agustus 2025 - Agustus 2025",
    description: [
      "Membuat Website Dinamis menggunakan Laravel Filament dan MySQL",
      "Membuat Tampilan Modern dengan menerapkan standar Responsive dan Animasi yang menarik",
      "Membuat CMS (Content Management System) untuk Blog, Rental Alat Berat, dan Safety Device",
    ],
    technologies: ["Laravel", "Filament", "MYSQL"],
    link: "daniwaraberkahperkasa.com",
    images: ["/6.png"],
  },
  {
    title: "Website Jurusan dan Prodi Teknologi Informasi Politeknik Negeri Samarinda",
    type: "Projek Kolaborasi",
    duration: "Juni 2025 - Juli 2025",
    description: [
      "Membuat Website menggunakan NextJS",
      "Membuat Tampilan Modern dengan menerapkan standar Responsive dan Animasi yang menarik",
    ],
    technologies: ["Node.js", "NextJS"],
    link: "trk.polnes.ac.id",
    images: ["/5.png"],
  },
  {
    title: "DonaChain (a Platform Donation Web3 run on Base L2 EVM Blockchain made for creators)",
    type: "Projek Individu",
    duration: "Juni 2025 - Juni 2025",
    description: [
      "Built with Next.js 15 & TypeScript",
      "Web3 Integration with Wagmi.",
      "Smart Contract Integration(Base L2 EVM Chain)",
      "USDC Donation Support",
      "Hardhat for Smart Contract Development & Testing",
      "Creator Registration, Secure Wallet Integration and Real-time Balance Tracking",
      "Donation shortlink with username.example: donachain.vercel.app/rhmtw",
    ],
    technologies: ["Node.js", "Smart Contract", "Solidity", "HardHat", "Wagmi", "Web3", "Blockchain", "Base L2 EVM Blockchain", "NextJS"],
    link: "https://github.com/rahmate2003/donachain",
    images: ["/a.png", "b.png", "c.png", "d.png", "e.png"],
  },
  {
    title: "Nuka (ERP untuk UMKM)",
    type: "PT. Media Kreasi Abadi",
    duration: "Mar 2025 - May 2025",
    description: [
      "Merancang sistem berbasis SDLC dan database untuk ERP.",
      "Membangun backend REST API menggunakan Node.js, Express, MySQL, dan Redis untuk mendukung fitur POS, SCM, dan CRM.",
      "Mengimplementasikan Role Based Access Control (RBAC) dengan dukungan multi-role.",
      "Mengelola manajemen tenant, toko, produk, transaksi, dan penjualan untuk multi-tenant.",
      "Meningkatkan efisiensi operasional UMKM.",
      "Mengintegrasikan caching Redis untuk mengoptimalkan performa aplikasi."
    ],
    technologies: ["Node.js", "Express", "MySQL", "Redis", "REST API", "RBAC", "Docker", "CI/CD"],
    link: "https://github.com/rahmate2003/",
    images: ["/project-image3.png"],
  },

  {
    title: "Frontend dan Backend REST API untuk Pelacakan Kendaraan berbasis IoT ",
    type: "Projek Kolaborasi",
    duration: "Mar 2025 - April 2025",
    description: [
      "Merancang dan membangun database menggunakan MongoDB dengan Role Based Access Control (RBAC).",
      "Membangun REST API untuk mengelola data perangkat, pengguna, dan pelacakan kendaraan menggunakan modul GPS.",
      "Mengirimkan data lokasi kendaraan dari ESP32 ke gateway melalui modul LoRa SX1278 secara real-time.",
      "Menyediakan tampilan peta menggunakan OpenStreetMap API dan riwayat lokasi kendaraan, lengkap dengan manajemen pengguna.",
      "Mengandalkan LoRa untuk area tanpa sinyal seluler dengan jangkauan 5-10 km, dengan sinkronisasi saat koneksi tersedia.",
      "Menyimpan data ke SD card jika sinyal LoRa tidak tersedia."
    ],
    technologies: ["Node.js", "Express", "MongoDB", "LoRa SX1278", "OpenStreetMap API", "ESP32", "REST API", "RBAC"],
    link: "https://github.com/rahmate2003/",
    images: ["/1.png", "2.png", "3.png", "4.png"],
  },
  {
    title: "Prototipe Website Sistem Pemilihan Elektronik Berbasis Blockchain untuk Pemilihan Presiden dan Wakil Presiden BEM Polnes",
    type: "Skripsi",
    duration: "Jul 2024 - Dec 2024",
    description: [
      "Mengembangkan smart contract pada Ethereum untuk pemilihan Presiden BEM Polnes guna menjamin transparansi dan keamanan.",
      "Membangun website untuk sistem pemilihan elektronik.",
      "Meningkatkan efisiensi waktu pra dan pasca pemilihan."
    ],
    technologies: ["Solidity", "Ethereum Blockchain", "Smart Contract", "Web Development"],
    link: "https://github.com/rahmate2003/",
    images: ["/project-image.jpg"],
  },
  {
    title: "CalorieWise",
    type: "Capstone Proyek Akhir Bangkit Academy",
    duration: "Mar 2024 - Jul 2024",
    description: [
      "Merancang dan membangun database serta backend REST API menggunakan Google Cloud, Node.js, Express.js, dan MySQL.",
      "Mendukung pelacakan nutrisi pada makanan.",
      "Mengelola pelacakan nutrisi makanan harian, mingguan, dan bulanan.",
      "Mengelola data makanan."
    ],
    technologies: ["Google Cloud", "Node.js", "Express.js", "MySQL", "REST API"],
    link: "https://github.com/rahmate2003/CalorieWise",
    images: ["/project-image2.jpg"],
  },
];
export default function Projects() {
  const getProjectIcon = (type) => {
    switch (type) {
      case 'Projek Kolaborasi': return '🤝';
      case 'Projek Individu': return '👤';
      case 'Skripsi': return '🎓';
      case 'Capstone Proyek Akhir Bangkit Academy': return '🚀';
      default: return '💼';
    }
  };

  const getProjectColor = (index) => {
    const colors = [
      'from-blue-500 to-indigo-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-cyan-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-slate-600 via-gray-700 to-zinc-800 bg-clip-text text-transparent">
                Portfolio Projek
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Kumpulan projek yang telah saya kerjakan, mulai dari pengembangan web, blockchain, hingga sistem IoT
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Images */}
                <div className="relative overflow-hidden">
                  <div className="flex flex-wrap gap-0">
                    {project.images.map((image, idx) => (
                      <div
                        key={idx}
                        className={`${project.images.length === 1
                          ? "w-full h-80"
                          : project.images.length <= 2
                            ? "w-1/2 h-64"
                            : "w-1/3 h-48"
                          } relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                      >
                        <img
                          src={image || "/placeholder-image.jpg"}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getProjectColor(index)} shadow-lg`}>
                      <span className="mr-2">{getProjectIcon(project.type)}</span>
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">📅 {project.duration}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mb-6">
                    <div className="space-y-3">
                      {project.description.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">🛠️</span>
                      Teknologi yang Digunakan
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-800 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  {project.link && (
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-2">🔗</span>
                        <span>Lihat detail projek</span>
                      </div>
                      <a
                        href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${getProjectColor(index)} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                      >
                        <span className="mr-2">🚀</span>
                        Lihat Projek
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}