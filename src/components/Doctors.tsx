const doctors = [
  {
    name: "drh. Andi Pratama",
    specialization: "Dokter Hewan Umum",
    experience: "10 tahun pengalaman",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "drh. Sarah Wijaya",
    specialization: "Spesialis Bedah",
    experience: "8 tahun pengalaman",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "drh. Budi Santoso",
    specialization: "Spesialis Kucing",
    experience: "12 tahun pengalaman",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
]

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tim Dokter Kami
          </h2>
          <p className="text-xl text-gray-600">
            Ditangani oleh dokter hewan profesional dan berpengalaman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {doctor.specialization}
                </p>
                <p className="text-gray-600">
                  {doctor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
