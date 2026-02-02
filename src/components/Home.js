import React, { useState } from 'react'
import GirlImage from '../accets/GirlImage.png'
import Footer from './Footer'

export default function Home() {
    const [showContact, setContact] = useState(false)
    
    const renderContactView = () => (
        <div className='bg-white p-3 mt-8 shadow-md text-center shadow-gray-600 rounded-md w-[80%]'>
            <p className='text-gray-500 text-[18px] font-serif'>Full Name:<span className='text-cyan-600 ml-3'>Kiruthika Selvaraj</span> </p>
            <p className='text-gray-500 text-[18px] font-serif mt-3'>Email: <span className='text-cyan-600 ml-3'>keerthiselvaraj@gmail.com</span></p>
            <p className='text-gray-500 text-[18px] font-serif mt-3'>Contact Number: <span className='text-cyan-600 ml-3'>987654321</span></p>
        </div>
    )

  return (
      <>
          <div className=' p-3 mt-8 flex justify-around items-center'>
          <div>
              <h1 className='text-[18px] text-gray-600 font-serif'>Hello, I'm <span className='font-serif text-cyan-600 text-[25px]'>Kiruthika Selvaraj</span></h1>
              <p className='text-black font-bold text-[28px] font-serif mt-3'>Frontend Developer and Web Designer</p>
              <p className='text-gray-500 text-[20px] font-serif mt-3'>I created responsive and dynamic websites with modern web technologies</p>
              <button className='bg-blue-900 p-2 rounded-md text-white font-serif mt-5'>Download CV</button>
              <button onClick={() => setContact(true)} className='bg-transparent p-2 rounded-md text-black border-md border-[1px] mt-5 border-gray-500 font-serif ml-3'>Contact Me</button>
                {showContact ? renderContactView() : null }
              </div>
              <img className='h-[450px] w-[40%] rounded-md' src={GirlImage} alt='girlImage' />
          </div>
          <Footer/>
    </>
  )
}
