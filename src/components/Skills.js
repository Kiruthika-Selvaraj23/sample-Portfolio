import { useContext } from 'react'
import Footer from './Footer'
// import SkillCards from "./SkillCards"
import { DContext } from '../Context'

export default function Skills() {
  const { skillsData } = useContext(DContext)
  
  // const items = [{ name: "HTML", itemImg: HTMLImg },
  //   { name: "CSS", itemImg: CSSImg }, { name: "JavaScript", itemImg: JavaScriptImg }, { name: "React", itemImg: ReactImg },
  //   { name: "TailWind CSS", itemImg: Tailwind }, { name: "Bootstrap", itemImg: Bootstrap }, { name: "Node", itemImg: Node },
  //   { name: "MongoDB", itemImg: Database }, { name: "Express JS", itemImg: Express }];
  const grouped = [];
  for (let i = 0; i < skillsData.length; i += 2) {
    grouped.push(skillsData.slice(i, i + 2));
  }
    return (
      <>
            <div id='skills' className='p-3 mt-10 mb-[80px]'>
                <h1 className='text-blue-800 italic sm:text-center font-bold text-[20px] sm:text-[28px] font-serif ml-28'>My Skills</h1>
                <p className='text-gray-500 text-[16px] sm:text-[20px] sm:text-center font-serif mt-3 ml-28'>What I can do</p>
                <hr className='bg-gray-400 height-[25px] mt-4 mb-4' />
                <h1 className='mt-3 text-blue-900 font-semibold  text-[18px] sm:text-[25px] italic sm:ml-28'>Areas where I excel :-</h1>
          {/* <ul className='flex justify-around flex-wrap mt-3 sm:mt-10'>
            {skillsData.map(eachItem => (
              <li className='bg-white p-3 m-5 shadow-md flex flex-col justify-center items-center text-center shadow-gray-600 rounded-md w-[35%] sm:w-[50%] md:w-[22.5%]'>
                <img src={eachItem.techImage} className='h-[50px] sm:h-[80px] w-[50%] sm:w-[26%]' alt={eachItem.topic} />
                <h1 className='text-gray-700 text-[15px] sm:text-[18px] font-bold font-serif mt-3 mb-3'>{eachItem.topic}</h1>
              </li>
            ))}
          </ul>  */}

          <div className="overflow-hidden w-full relative h-[250px] sm:h-[300px]">
            <ul className="flex animate-marquee whitespace-nowrap will-change-transform w-max">
              {skillsData.concat(skillsData).map((eachItem, index) => (
                <li
                  key={index}
                  className=" bg-white p-3 m-5 shadow-md flex flex-col justify-center items-center text-center shadow-gray-600 rounded-md w-[170px] sm:w-[250px] md:w-[280px]"
                >
                  <img
                    src={eachItem.techImage}
                    className="h-[50px] sm:h-[80px] w-[50%] sm:w-[26%]"
                    alt={eachItem.topic}
                  />
                  <h1 className="text-gray-700 text-[15px] sm:text-[18px] font-bold font-serif mt-3 mb-3">
                    {eachItem.topic}
                  </h1>
                </li>
              ))}
            </ul>
          </div>

 
             {/* <SkillCards/> */}
               


            </div>
            <Footer/>
        </>
  )
}
