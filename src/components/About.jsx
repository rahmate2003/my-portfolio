export default function About() {
    return (
        <section id="about" className="py-24 bg-white animate-fade-in-up">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center text-white">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">
                        Personal
                    </h2>


                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 animate-slide-in-left">
                            <h3 className="text-xl font-semibold text-indigo-600">My Background</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>🌍 Kota Samarinda, Kalimantan Timur, Indonesia</li>
                                <li>📚 Suka Terhadap Tantangan Baru, Terus Belajar dan Berinovasi</li>
                            </ul>
                        </div>

                        <div className="space-y-4 animate-slide-in-right">
                            <h3 className="text-xl font-semibold text-indigo-600">My Journey</h3>
                            <p className=" text-gray-600">
                                Memiliki pemahaman yang tentang IT seperti pengembangan web, jaringan komputer, cloud computing, aplikasi perkantoran, dan teknologi blockchain. Dengan dasar yang kuat dalam teknologi yang terus berkembang dengan komitmen untuk terus belajar dan mendorong inovasi, termasuk melalui partisipasi dalam program Kampus Merdeka.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
