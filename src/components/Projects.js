import React, { useContext } from 'react'
import { DContext } from '../Context'
import Footer from './Footer'

export default function Projects() {
    const { projectsData } = useContext(DContext)

    return (
      <>
      <div className='p-3 mt-10'>
          <h1 className='text-black font-bold text-[28px] font-serif ml-28'>My Projects</h1>
          <p className='text-gray-500 text-[20px] font-serif mt-3 ml-28'>Some of my recent works</p>
          <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
         
          <ul className='flex justify-around mt-10'>
              {projectsData.map(eachItem => (
                  <li className='bg-white p-3 shadow-md text-center shadow-gray-600 rounded-md w-[25%]'>
                      <img src={eachItem.image} className='h-[200px] w-[100%]' alt='portfolio' />
                      <h1 className='text-[18px] font-bold font-serif mt-3 mb-3'>{eachItem.title}</h1>
                      <p className='text-cyan-800 text-[17px] font-serif'>{eachItem.desc}</p>
                      <button className='bg-blue-900 p-2 rounded-md text-white font-serif mt-5'>
                          <a href={eachItem.projLink} target='_blank' rel="noreferrer">View Project</a>
                          </button>
                  </li>
              ))}
          </ul>
            </div>
            <Footer/>
        </>
  )
}
