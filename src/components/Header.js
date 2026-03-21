import React, { useEffect, useState } from 'react'
import "../App.css"
import Profile from "../accets/Profile.png"

export default function Header() {

      const [isOpen, setIsOpen] = useState(false);

      // Close menu on scroll
      useEffect(() => {
            const handleScroll = () => {
                  setIsOpen(false);
            };

            if (isOpen) {
                  window.addEventListener("scroll", handleScroll);
            }

            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, [isOpen]);

    
  return (
      <div className='text-slate-300 flex justify-between fixed top-0 z-50 h-[45p] sm:h-[70px] mt-0 p-3 w-[100%] bg-gray-50 shadow-md shadow-slate-400'>
              <a href='#home' className='flex ml-5 sm:ml-16'>
        <img className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]' src={Profile} alt="profile" />
        <h1 className='text-blue-950 italic font-serif ml-1 sm:ml-2 font-bold mt-1.5 mr-4 sm:mr-0 sm:mt-0 sm:text-[30px]'>Kiruthika</h1>
              </a>
              <ul className='text-blue-800 hidden md:flex flex-row sm:justify-between w-[100%] sm:w-[50%] mt-2 font-serif text-[15px] sm:text-[22px] sm:mr-3'>
                  <li className='text- hover:text-gray-700 mr-2'><a href='#home'>Home</a></li>
                  <li className=' hover:text-gray-700 mr-2'><a href='#about'>About</a></li>
                  <li className=' hover:text-gray-700 mr-2'><a href='#projects'>Projects</a></li>
                  <li className=' hover:text-gray-700'><a href='#skills'>Skills</a></li>
              </ul> 
              
              <div>
                    {/* Hamburger (Mobile Only) */}
                    <label className="hamburger mt-2 md:hidden">
                          <input
                                type="checkbox"
                                checked={isOpen}
                                onChange={() => setIsOpen(!isOpen)}
                          />
                          <svg viewBox="0 0 32 32">
                                <path
                                      className="w-3 h-3 line line-top-bottom"
                                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                ></path>
                                <path className="line" d="M7 16 27 16"></path>
                          </svg>
                    </label>
              </div>

              {/* Mobile Menu */}
              <div
                    className={`md:hidden absolute top-full right-0 w-[30%] z-50
        bg-white shadow-lg
        transform transition-all duration-1000 ease-in-out rounded-tl-md rounded-bl-md
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
              >
                    <nav className="flex flex-col font-semibold text-gray-600 space-y-2 p-4">
                          <a href="#home" className="text-sm hover:text-secondary-700">Home</a>
                          <a href="#about" className="text-sm hover:text-secondary-700">About</a>
                          <a href="#projects" className="text-sm hover:text-secondary-700">Projects</a>
                          <a href="#skills" className="text-sm hover:text-secondary-700">Skills</a>
                    </nav>
              </div>
    </div>
  )
}
