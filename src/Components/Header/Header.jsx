'use client'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'

import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
  }, [])

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Global">
        
        {/* LOGO */}
        <div className="flex flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto transition duration-300 hover:opacity-80"
            />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="lg:hidden flex">
          <button
            type="button"
            className="rounded-md p-2 text-gray-800 transition-all duration-300
              hover:bg-gray-100 active:scale-90"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* DESKTOP MENU */}
        <PopoverGroup className="hidden lg:flex gap-8">
          {[
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Online Classes', link: '/online' },
            { name: 'Offline Classes', link: '/offline' },
            { name: 'Blog', link: '/blog' },
            { name: 'Contact', link: '/contact' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="relative text-gray-900 font-semibold text-sm group"
            >
              {item.name}
              <span
                className="
                  absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-600 transition-all duration-500
                  group-hover:w-full
                "
              ></span>
            </Link>
          ))}

          {/* ✅ LOGOUT BUTTON (DESKTOP) */}
          <button
            onClick={handleLogout}
            className="relative text-red-600 font-semibold text-sm group"
          >
            Logout
            <span
              className="
                absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-500
                group-hover:w-full
              "
            ></span>
          </button>

        </PopoverGroup>
      </nav>

      {/* MOBILE MENU PANEL */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />

        <DialogPanel
          className="
            fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 
            shadow-xl transition-transform duration-500 ease-out
          "
        >
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-9 w-auto" />

            <button
              type="button"
              className="rounded-md p-2 text-gray-800 hover:bg-gray-100 transition-all duration-300 active:scale-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          
          <div className="mt-10 space-y-4 animate-fadeIn">
            {[
              { name: 'Home', link: '/' },
              { name: 'About', link: '/about' },
              { name: 'Online Classes', link: '/online' },
              { name: 'Offline Classes', link: '/offline' },
              { name: 'Blog', link: '/blog' },
              { name: 'Contact', link: '/contact' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  block text-lg font-semibold text-gray-800 
                  transition-all duration-300 
                  hover:text-teal-600 hover:translate-x-3
                "
              >
                {item.name}
              </Link>
            ))}

            {/* ✅ LOGOUT BUTTON (MOBILE) */}
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-semibold text-red-600 hover:translate-x-3 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
