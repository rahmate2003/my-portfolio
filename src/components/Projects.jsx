
// src/components/Projects.jsx
const projects = [
    {
        title: "Implementasi Smart Contract berbasis Teknologi Blockchain untuk Pemilihan Elektronik Presiden dan Wakil Presiden BEM Polnes",
        type: "Skripsi",
        duration: "Maret 2024 - Juli 2024",
        description: "Proyek ini bertujuan untuk mengimplementasikan Smart Contract berbasis teknologi blockchain dalam sistem pemilihan elektronik Presiden BEM Polnes. Dengan menggunakan Solidity, bahasa pemrograman untuk smart contract di platform Ethereum, proyek ini memungkinkan pencatatan suara yang aman, transparan, dan tidak dapat diubah. Blockchain memastikan integritas data pemilihan, mencegah kecurangan, dan memberikan hasil yang akurat tanpa perlu pihak ketiga. Integrasi dengan aplikasi web memungkinkan pengguna untuk berpartisipasi dalam pemilihan dengan antarmuka yang mudah digunakan, memberikan manfaat besar berupa efisiensi, keamanan dan keterbukaan dalam proses demokrasi di lingkungan kampus.",
        technologies: ["Solidity", "Ethereum Blockchain EVM", "Node.JS", "Smart Contract"],
        link: "https://github.com/rahmate2003/",
        image: "/project-image.jpg"
    },
    {
        title: "CalorieWise Mobile App",
        type: "Proyek Akhir Bangkit Academy led by Google, Gojek, Tokopedia & Traveloka",
        duration: "Maret 2024 - Juli 2024",
        description: "CalorieWise adalah aplikasi mobile yang dirancang untuk membantu pengguna melacak asupan kalori harian mereka dan membuat pilihan makanan yang lebih sehat. Aplikasi ini memiliki antarmuka yang mudah digunakan untuk mencatat makanan, menghitung nilai gizi, dan menetapkan tujuan kesehatan pribadi. CalorieWise terintegrasi dengan pelacak kebugaran dan memberikan saran yang dipersonalisasi untuk mencapai pola makan yang seimbang, menjadikannya teman yang sempurna bagi mereka yang ingin meningkatkan nutrisi dan menjaga gaya hidup sehat.",
        technologies: ["Express.JS", "REST API", "Database", "Backend"],
        link: "https://github.com/rahmate2003/CalorieWise",
        image: "/project-image2.jpg"
    },
    // Add more projects...
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-50 animate-slide-in-left">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Projek
                    </h2>
                    <div className="mt-16 space-y-20">
                        {projects.map((project, index) => (
                            <div key={index} className="relative">
                                <div className="group relative">
                                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 max-h-[600px]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover object-center w-full h-full"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="text-xl font-semibold text-indigo-700">
                                            <a>
                                                {project.title}
                                            </a>
                                            {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a> */}
                                        </h3>
                                        {/* Company */}
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