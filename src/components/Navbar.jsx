import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <nav className='absolute top-0 left-0 w-full z-50'>

        <div className='max-w7xl mx-auto px-6 py-5 flex items-center justify-between'>

          <Link
              to="/"
              className='text-2xl font-bold text-mauve-300'
          >
            Dream <span className='text-[rgb(191,107,64)]'>Zone</span>
          </Link>

          <div className='hidden md:flex items-center gap-10'>
                
                <Link
                    to="/"
                    className='text-white hover:text-blue-400 transition'
                >
                  Home
                </Link>
                <Link
                    to="/apartments"
                    className='text-white hover:text-blue-400 transition'
                >
                  Apartments
                </Link>
                <Link
                    to="/lands"
                    className='text-white hover:text-blue-400 transition'
                >
                  Properties
                </Link>
                <Link
                    to="/portfolio"
                    className='text-white hover:text-blue-400 transition'
                >
                  Portfolio
                </Link>
                <Link
                    to="/why"
                    className='text-white hover:text-blue-400 transition'
                >
                  Why Us
                </Link>
                <Link
                    to="/contact"
                    className='text-white hover:text-blue-400 transition'
                >
                  Contact Us
                </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-white cursor-pointer'
          >
            {menuOpen ? (
                <FiX size={28} />
            ): (
                <FiMenu size={28} />
            )}
          </button>

        </div>

        {
          menuOpen && (
            <div className='md:hidden bg-black/90 backdrop-blur-md px-6 py-6'>

              <div className='flex flex-col gap-5'>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Home
                  </Link>
                  <Link
                    to="/apartments"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Apartments
                  </Link>

                  <Link
                    to="/lands"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Properties
                  </Link>

                  <Link
                    to="/portfolio"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Home
                  </Link>
                  <Link
                    to="/why"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Why Us
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className='text-white hover:text-blue-400 transition'
                  >
                    Contact Us
                  </Link>
              </div>

            </div>
          )
        }

    </nav>

  )
}

export default Navbar;