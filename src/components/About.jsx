import React from 'react'


const About = () => {
  return (
    <div name="about" className='bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* container div */}
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-pink-600 border-b-4'>About
                    </p>
                </div>
                <div></div>
                </div>

                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>
                        Hi, I'm kanishka Gupta. Please take a look around.
                    </p>
                </div>
                <div>
                  <p>
                  As a highly driven and innovative software developer, I thrive on embracing complex challenges in the ever-evolving landscape of technology. My unwavering dedication to continuous learning and my commitment to delivering cutting-edge solutions set the stage for my passion in this field. With a tenacious enthusiasm and an insatiable hunger for knowledge, I am poised to not only contribute significantly but also redefine the boundaries of software development to achieve remarkable results.
                    </p> 
                    </div>
                    </div>

        </div>
        </div>
  )
}

export default About