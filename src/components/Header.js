import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const nav = useNavigate()
    
  return (
      <div className='text-slate-300 flex justify-between p-3 w-[100%] shadow-md shadow-slate-400'>
          <div className='flex  ml-3'>
              <svg className='mt-3 ml-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
              <h1 onClick={() => nav("/")} className='text-black font-serif text-[30px] font-bold'>Kiruthika</h1>
          </div>
              <ul className='flex flex-row justify-between w-[50%] mt-2 text-black font-serif text-[22px] mr-3'>
              <li onClick={() => nav("/")} className='hover:text-lime-400'>Home</li>
              <li onClick={() => nav("/about")} className='hover:text-lime-400'>About</li>
              <li onClick={() => nav("/projects")} className='hover:text-lime-400'>Projects</li>
              <li onClick={() => nav("/skills")} className='hover:text-lime-400'>Skills</li>
          </ul>
    </div>
  )
}
