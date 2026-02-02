import React, { createContext } from 'react'
import PortfolioImage from "./accets/PortflioImage.jpg"
import EcommerceImage from "./accets/EcommerceImage.jpg"
import BlogsDataImage from "./accets/BlogsDataImage.jpg"
import HTMLImg from './accets/HTML.png'
import CSSImg from './accets/CSS.png'
import JavaScriptImg from './accets/Javascript.png'
import ReactImg from './accets/React.png'
import FigmaImg from './accets/Figma.png'

export const DContext = createContext()

export default function Context(props) {
    const projectsData = [{
        image : PortfolioImage,
        title: "Portfolio Website",
    desc: "Personal protfoilo site design",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind",
        projLink: "https://wikipedia02.ccbp.tech"
    }, {    image: EcommerceImage,
            title: "ECommerce Website",
            desc: "Online Shopping platform",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind",
        projLink: "https://bookhub01.ccbp.tech"
        }, {
            image: BlogsDataImage,
            title: "Blogs Website",
            desc: "Responsive web block application",
        techUsed: "React, HTML, CSS, JavaScript, Tailwind",
        projLink: "https://swift07.ccbp.tech"
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
            topic: "Figma",
            techImage: FigmaImg
        },
    ]

    
    const datas = {projectsData, skillsData}
    
  return (
      <DContext.Provider value={ datas}>
          {props.children}
    </DContext.Provider>
  )
}
