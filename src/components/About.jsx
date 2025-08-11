export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Description */}
          <div className="mb-16 animate-slide-in-left">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                D4 Teknik Informatika Multimedia dengan keahlian praktik dalam pengembangan website, cloud computing,
                jaringan komputer, hardware & software troubleshooting. Berpengalaman membangun platform ERP NukaPOS
                menggunakan Node.js dan MongoDB, serta sistem prototipe pemilihan elektronik berbasis blockchain untuk
                BEM Polnes. Terlatih melalui Bangkit Academy (Google Cloud) dan bersertifikasi CCNA dan Mikrotik.
                Berkomitmen untuk terus berkembang, relevan, menciptakan solusi teknologi yang skalabel dan inovatif.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Info Card */}
            <div className="animate-slide-in-left">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👤</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Informasi Personal</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                    <span className="text-2xl mr-4">🌍</span>
                    <span className="text-gray-700 font-medium">Kota Samarinda, Indonesia 75131</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                    <span className="text-2xl mr-4">📧</span>
                    <span className="text-gray-700 font-medium">w.rahmad26@gmail.com</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                    <span className="text-2xl mr-4">🌐</span>
                    <span className="text-gray-700 font-medium">https://rahmatw.my.id</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                    <span className="text-2xl mr-4">🎂</span>
                    <span className="text-gray-700 font-medium">22 Tahun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="animate-slide-in-right">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Problem Solving dan Troubleshooting',
                    'Easy Collaboration / Mudah Berkolaborasi',
                    'Fast Learner / Cepat Belajar',
                    'Inisiatif',
                    'Teamwork',
                    'Fast Adaptation / Cepat Beradaptasi',
                    'Kreatif dalam Pengambilan Keputusan Teknikal'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50/50 rounded-lg hover:bg-green-100/50 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
