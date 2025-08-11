const skills = {
  "Web Developer (backend)": [
    "Protokol dan metode-metode HTTP (GET, POST, PUT, DELETE)",
    "Mengelola dan menganalisis data, merancang REST API",
    "Node.js untuk pengembangan aplikasi backend",
    "Redis untuk caching dan manajemen data sementara",
  ],
  "Microsoft Office": [
    "Microsoft Office (Word, Excel, PowerPoint)",
    "Google Cloud Workspace (Docs, Spreadsheet, Slide)",
  ],
  "Jaringan Komputer (Network)": [
    "Mikrotik, TCP/IP, routing, switching, LAN/VLAN, firewall",
    "Instalasi jaringan komputer, crimping RJ-45, konfigurasi IP",
    "Setting router/access point, pengujian jaringan",
  ],
  "UI/UX Design": [
    "Merancang user interface (UI) modern dan responsif dengan Figma",
    "Membuat wireframe, user flow, dan prototipe interaktif",
  ],
  "Cloud Computing": [
    "Penerapan, pemantauan dan pengelolaan resource pada Google Cloud",
    "Virtualisasi, auto-scaling, dan manajemen backend",
  ],
  "Software dan Hardware Troubleshooting": [
    "Sistem operasi Windows dan Linux",
    "Perangkat keras komputer (CPU, GPU, RAM, penyimpanan)",
    "Merakit PC, konfigurasi BIOS dan instalasi Sistem operasi",
  ],
  "Data Manajemen (SQL dan NoSQL)": ["Merancang ERD, membangun database SQL dan NoSQL", "Query dan mengelola data"],
  "Bahasa Pemrograman": ["JavaScript/TypeScript", "Python", "Java", "Solidity"],
  "CI/CD & Version Control": [
    "Menggunakan Git untuk version control dan kolaborasi tim",
    "Implementasi Continuous Integration dan Deployment (CI/CD)",
    "Menggunakan GitHub Actions untuk pipeline otomatis",
  ],
  "Bahasa Inggris": ["Listening", "Reading", "Writing"],

}

export default function Skills() {
  const skillIcons = {
    "Web Developer (backend)": "💻",
    "Microsoft Office": "📊",
    "Jaringan Komputer (Network)": "🌐",
    "UI/UX Design": "🎨",
    "Cloud Computing": "☁️",
    "Software dan Hardware Troubleshooting": "🔧",
    "Data Manajemen (SQL dan NoSQL)": "🗄️",
    "Bahasa Pemrograman": "⚡",
    "CI/CD & Version Control": "🚀",
    "Bahasa Inggris": "🌍"
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-amber-600 bg-clip-text text-transparent">
                Hard Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Keahlian teknis yang telah saya kuasai melalui pengalaman praktis dan pembelajaran berkelanjutan
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div 
                key={category} 
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{skillIcons[category] || "🔥"}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {items.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-3 bg-gray-50/50 rounded-xl hover:bg-indigo-50/50 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800">
                    {items.length} Skills
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Siap untuk Berkolaborasi?
              </h3>
              <p className="text-gray-600 mb-6">
                Dengan kombinasi keahlian teknis dan soft skills yang kuat, saya siap berkontribusi dalam proyek Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  🚀 Fast Learner
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-teal-500 text-white">
                  💡 Problem Solver
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                  🤝 Team Player
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
