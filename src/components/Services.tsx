import { Syringe, Scissors, HeartPulse, House } from 'lucide-react'

const services = [
  {
    title: "Sterilisasi",
    description: "Layanan sterilisasi profesional untuk kucing dan anjing dengan peralatan modern.",
    icon: <Scissors className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Vaksinasi",
    description: "Program vaksinasi lengkap untuk mencegah berbagai penyakit pada hewan peliharaan.",
    icon: <Syringe className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Home Visit",
    description: "Layanan pemeriksaan dan perawatan kesehatan hewan di rumah Anda.",
    icon: <House className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Pemeriksaan Umum",
    description: "Pemeriksaan kesehatan rutin dan penanganan penyakit pada hewan.",
    icon: <HeartPulse className="w-12 h-12 text-blue-600" />
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Klinik
          </h2>
          <p className="text-xl text-gray-600">
            Pelayanan kesehatan lengkap untuk hewan kesayangan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
