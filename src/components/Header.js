import React, { useEffect, useState } from 'react'
import "../App.css"

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
      <div className='text-slate-300 flex justify-between fixed top-0 h-[70px] mt-0 p-3 w-[100%] bg-gray-50 shadow-md shadow-slate-400'>
              <a href='#home' className='flex ml-3'>
        <svg className='mt-2 h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="purple"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
        <h1 className='text-purple-900 italic font-serif ml-1 sm:ml-2 font-bold mt-1.5 mr-4 sm:mr-0 sm:mt-0 sm:text-[30px]'>Kiruthika</h1>
              </a>
              <ul className='hidden md:flex flex-row sm:justify-between w-[100%] sm:w-[50%] mt-2 text-black font-serif text-[15px] sm:text-[22px] sm:mr-3'>
              <li className='text-[#820cf8] hover:text-gray-700 mr-2'><a href='#home'>Home</a></li>
        <li className='text-[#820cf8] hover:text-gray-700 mr-2'><a href='#about'>About</a></li>
        <li className=' text-[#820cf8] hover:text-gray-700 mr-2'><a href='#projects'>Projects</a></li>
              <li className='text-[#820cf8] hover:text-gray-700'><a href='#skills'>Skills</a></li>
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
