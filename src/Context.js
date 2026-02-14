import React, { createContext } from 'react'
import PortfolioImage from "./accets/PortflioImage.jpg"
import EcommerceImage from "./accets/EcommerceImage.jpg"
import BlogsDataImage from "./accets/BlogsDataImage.jpg"
import HTMLImg from './accets/HTML.png'
import CSSImg from './accets/CSS.png'
import JavaScriptImg from './accets/Javascript.png'
import ReactImg from './accets/React.png'
import Tailwind from './accets/Tailwind.png'
import Bootstrap from './accets/Bootstrap.png'
import Node from './accets/Node.png'


export const DContext = createContext()

export default function Context(props) {
    const projectsData = [{
        id:1,
        image : PortfolioImage,
        title: "Portfolio Website",
        desc: "Personal portfolio website built with React to showcase projects, skills, and experience through a clean, responsive UI.Features reusable components, smooth navigation, and modern front- end best practices."
    }, {
        id: 2,  image: EcommerceImage,
        title: "ECommerce Website",
        desc: "Personal portfolio website built with React to showcase projects, skills, and experience through a clean, responsive UI.Features reusable components, smooth navigation, and modern front- end best practices."

        }, {
        id: 3, image: BlogsDataImage,
        title: "Blogs Website",
        desc: "Personal portfolio website built with React to showcase projects, skills, and experience through a clean, responsive UI.Features reusable components, smooth navigation, and modern front- end best practices."
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
    ]

    const projectDetail = [{
        id: 1,
        topic: "Personal Portfolio",
        desc: "Developed a responsive personal portfolio website using React to showcase professional skills, projects, and experience in a structured and visually engaging manner. The application follows modern front-end development practices, emphasizing component reusability, clean architecture, and smooth user interactions. Integrated EmailJS to enable direct communication through a contact form, allowing visitors to send messages without requiring a backend server.The website is optimized for performance and accessibility and is fully responsive across devices, ensuring a consistent user experience on desktops, tablets, and mobile platforms.",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind, Node",
                projLink: "https://wikipedia02.ccbp.tech"

    }, {
        id: 2,
        topic: "ECommerce",
        desc: "Developed a responsive personal portfolio website using React to showcase professional skills, projects, and experience in a structured and visually engaging manner. The application follows modern front-end development practices, emphasizing component reusability, clean architecture, and smooth user interactions. Integrated EmailJS to enable direct communication through a contact form, allowing visitors to send messages without requiring a backend server.The website is optimized for performance and accessibility and is fully responsive across devices, ensuring a consistent user experience on desktops, tablets, and mobile platforms.",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind, Node, Hooks, React Router",
        projLink: "https://bookhub01.ccbp.tech"

        }, {
        id: 3,
        topic: "Block Lists",
        desc: "Developed a responsive personal portfolio website using React to showcase professional skills, projects, and experience in a structured and visually engaging manner. The application follows modern front-end development practices, emphasizing component reusability, clean architecture, and smooth user interactions. Integrated EmailJS to enable direct communication through a contact form, allowing visitors to send messages without requiring a backend server.The website is optimized for performance and accessibility and is fully responsive across devices, ensuring a consistent user experience on desktops, tablets, and mobile platforms.",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind, Node, Hooks, React Router",
        projLink: "https://swift07.ccbp.tech"

    }]

    
    const datas = { projectsData, skillsData, projectDetail }
    
  return (
      <DContext.Provider value={datas}>
          {props.children}
    </DContext.Provider>
  )
}
