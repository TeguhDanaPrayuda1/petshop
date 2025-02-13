const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center hero-gradient"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Klinik Hewan Terpercaya
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Memberikan pelayanan terbaik untuk hewan kesayangan Anda
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Buat Janji Temu
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
