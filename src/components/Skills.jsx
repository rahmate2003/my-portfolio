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
    "Bahasa Inggris": ["Listening", "Reading", "Writing"],
  }
  
  export default function Skills() {
    return (
      <section id="skills" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Hard Skills</h2>
            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-indigo-600 mb-4">{category}</h3>
                  <ul className="mt-2 space-y-2">
                    {items.map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  