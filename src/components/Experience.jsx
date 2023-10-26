import React from 'react'
import {data} from '../data/experience'

const Experience = () => {
    const experience=data;
  return (
  <div name='experience' className='text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Experience
          </p>
          <p className='py-6'>Below, you'll find a summary of my professional background and experience in the industry.</p>
        </div>

{/* container for experience */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
{experience.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider ">
        {item.name}
      </span>
      <span className="text-xl my-[0.5px] block text-white tracking-wider ">
        {item.heading}
      </span>
      <span className="text-xl  text-white tracking-wider ">
        {item.description}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.certificatelink} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Certificate
          </button>
        </a>
        {/* eslint-disable-next-line */}
      
      </div>
    </div>
  </div>
))}      


</div>
      </div>
    </div>
  )
}

export default Experience