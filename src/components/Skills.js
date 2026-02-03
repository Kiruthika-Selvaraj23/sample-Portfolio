import React, { useContext } from 'react'
import { DContext } from '../Context'
import Footer from './Footer'

export default function Skills() {
    const {skillsData} = useContext(DContext)
    return (
      <>
            <div id='skills' className='p-3 mt-10 mb-[80px]'>
                <h1 className='text-fuchsia-800 italic text-center font-bold text-[28px] font-serif ml-28'>My Skills</h1>
          <p className='text-gray-500 text-[20px] text-center font-serif mt-3 ml-28'>What I can do</p>
                <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
                <h1 className='mt-3 text-teal-500 font-bold text-[25px] italic ml-28'>Frontend :-</h1>
          <ul className='flex justify-around flex-wrap mt-8'>
              {skillsData.map(eachItem => (
                  <li className='bg-white p-3 m-5 shadow-md flex flex-col justify-center items-center text-center shadow-gray-600 rounded-md w-[50%] sm:w-[50%] md:w-[25%]'>
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
