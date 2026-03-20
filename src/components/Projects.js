import React, { useContext, useState } from 'react'
import { DContext } from '../Context'
import Footer from './Footer'
import HoverCard from "./HoverCard"
import EcommerceImage from "../accets/EcommerceImage.jpg"
import LMS from "../accets/LMS.jpg"

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
        <div id='detailsAboutProject' className='flex justify-center'>
            <div className='sm:w-[80%] bg-blue-100 p-5 mt-9 m-3 rounded-md'>
                <h1 className='text-center text-[15px] font-bold text-gray-700'>*About the Project*</h1>
                <div className='sm:flex sm:justify-between w-[90%]'>
                    <h1 className='text-center font-bold underline text-blue-900 italic text-[15px] sm:text-[20px] md:text-[25px]'>{showProjectDetail[0].topic}</h1>
                    <div className='mt-2 mb-2 sm:mt-0 sm:mb-0'>
                        <a className='text-blue-500 underline italic mr-4 text-[12px] sm:text-[15px] md:text-[20px]' href={showProjectDetail[0].projLink} target='_blank' rel="noreferrer">Project Link</a>
                        <a className='text-blue-500 underline italic mr-4 text-[12px] sm:text-[15px] md:text-[20px]' href={showProjectDetail[0].sourceCode} target='_blank' rel="noreferrer">Source Code</a>
                    </div>
                </div>
                <p className='text-[14px] sm:text-[20px] font-sans text-gray-600 mt-3'>{showProjectDetail[0].desc}</p>
                <p className='text-center text-[13px] sm:text-[15px] lg:text-[17px] font-bold text-blue-800 italic mt-3'>Tech used:<span className='text-blue-600 ml-2'>{showProjectDetail[0].techUsed}</span></p>
            </div>
        </div>
    )

    return (
      <>
            <div id='projects' className='p-3 mt-10'>
                <h1 className='text-blue-800 italic sm:text-center font-bold text-[20px] sm:text-[28px] font-serif ml-28'>My Projects</h1>
                <p className='text-gray-500 text-[16px] sm:text-[20px] font-serif sm:text-center mt-3 ml-28'>Some of my recent works</p>
          <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
                <h1 className='mt-3 text-blue-900 font-bold text-[18px] sm:text-[25px] italic sm:ml-28'>Frontend :-</h1>

          <ul className='flex justify-around flex-wrap mt-4 sm:mt-10'>
              {projectsData.map(eachItem => (
                  <li className='bg-white p-3 m-3 shadow-md text-center shadow-gray-600 rounded-md w-[70%] sm:w-[60%] md:w-[30%] lg:w-[25%]'>
                      <img src={eachItem.image} className='h-[150px] sm:h-[200px] w-[100%]' alt='portfolio' />
                      <h1 className='text-[15px] sm:text-[18px] font-bold font-serif mt-3 mb-3'>{eachItem.title}</h1>
                      <p className='text-gray-500 text-[11px] sm:text-[17px] font-serif'>{eachItem.desc}</p>
                      <button onClick={() => clickProject(eachItem.id)} className='bg-blue-900 text-[12px] sm:text-[15px] p-1 sm:p-2 rounded-[4px] sm:rounded-md text-white font-serif mt-5'><a href='#detailsAboutProject'>View Project</a></button>
                  </li>
              ))}
                </ul>
                {isShow ? renderProjectDetail() : null}
                
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" , gap: "20px", flexWrap: "wrap" }}>
                    <HoverCard
                        image={EcommerceImage}
                        title="Ecommerce Website (ECart)"
                        description="Developed a full-stack E-Commerce web application (ECart) with secure role-based authentication, robust APIs, and efficient management of products, users, and orders. Built an admin panel for monitoring and CRUD operations, optimizing database performance and scalability to showcase full-stack expertise."  
                        id = "1"
                    />
                    <HoverCard
                        image={LMS}
                        title="Learning Management System"
                        description="Developed a front-end LMS web application to showcase courses, detailed syllabi, and allow admins to manage topics efficiently. Integrated an interactive code playground and real-time chat for student engagement, using modern front-end technologies to deliver a responsive, production-ready user experience."
                        id ="2"
                    />
                </div>

            </div>
            <Footer/>
        </>
  )
}
