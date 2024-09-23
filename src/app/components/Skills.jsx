import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
const Skills = () => {
    const Skills = [
       { title: "React", icon: <FaReact width={30} hanging={30}/>},
       { title: "JavaScript", icon: <FaJsSquare width={30} hanging={30}/>},
       { title: "Next js", icon: <RiNextjsFill width={30} hanging={30}/>},
       { title: "TypeScript", icon: <SiTypescript width={30} hanging={30}/>},
    ]
  return (
    <div className='py-20 bg-gradient-to-b from-[#381a5f] to-black '>
        <div className="flex items-center justify-center flex-row gap-8">
            {Skills.map((skill, index)=>(
                <div className="bg-white/20 p-6 flex flex-col items-center justify-center rounded-md text-white w-[200px] " key={index}>
                    <div className="text-6xl">{skill.icon}</div>
                    <h3>{skill.title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills