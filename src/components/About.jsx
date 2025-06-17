export default function About() {
  return (
    <section id="about" className="py-24 bg-white animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">Profil</h2>

          <div className="mt-12 grid grid-cols-1 gap-8">
            <div className="space-y-4 animate-slide-in-left">
              <p className="text-gray-600 text-lg">
                D4 Teknik Informatika Multimedia dengan keahlian praktik dalam pengembangan website, cloud computing,
                jaringan komputer, hardware & software troubleshooting. Berpengalaman membangun platform ERP NukaPOS
                menggunakan Node.js dan MongoDB, serta sistem prototipe pemilihan elektronik berbasis blockchain untuk
                BEM Polnes. Terlatih melalui Bangkit Academy (Google Cloud) dan bersertifikasi CCNA dan Mikrotik.
                Berkomitmen untuk terus berkembang, relevan, menciptakan solusi teknologi yang skalabel dan inovatif.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4 animate-slide-in-left">
                <h3 className="text-xl font-semibold text-indigo-600">Informasi Personal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>🌍 Kota Samarinda, Indonesia 75131</li>
                  <li>📧 w.rahmad26@gmail.com</li>
                  <li>🌐 https://rahmatw.my.id</li>
                  <li>🎂 22 Tahun</li>
                  {/* <li>👤 TB 168cm, BB 52kg</li> */}
                </ul>
              </div>

              <div className="space-y-4 animate-slide-in-right">
                <h3 className="text-xl font-semibold text-indigo-600">Soft Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Problem Solving dan Troubleshooting</li>
                  <li>✅ Easy Collaboration / Mudah Berkolaborasi</li>
                  <li>✅ Fast Learner / Cepat Belajar</li>
                  <li>✅ Inisiatif</li>
                  <li>✅ Teamwork</li>
                  <li>✅ Fast Adaptation / Cepat Beradaptasi</li>
                  <li>✅ Kreatif dalam Pengambilan Keputusan Teknikal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
