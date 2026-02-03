import React, { useContext, useState } from 'react'
import { DContext } from '../Context'
import Footer from './Footer'

export default function Projects() {
    const [showProjectDetail, setProjectDetail] = useState([])
    const [isShow, setShow] = useState(false)
    const { projectsData, projectDetail } = useContext(DContext)
    
    const clickProject = (id) => {
        setShow(true)
        const projData = projectDetail.filter(item => item.id === id)
        setProjectDetail(projData)
    }

    const renderProjectDetail = () => (
        <div className='flex justify-center'>
            <div className='w-[70%] bg-purple-200 p-5 mt-9 m-3 rounded-md'>
                <h1 className='text-center text-[15px] font-bold text-gray-700'>*About the Project*</h1>
                <div className='flex justify-between'>
                    <h1 className='text-center font-bold text-[25px] underline text-cyan-900 italic'>{showProjectDetail[0].topic}</h1>
                    <div>
                        <a className='text-blue-500 underline italic mr-4' href={showProjectDetail[0].projLink} target='_blank' rel="noreferrer">Project Link</a>
                        <a className='text-blue-500 underline italic mr-4' href='https://github.com/Kiruthika-Selvaraj23' target='_blank' rel="noreferrer">Source Code</a>
                    </div>
                </div>
                <p className='text-[20px] font-sans text-gray-600'>{showProjectDetail[0].desc}</p>
                <p className='text-center text-[15px] font-bold text-cyan-900 italic'>Tech used: <span className='text-violet-800'>{showProjectDetail[0].techUsed}</span></p>
            </div>
        </div>
    )

    return (
      <>
            <div id='projects' className='p-3 mt-10'>
                <h1 className='text-fuchsia-800 italic text-center font-bold text-[28px] font-serif ml-28'>My Projects</h1>
          <p className='text-gray-500 text-[20px] font-serif text-center mt-3 ml-28'>Some of my recent works</p>
          <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
                <h1 className='mt-3 text-teal-500 font-bold text-[25px] italic ml-28'>Frontend :-</h1>

          <ul className='flex justify-around flex-wrap mt-10'>
              {projectsData.map(eachItem => (
                  <li className='bg-white p-3 m-3 shadow-md text-center shadow-gray-600 rounded-md w-[60%] sm:w-[60%] md:w-[25%]'>
                      <img src={eachItem.image} className='h-[200px] w-[100%]' alt='portfolio' />
                      <h1 className='text-[18px] font-bold font-serif mt-3 mb-3'>{eachItem.title}</h1>
                      <p className='text-cyan-800 text-[17px] font-serif'>{eachItem.desc}</p>
                      <button onClick={() => clickProject(eachItem.id)} className='bg-blue-900 p-2 rounded-md text-white font-serif mt-5'>View Project</button>
                  </li>
              ))}
                </ul>
             {isShow ? renderProjectDetail() : null}

            </div>
            <Footer/>
        </>
  )
}
