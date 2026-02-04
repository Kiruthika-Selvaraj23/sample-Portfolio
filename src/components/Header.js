import React from 'react'

export default function Header() {
    
  return (
      <div className='text-slate-300 flex justify-between fixed top-0 h-[70px] mt-0 p-3 w-[100%] bg-gray-50 shadow-md shadow-slate-400'>
              <a href='#home' className='flex ml-3'>
        <svg className='mt-2 h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="purple"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
        <h1 className='text-purple-900 italic font-serif ml-1 sm:ml-2 font-bold mt-1.5 mr-4 sm:mr-0 sm:mt-0 sm:text-[30px]'>Kiruthika</h1>
              </a>
              <ul className='flex flex-row sm:justify-between w-[100%] sm:w-[50%] mt-2 text-black font-serif text-[15px] sm:text-[22px] sm:mr-3'>
              <li className='text-[#820cf8] hover:text-gray-700 mr-2'><a href='#home'>Home</a></li>
        <li className='text-[#820cf8] hover:text-gray-700 mr-2'><a href='#about'>About</a></li>
        <li className=' text-[#820cf8] hover:text-gray-700 mr-2'><a href='#projects'>Projects</a></li>
              <li className='text-[#820cf8] hover:text-gray-700'><a href='#skills'>Skills</a></li>
          </ul>
    </div>
  )
}
