const Promo = () => {
  return (
    <section className="bg-blue-600 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pemeriksaan Gratis!
          </h2>
          <p className="text-xl mb-8">
            Dapatkan pemeriksaan kesehatan gratis untuk hewan peliharaan Anda
            <br />
            Berlaku untuk kunjungan pertama
          </p>
          <div className="bg-white text-blue-600 inline-block px-8 py-4 rounded-lg font-bold text-xl">
            Periode: 1 - 28 Februari 2025
          </div>
          <p className="mt-6 text-sm">
            *Syarat dan ketentuan berlaku
          </p>
        </div>
      </div>
      <div className="pt-12 flex justify-center flex-col shadow-md">

        <img
          src="/poster.jpg"
          alt="Klinik Hewan"
          className="w-full max-h-full rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  )
}

export default Promo
