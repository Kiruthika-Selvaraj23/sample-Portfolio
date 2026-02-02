import React, { useContext } from 'react'
import { DContext } from '../Context'
import Footer from './Footer'

export default function Skills() {
    const {skillsData} = useContext(DContext)
    return (
      <>
      <div className='p-3 mt-10'>
          <h1 className='text-black font-bold text-[28px] font-serif ml-28'>My Skills</h1>
          <p className='text-gray-500 text-[20px] font-serif mt-3 ml-28'>What I can do</p>
          <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
          <ul className='flex justify-around flex-wrap mt-10'>
              {skillsData.map(eachItem => (
                  <li className='bg-white p-3 m-5 shadow-md flex flex-col justify-center items-center text-center shadow-gray-600 rounded-md w-[20%]'>
                      <img src={eachItem.techImage} className='h-[90px] w-[40%]' alt={eachItem.topic} />
                      <h1 className='text-teal-800 text-[18px] font-bold font-serif mt-3 mb-3'>{ eachItem.topic}</h1>
                 </li>
             ))} 
          </ul>
            </div>
            <Footer/>
        </>
  )
}
