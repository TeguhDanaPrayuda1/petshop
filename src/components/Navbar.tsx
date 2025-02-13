import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      setActiveHash('#' + elementId)
      animateScroll.scrollTo(element.offsetTop, {
        duration: 800,
        smooth: true,
        offset: -64
      })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()

    if (path.includes('#')) {
      const targetId = path.split('#')[1]

      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          scrollToSection(targetId)
        }, 100)
      } else {
        scrollToSection(targetId)
      }

      window.history.pushState({}, '', path)
    } else {
      setActiveHash('')
      navigate(path)
    }

    handleMenuClick()
  }

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('')
    }
    else if (location.hash) {
      const elementId = location.hash.substring(1)
      scrollToSection(elementId)
      setActiveHash(location.hash)
    }
  }, [location])

  const navItems = [
    { name: 'Beranda', path: '/#home' },
    { name: 'Layanan', path: '/#services' },
    { name: 'Dokter', path: '/#doctors' },
    { name: 'Artikel', path: '/articles' },
    { name: 'Kontak', path: '/#contact' },
  ]

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && path.includes(activeHash)
    } else {
      return location.pathname === path
    }
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={(e) => handleClick(e, '/#home')}>
              <Logo />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className={`font-medium ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
