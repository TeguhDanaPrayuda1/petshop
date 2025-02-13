import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Klinik Hewan WCare</h3>
            <p className="text-gray-400">
              Pelayanan kesehatan profesional untuk hewan kesayangan Anda. Tersedia 24/7 untuk kondisi darurat.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <ul className="text-gray-400">
              <li>Senin - Jumat: 08.00 - 18.00</li>
              <li>Sabtu: 09.00 - 16.00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Darurat</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@wcarevet.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Jl. Hewan Sehat No. 123, Jakarta</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Klinik Hewan WCare. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
