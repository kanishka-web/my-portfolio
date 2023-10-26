import React from 'react'
import { data } from "../data/education.js";



const Education = () => {
    const schooling=data;
return (
    <div name='education' className=' text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Education
          </p>
          {/* <p className='py-6'>hhh</p> */}
        </div>

{/* container for Education */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {schooling.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider block ">
        {item.name}
      </span>
      <span className="text-xl my-[0.5px] font bold text-white tracking-wider block ">
        {item.description}
      </span>
      <span className="text-xl font bold text-white tracking-wider block ">
        {item.year}
      </span>
      <span className="text-xl font bold text-white tracking-wider block ">
        {item.percentage}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.linkOfDegree} target="_blank">
          <button
            className="text-center rounded-lg px-4 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Certificate
          </button>
        </a>
        {/* eslint-disable-next-line */}
        {/* <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a> */}
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
}

export default Education;


