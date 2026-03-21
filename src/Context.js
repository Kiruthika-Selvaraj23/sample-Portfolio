import React, { createContext, useState } from 'react'
import EcommerceImage from "./accets/EcommerceImage.jpg"
import LMS from "./accets/LMS.jpg"
import HTMLImg from './accets/HTML.png'
import CSSImg from './accets/CSS.png'
import JavaScriptImg from './accets/Javascript.png'
import ReactImg from './accets/React.png'
import Tailwind from './accets/Tailwind.png'
import Bootstrap from './accets/Bootstrap.png'
import Node from './accets/Node.png'
import Database from "./accets/Database.png"
import Express from "./accets/Express.png"


export const DContext = createContext()

export default function Context(props) {
    const [showProjectDetail, setProjectDetail] = useState([])
    const [isShow, setShow] = useState(false)

    const projectsData = [{
        id: 1,  image: EcommerceImage,
        title: "ECommerce Website (ECart)",
        desc: "Developed a full-stack E-Commerce web application (ECart) with secure role-based authentication, robust APIs, and efficient management of products, users, and orders. Built an admin panel for monitoring and CRUD operations, optimizing database performance and scalability to showcase full-stack expertise."
        }, {
        id: 2, image: LMS,
        title: "Learning Management System",
        desc: "Developed a front-end LMS web application to showcase courses, detailed syllabi, and allow admins to manage topics efficiently. Integrated an interactive code playground and real-time chat for student engagement, using modern front-end technologies to deliver a responsive, production-ready user experience."
        },]
    
    const skillsData = [{
        topic: "HTML",
        techImage: HTMLImg
    }, {
            topic: "CSS",
        techImage: CSSImg
        }, {
            topic: "JavaScript",
        techImage: JavaScriptImg
        }, {
            topic: "React",
            techImage: ReactImg
        }, {
            topic: "Tailwind CSS",
            techImage: Tailwind
        }, {
            topic: "Bootstrap",
            techImage: Bootstrap
        },
        {
            topic: "Node",
            techImage: Node
        }, 
        {
            topic: "Express Js",
            techImage: Express
        },
        {
            topic: "MongoDB",
            techImage: Database
        }
    ]

    const projectDetail = [
   {
        id: 1,
        topic: "ECommerce",
        desc: "Developed a full-stack E-Commerce web application (ECart) with a strong focus on backend architecture and data handling. Designed and implemented role- based modules for users, sellers, and admin with secure authentication and authorization. Built robust backend APIs to manage products, users, and orders efficiently. Implemented server - side logic for order processing, product management, and data validation. Enabled sellers to perform CRUD operations on product listings through well - structured backend services. Developed an admin panel to monitor system activity, manage users, and control platform data. Ensured efficient database integration and optimized queries for performance and scalability. This project highlights my expertise in backend development, API design, database management, and full - stack integration.",
        techUsed: "HTML, CSS, JavaScript, Tailwind, React, Hooks, React Router, Node, Express, MongoDB, Postman",
            projLink: "https://bookhub01.ccbp.tech",
            sourceCode: "https://github.com/Kiruthika-Selvaraj23/ECart"

        }, {
        id: 2,
        topic: "Learning Management System",
        desc: "Developed a front-end Learning Management System (LMS) web application that showcases courses and detailed course syllabi in a clean, intuitive interface. Enabled administrative control by allowing admins to delete specific topics from the syllabus, streamlining content management. Integrated a code playground to provide interactive coding practice for learners, enhancing engagement and skill-building. Implemented a real-time chat box to facilitate student queries and improve communication. Leveraged modern front-end technologies to deliver a responsive, user-friendly experience without backend dependencies. Focused on dynamic content rendering and seamless navigation to improve usability. Designed the system to be scalable, maintainable, and visually appealing, demonstrating full-stack project capabilities on the front-end. Deployed the application to a live environment, showcasing a professional, production-ready web project suitable for portfolio presentation.",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind, Node, Hooks, React Router",
            projLink: "https://courses-8as6.vercel.app/",
            sourceCode: "https://github.com/Kiruthika-Selvaraj23/Courses"
    }]

    
    const datas = { projectsData, skillsData, projectDetail, showProjectDetail, setProjectDetail, isShow, setShow }
    
  return (
      <DContext.Provider value={datas}>
          {props.children}
    </DContext.Provider>
  )
}
