import React, { useState } from 'react'
import GirlImage from '../accets/GirlImage.png'
import SendImg from '../accets/Send.png'
import Footer from './Footer'
import emailjs from "@emailjs/browser"

export default function Home() {
    const [showContact, setContact] = useState(false)
    const [showMsgForm, setMsgForm] = useState(false)
    const [senderName, setSenderName] = useState("")
    const [senderEmail, setSenderEmail] = useState("")
    const [senderSubject, setSenderSubject] = useState("")
    const [senderMessage, setSenderMessage] = useState("")
    

    const submitForm = (event) => {
        event.preventDefault()
        const data = { name: senderName, email: senderEmail, title: senderSubject, message: senderMessage }
        emailjs
            .send('service_nmdzkn9', 'template_ewfwjrr', data, {
                publicKey: 'Q52yNSdodJg-yKB7U',
            })
            .then(
                () => {
                    alert("Message Send")
                    setSenderName("")
                    setSenderEmail("")
                    setSenderSubject("")
                    setSenderMessage("")
                },
                (error) => {
                    alert("Try Again")
                },
            );
    }


    const renderForm = () => (
        <form onSubmit={(event) => submitForm(event)} className='bg-white flex flex-col p-3 shadow-md shadow-gray-600 rounded-md w-[90%] sm:w-[80%] md:w-[60%] mt-6 ml-1 sm:ml-10 md:ml-7'>
            <h1 className='text-[15px] sm:text-[20px] italic text-teal-700 font-bold'>{'Contact Me :)'} </h1>
            <input onChange={(event) => setSenderName(event.target.value)} value={senderName} type="text" className='border-[2px] text-[15px] sm:text-[18px] border-gray-300 mt-3 p-0 sm:p-1 w-[80%] sm:w-[40%] hover:border-teal-700' placeholder='Your Name' />
            <input onChange={(event) => setSenderEmail(event.target.value)} value={senderEmail} type="email" className='border-[2px]  text-[15px] sm:text-[18px] border-gray-300 mt-3 p-0 sm:p-1 w-[80%] sm:w-[40%] hover:border-teal-700' placeholder='Your Email' />
            <input onChange={(event) => setSenderSubject(event.target.value)} value={senderSubject} type='text' className='border-[2px] text-[15px] sm:text-[18px] border-gray-300 mt-3 p-0 sm:p-1 w-[80%] sm:w-[40%] hover:border-teal-700' placeholder='Subject' />
            <textarea onChange={(event) => setSenderMessage(event.target.value)} value={senderMessage} rows='5' className='border-[2px] text-[15px] sm:text-[18px] border-gray-300 mt-3 p-0 sm:p-1 w-[80%] sm:w-[40%] hover:border-teal-700' cols='40' placeholder='Write your message' />
            <div>
                <button type='submit' className='bg-teal-500 italic text-[13px] sm:text-[15px] text-white mt-3 rounded-[3px] sm:rounded-[5px] p-1 flex '>
                    Send
                    <img className='h-[18px] sm:h-[20px] ml-2' src={SendImg} alt="send" />
                </button>
            </div>
        </form>
    )
    
    const renderContactView = () => (
        <div className='bg-white p-3 mt-11 shadow-md text-center shadow-gray-600 rounded-md w-[90%] sm:w-[80%] sm:ml-10 md:ml-6 xl:ml-0'>
            <p className='text-gray-500 text-[13px] sm:text-[18px] font-serif'>Full Name:<span className='text-cyan-600 sm:ml-3'>Kiruthika Selvaraj</span> </p>
            <p className='text-gray-500 text-[13px] sm:text-[18px] font-serif mt-3'>Email:
                <span className='text-cyan-600 sm:ml-3'>
                    <a href='mailto:keerthiselvaraj2003@gmail.com'>keerthiselvaraj2003@gmail.com</a>
                </span>
            </p>
            <p className='text-gray-500 text-[13px] sm:text-[18px] font-serif mt-3'>Contact Number:<span className='text-cyan-600 sm:ml-3'>6374857178</span></p>
            <p className='text-gray-500 text-[13px] sm:text-[18px] font-serif mt-3'>GitHub:
                <span className='text-cyan-600 italic underline sm:ml-3'>
                <a href='https://www.linkedin.com/in/kiruthika-2k3' target='_blank' rel="noreferrer">Click here</a>
            </span>
            </p>
            <p className='text-gray-500 text-[13px] sm:text-[18px] font-serif mt-3'>LinkedIn:
                <span className='text-cyan-600  italic underline  sm:ml-3'>
                    <a href='https://github.com/Kiruthika-Selvaraj23' target='_blank' rel="noreferrer">Click here</a>
                </span>
            </p>
        </div>
    )

  return (
      <>
          <div id='home' className='bg-white mt-[70px] p-3'>
              <div className=' mt-3 flex justify-around items-center'>
                  <div>
                      <h1 className='sm:text-[18px] text-[15px] text-gray-600 font-serif'>Hello, I'm <span className='font-serif text-cyan-600 text-[18px] sm:text-[25px]'>Kiruthika Selvaraj</span></h1>
                      <p className='text-black font-bold text-[18px] sm:text-[28px] font-serif mt-3'>Frontend Developer and Web Designer</p>
                      <p className='text-gray-500 text-[15px] sm:text-[20px] font-serif mt-3'>I created responsive and dynamic websites with modern web technologies</p>
                      <div className='flex'>
                          <button onClick={() => setMsgForm(true)} className='bg-blue-900 text-[10px] sm:text-[15px] p-1 sm:p-2 rounded-md text-white font-serif mt-5 h-[35px] sm:h-[45px]'>Send Message</button>
                          <p className='text-[15px] sm:text-[20px] text-gray-500 text-center mt-6 ml-3'>- or -</p>
                          <button onClick={() => setContact(true)} className='bg-transparent text-[10px] sm:text-[15px] p-1 sm:p-2 rounded-md text-black border-md border-[1px] mt-5 border-gray-500 font-serif ml-3 h-[35px] sm:h-[45px]'>View Contact</button>
                      </div>
                      {showContact ? renderContactView() : null}
                  </div>
                  <img className='h-[250px] sm:h-[450px] w-[40%] rounded-md hidden sm:hidden md:block' src={GirlImage} alt='girlImage' />
              </div> 
              {showMsgForm ? renderForm() : null}
          </div>
          <Footer/>
    </>
  )
}
