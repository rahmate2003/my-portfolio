// Remove Slider imports as they are no longer needed
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const projects = [
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
    title: "DonaChain (a Platform Donation Web3 run on Base L2 EVM Blockchain made for creators)",
    type: "Projek Individu",
    duration: "Mar 2025 - May 2025",
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
    title: "Frontend dan Backend REST API untuk Pelacakan Kendaraan berbasis IoT ",
    type: "Projek Kolaborasi",
    duration: "Mar 2025 - May 2025",
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
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Projek</h2>
          <div className="mt-16 space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <div className="group relative">
                  {/* Flex container untuk gambar dengan lebar penuh */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.images.map((image, idx) => (
                      <div
                        key={idx}
                        className={`${project.images.length > 1 ? "w-full sm:w-1/2 lg:w-1/3" : "w-full"
                          }`}
                      >
                        <img
                          src={image || "/placeholder-image.jpg"}
                          alt={`${project.title} image ${idx + 1}`}
                          className="object-cover object-center w-full h-full rounded-lg"
                        />
                      </div>
                    ))}

                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-blue-800">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <span className="text-lg font-medium text-gray-800 italic">{project.type}</span>
                    <br />
                    <span className="text-sm text-gray-600">{project.duration}</span>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                      {project.description.map((item, idx) => (
                        <li key={idx} className="text-base text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}