const projects = [
    {
      title: "Nuka (ERP untuk UMKM)",
      type: "PT. Media Kreasi Abadi",
      duration: "Mar 2025 - May 2025",
      description:
        "Merancang sistem berbasis SDLC, database dan Membangun backend REST API ERP menggunakan Node.js, Express, MySQL dan Redis dalam mendukung fitur POS, SCM dan CRM. Membangun sistem berbasis Role Based Access Control dengan multi role. Memungkinkan manajemen tenant, toko, produk, transaksi, penjualan untuk multi tenant dan dapat meningkatkan efisiensi operasional UMKM. Mengintegrasikan caching Redis untuk mengoptimalkan performa aplikasi.",
      technologies: ["Node.js", "Express", "MySQL", "Redis", "REST API", "RBAC", "Docker", "CI/CD"],
      link: "https://github.com/rahmate2003/",
      image: "/project-image3.png",
    },
    {
      title:
        "Prototipe Website Sistem Pemilihan Elektronik Berbasis Blockchain untuk Pemilihan Presiden dan Wakil Presiden BEM Polnes",
      type: "Skripsi",
      duration: "Jul 2024 - Dec 2024",
      description:
        "Mengembangkan dan Membangun smart contract pada Ethereum untuk pemilihan Presiden BEM Polnes untuk menjamin transparansi dan keamanan pada pemilihan. Mengembangkan dan Membangun Website. Efisiensi waktu pra dan pasca pemilihan.",
      technologies: ["Solidity", "Ethereum Blockchain", "Smart Contract", "Web Development"],
      link: "https://github.com/rahmate2003/",
      image: "/project-image.jpg",
    },
    {
      title: "CalorieWise",
      type: "Capstone Proyek Akhir Bangkit Academy",
      duration: "Mar 2024 - Jul 2024",
      description:
        "Merancang dan Membangun database dan backend REST API menggunakan Google Cloud, Node.JS, ExpressJS dan MySQL untuk mendukung pelacakan nutrisi pada makanan. Manajemen pelacakan nutrisi makanan harian, mingguan dan bulanan. Mengelola Data Makanan.",
      technologies: ["Google Cloud", "Node.js", "Express.js", "MySQL", "REST API"],
      link: "https://github.com/rahmate2003/CalorieWise",
      image: "/project-image2.jpg",
    },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="py-24 bg-gray-50 animate-slide-in-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Projek</h2>
            <div className="mt-16 space-y-20">
              {projects.map((project, index) => (
                <div key={index} className="relative">
                  <div className="group relative">
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 max-h-[600px]">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
  
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-indigo-700">
                        <a>{project.title}</a>
                      </h3>
                      {/* Type */}
                      <span className="typing-text text-lg font-medium text-gray-800 italic">{project.type}</span>
  
                      {/* Duration */}
                      <br></br>
                      <span className="typing-text mt-1 text-sm text-gray-500">{project.duration}</span>
                      <p className="mt-2 text-gray-600">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
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
    )
  }
  