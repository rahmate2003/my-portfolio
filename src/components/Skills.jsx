// src/components/Skills.jsx
const skills = {
    "Frontend": ["HTML", "CSS", "Bootstrap"],
    "Backend": ["JavaScript", "Express", "SQL"],  // Menambahkan Python
    "Blockchain": ["Solidity"],  // Menambahkan Solidity
    "Bahasa Pemrograman": ["Java", "Python"],  // Menambahkan Java
    "Jaringan Komputer": ["TCP/IP", "Routing", "Switching", "Access Point"],
    "Tools": ["Git", "Adobe Premiere Pro", "VS Code", "Figma", "Office Applications"],

};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Skill
                    </h2>
                    <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                                <ul className="mt-4 space-y-2">
                                    {items.map((skill, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-gray-600"
                                        >
                                            <svg
                                                className="h-5 w-5 text-indigo-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4"
                                                />
                                            </svg>
                                            {skill}
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
