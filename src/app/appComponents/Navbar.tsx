'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routeToAboutPage = () => {
    router.push("/about")
  }

  const routeToHomePage = () => {
    router.push("/");
  }

  const routeToContactPage = () => {
    router.push("/contact");
  }

  const routeToServicesPage = () => {
    router.push("/services")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', onClick: routeToHomePage },
    { name: 'About', onClick: routeToAboutPage },
    { name: 'Courses', onClick: () => {} },
    { name: 'Services', onClick: routeToServicesPage },
    { name: 'Contact Us', onClick: routeToContactPage },
  ]

  return (
    <div
      className='
      mx-auto w-[95%] flex justify-between items-center
      bg-[#dad7cd] bg-opacity-35 border border-gray-400 text-black rounded-full 
      h-20 px-6
      '
      id='navbarDiv'
    >
      <div className='flex-shrink-0'>
        <img 
          src="./arkConnection-horizontal.png" 
          alt="Website logo" 
          className='
          h-56 mt-2
          sm:h-48 sm:mt-2
          md:h-56 md:mt-2
          lg:h-64 lg:mt-2
          xl:h-64 xl:mt-2
          2xl:h-64 2xl:mt-2

          hover:cursor-pointer
          '
          onClick={() => router.push("/")}
        />
      </div>

      {/* Hamburger menu for small screens */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='p-2'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation items for larger screens */}
      <div className='text-sm md:text-base hidden sm:flex justify-center items-center gap-x-5 font-bold'>
        {navItems.map((item) => (
          <h1 key={item.name} className='hover:cursor-pointer' onClick={item.onClick}>
            {item.name}
          </h1>
        ))}
      </div>

      {/* Mobile menu */}
      <div
        className={`
          sm:hidden fixed inset-0 z-50 bg-[#dad7cd] bg-opacity-95
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className='flex flex-col items-center justify-center h-full gap-y-8'>
          {navItems.map((item) => (
            <h1
              key={item.name}
              className='text-xl font-bold hover:cursor-pointer'
              onClick={() => {
                item.onClick()
                toggleMenu()
              }}
            >
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar