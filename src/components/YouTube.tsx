const YouTube = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Video Edukasi
          </h2>
          <p className="text-xl text-gray-600">
            Tips dan informasi seputar kesehatan hewan peliharaan
          </p>
        </div>

        <div className="aspect-w-16 aspect-h-9">
          <div className="max-w-3xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
            <iframe
  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
  src="https://www.youtube.com/embed/S1nUMsPC1-0"
  title="Video Edukasi Klinik Hewan"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouTube
