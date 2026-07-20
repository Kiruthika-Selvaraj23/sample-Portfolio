import { createContext, useState } from 'react'
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
            projLink: "https://e-cart-murex-two.vercel.app",

        }, {
        id: 2,
        topic: "Application Tracking System",
        desc: "Developed a full-stack Applicant Tracking System that streamlines the end-to-end recruitment process, from receiving client job requirements to candidate submission and recruitment tracking. Implemented Role-Based Access Control (RBAC) for Super Admin, Admin, Manager, Team Lead, and Recruiter, ensuring secure access to features based on user responsibilities. Built comprehensive modules for Client Management, Job Management, Candidate Management, and User Management, enabling recruiters to efficiently organize recruitment workflows. Designed and developed responsive frontend interfaces using React JS and integrated them with secure RESTful APIs built using Node JS, Express JS, and TypeScript. Developed features to track recruiter activities, monitor candidate submissions, maintain user activity logs, and generate reports for recruitment performance analysis. Implemented secure authentication, authorization, and session management to protect sensitive recruitment data and ensure controlled system access. Optimized PostgreSQL database operations and API performance to provide fast and reliable data retrieval across large volumes of recruitment records. Collaborated with UI/UX designers, QA engineers, and team members throughout the development lifecycle to deliver a scalable, user-friendly, and maintainable enterprise recruitment platform.",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind, Node, Hooks, React Router",
            projLink: "https://www.santechnovation.com/",
    }]

    
    const datas = { projectsData, skillsData, projectDetail, showProjectDetail, setProjectDetail, isShow, setShow }
    
  return (
      <DContext.Provider value={datas}>
          {props.children}
    </DContext.Provider>
  )
}
