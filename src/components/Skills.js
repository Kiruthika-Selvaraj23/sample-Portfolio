import React, { useContext } from 'react'
import { DContext } from '../Context'
import Footer from './Footer'

export default function Skills() {
    const {skillsData} = useContext(DContext)
    return (
      <>
            <div id='skills' className='p-3 mt-10 mb-[80px]'>
                <h1 className='text-fuchsia-800 italic sm:text-center font-bold text-[20px] sm:text-[28px] font-serif ml-28'>My Skills</h1>
                <p className='text-gray-500 text-[16px] sm:text-[20px] sm:text-center font-serif mt-3 ml-28'>What I can do</p>
                <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
                <h1 className='mt-3 text-teal-500 font-bold  text-[18px] sm:text-[25px] italic sm:ml-28'>Frontend :-</h1>
                <ul className='flex justify-around flex-wrap mt-3 sm:mt-10'>
              {skillsData.map(eachItem => (
                  <li className='bg-white p-3 m-5 shadow-md flex flex-col justify-center items-center text-center shadow-gray-600 rounded-md w-[35%] sm:w-[50%] md:w-[22.5%]'>
                      <img src={eachItem.techImage} className='h-[50px] sm:h-[80px] w-[50%] sm:w-[26%]' alt={eachItem.topic} />
                      <h1 className='text-teal-800 text-[15px] sm:text-[18px] font-bold font-serif mt-3 mb-3'>{ eachItem.topic}</h1>
                 </li>
             ))} 
          </ul>
            </div>
            <Footer/>
        </>
  )
}
