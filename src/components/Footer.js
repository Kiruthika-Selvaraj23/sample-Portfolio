import React from 'react'
import LinkedIn from "../accets/Linkedin.png"
import Github from "../accets/Github.png"


export default function Footer() {
    
  return (
      <footer className='fixed h-[80px] bottom-0 w-full p-3 border-sm bg-slate-100'>
          <div className='flex justify-center'>
              <svg className='mr-1 sm:mr-3 h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="grey"><path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
              <h1 className='text-gray-500 text-[13px] sm:text-[15px] text-center'>2026 Kiruthika Selvaraj. All rights Reserved</h1>
          </div>
          <div className='flex justify-center'>
              <a href='https://www.linkedin.com/in/kiruthika-2k3' target='_blank' rel="noreferrer">
                  <img src={LinkedIn} alt="facebook" className='h-[22px] sm:h-[25px] ml-3 mt-1 ' />
              </a>
              <a href='https://github.com/Kiruthika-Selvaraj23' target='_blank' rel="noreferrer">
                  <img src={Github} alt="insta" className='h-[22px] sm:h-[25px] ml-3 mt-1' />
              </a>
          </div>
      </footer>
  )
}
