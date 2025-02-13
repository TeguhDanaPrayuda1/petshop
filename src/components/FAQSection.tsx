import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Mengapa memilih WCare Vet Clinic?",
    answer: "WCare Vet Clinic memiliki tim dokter hewan berpengalaman dengan sertifikasi profesional. Kami mengutamakan pelayanan yang ramah dan berkualitas, didukung dengan peralatan medis modern untuk memberikan perawatan terbaik bagi hewan kesayangan Anda."
  },
  {
    question: "Apakah tersedia layanan darurat 24 jam?",
    answer: "Ya, kami menyediakan layanan darurat 24 jam untuk memastikan hewan kesayangan Anda mendapatkan pertolongan medis kapanpun dibutuhkan. Tim dokter kami selalu siap menangani berbagai kondisi darurat dengan cepat dan profesional."
  },
  {
    question: "Bagaimana dengan fasilitas yang tersedia?",
    answer: "Klinik kami dilengkapi dengan fasilitas modern seperti ruang operasi steril, laboratorium lengkap, ruang rawat inap yang nyaman, dan peralatan diagnostik terkini. Semua ini untuk memastikan diagnosis yang akurat dan perawatan yang optimal."
  },
  {
    question: "Apakah ada program kesehatan rutin?",
    answer: "Kami menawarkan berbagai program kesehatan rutin seperti vaksinasi berkala, sterilisasi, dan pemeriksaan kesehatan regular. Program ini dirancang untuk mencegah penyakit dan memantau kesehatan hewan kesayangan Anda secara berkelanjutan."
  },
  {
    question: "Bagaimana dengan biaya pelayanan?",
    answer: "Kami menawarkan biaya pelayanan yang transparan dan kompetitif. Setiap tindakan medis akan dikonsultasikan terlebih dahulu, dan kami juga menyediakan berbagai paket perawatan yang dapat disesuaikan dengan kebutuhan dan budget Anda."
  }
]

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevOpenIndexes) => {
      const newOpenIndexes = new Set(prevOpenIndexes)
      if (newOpenIndexes.has(index)) {
        newOpenIndexes.delete(index) // Tutup jika sudah terbuka
      } else {
        newOpenIndexes.add(index) // Buka jika belum terbuka
      }
      return newOpenIndexes
    })
  }

  return (
    <section className="pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-gray-600">
            Pelajari lebih lanjut tentang keunggulan layanan kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.has(index)
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
