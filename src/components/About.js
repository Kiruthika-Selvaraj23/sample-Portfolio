import React from 'react'
import Graduate from "../accets/Graduate.png"
import Experience from "../accets/Experience.png"
import Certification from "../accets/Certificate.png"
import Goal from "../accets/Goal.png"
import Footer from './Footer'

export default function About() {
    return (
      <>
            <div id='about' className='p-3 mt-10'>
                <h1 className='text-fuchsia-800 italic sm:text-center font-bold text-[20px] sm:text-[28px] font-serif ml-28'>About Me</h1>
                <p className='text-gray-500 text-[16px] sm:text-[20px] font-serif mt-3 ml-28 sm:text-center'>Let me introduce Myself</p>
          <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
          <p className='text-cyan-800 text-[14px] sm:text-[17px] font-serif mt-3 sm:ml-28'>I'm a frontend developer specializing in building interactive and responsive websites. I have a passion for coding and design, and love turning ideas into reality.</p>
          <div className='flex flex-wrap justify-around mt-10'>
                    <div className='bg-slate-300 m-3 shadow-md shadow-slate-300 p-3 rounded-md w-[80%] md:w-[50%] sm:w-[80%]'>
                        <div className='flex'>
                      <img src={ Graduate} className='h-[30px] sm:h-[40px]' alt="education" />
                      <h1 className='text-[15px] sm:text-[18px] font-bold font-serif mt-2 ml-3'>Education</h1>
                  </div>
                      <hr className='bg-gray-500 border-0 h-0.5 mt-3 mb-3' />
                      <p className='text-blue-800 text-[13.5px] sm:text-[15px] font-serif'>1. BE in Agriculture Engineering (8.9 CGPA)</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>Nandha Engineering College(2020-2024)</p>
                        <p className='text-blue-800 text-[13.5px] sm:text-[15px] font-serif mt-3'>2.HSC (78%)</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>Shree Gurukulam Higher Secondary School(2019-2020)</p>
                        <p className='text-blue-800 text-[13.5px] sm:text-[15px] font-serif mt-3'>3. SSLC (83%)</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>Shree Gurukulam Higher Secondary School(2017-2018)</p>
              </div>
                    
                    <div className='bg-slate-300 m-3 shadow-md shadow-slate-300 p-3 rounded-md w-[80%] md:w-[30%] sm:w-[80%]'>
                  <div className='flex'>
                            <img src={Experience} className='h-[30px] sm:h-[40px]' alt="experience" />
                            <h1 className='text-[15px] sm:text-[18px] font-bold font-serif mt-2 ml-3'>Experience</h1>
                  </div>
                  <hr className='bg-gray-500 border-0 h-0.5 mt-3 mb-3' />
                        <p className='text-blue-800 text-[13.5px] sm:text-[15px] font-serif'>1. Frontend Developer</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>XYZ Company, Chennai</p>
                </div>
                    
                    <div className='bg-slate-300 m-3 shadow-md shadow-slate-300 p-3 rounded-md w-[80%] md:w-[30%] sm:w-[80%]'>
                        <div className='flex'>
                            <img src={Certification} className='h-[30px] sm:h-[40px]' alt="certification" />
                            <h1 className='text-[15px] sm:text-[18px] font-bold font-serif mt-2 ml-3'>Certifications</h1>
                        </div>
                        <hr className='bg-gray-500 border-0 h-0.5 mt-3 mb-3' />
                        <p className='text-blue-800 text-[13.5px] sm:text-[15px]font-serif'>1. Certified MERN Stack Developer</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>Issued by NxtWave Disruptive Tech, Hyderabad</p>
                        <p className='text-blue-800 text-[13.5px] sm:text-[15px] font-serif mt-3'>2. React Developer</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>Issued by NxtWave Disruptive Tech, Hyderabad</p>
                    </div>
                    

                    <div className='bg-slate-300 m-3 shadow-md shadow-slate-300 p-3 rounded-md w-[80%] md:w-[30%] sm:w-[80%]'>
                        <div className='flex'>
                            <img src={Goal} className='h-[30px] sm:h-[40px]' alt="acheivements" />
                            <h1 className='text-[15px] sm:text-[18px] font-bold font-serif mt-2 ml-3'>Achievements</h1>
                        </div>
                        <hr className='bg-gray-500 border-0 h-0.5 mt-3 mb-3' />
                        <p className='text-blue-800 text-[13.5px] sm:text-[15px] font-serif'>1. Completed 100, 50 and 30 days of Coding Challenge</p>
                        <p className='text-black text-[13.5px] sm:text-[15px] font-serif'>Conducted by NxtWave Disruptive Tech</p>
                    </div>
              
          </div>
            </div>
            <Footer/>
        </>
  )
}
