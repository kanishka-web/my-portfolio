import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import kanishka from '../assets/kanishka.jpeg'



const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f]'>
        {/* container */}
        <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
          <div className="col-span-2 " style={{paddingTop:"10px"}}>
          <p className='text-pink-600' style={{paddingTop:"80px"}}>
            Hi, my name is
           </p>
           <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kanishka Gupta</h1>
           <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a frontend developer.</h2>
           <p className='text-[#8892b0] py-2 max-w-[700px]'>I am a recent B.Tech CSE graduate from DAVIET, JALANDHAR, having completed my degree from 2019 to 2023. I possess a rich 11 months of hands-on experience as a Software Developer Intern at the esteemed product-based company, STMicroelectronic Pvt. Ltd., located in Greater Noida.

In terms of my technical prowess, I have honed my skills across a wide spectrum, delving into ReactJS, Javascript, HTML, CSS, Bootstrap, TailwindCSS, ThreeJS, Python, Python-TKinter, C++, SQL, MongoDB, and GIT. Furthermore, I've also dipped my toes into the realm of SAP Abap, acquiring a foundational understanding.

I warmly invite you to connect with me on LinkedIn, where you'll find not only my professional history but also links to my portfolio, where you can explore additional facets of my work. Feel free to explore those links at your convenience. </p>
           <div>
           <Link to="work">
           <button className='border-2 group text-white px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View My Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
         </button>
           </Link> 
        </div>
          </div>
          <div>
          <img src={kanishka} className='hero' alt='mypicture' />
        </div>
        </div>
       
    </div>
  )
}

export default Home
// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-scroll';
// import kanishka from '../assets/kanishka.jpeg';
// import { motion } from 'framer-motion';

// const Home = () => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   return (
//     <div name="home" className='bg-[#0a192f]'>
//       {/* container */}
//       <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
//         <div className="col-span-2" style={{ paddingTop: "10px" }}>
//           <motion.p
//             className='text-pink-600'
//             style={{ paddingTop: "80px" }}
//             variants={textVariants}
//             initial='hidden'
//             animate='visible'
//           >
//             Hi, my name is
//           </motion.p>
//           <motion.h1
//             className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
//             variants={textVariants}
//             initial='hidden'
//             animate='visible'
//           >
//             Kanishka Gupta
//           </motion.h1>
//           <motion.h2
//             className='text-4xl sm:text-7xl font-bold text-[#8892b0]'
//             variants={textVariants}
//             initial='hidden'
//             animate='visible'
//           >
//             I am a frontend developer.
//           </motion.h2>
//           <motion.p
//             className='text-[#8892b0] py-2 max-w-[700px]'
//             variants={textVariants}
//             initial='hidden'
//             animate='visible'
//           >
//             {/* Your text content here */}
//           </motion.p>
//           <div>
//             <Link to="work">
//               <motion.button
//                 className='border-2 group text-white px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
//                 whileHover={{ scale: 1.05 }} // Example transition on button hover
//               >
//                 View My Work
//                 <span className='group-hover:rotate-90 duration-300'>
//                   <HiArrowNarrowRight className='ml-3' />
//                 </span>
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <motion.img
//             src={kanishka}
//             className='hero'
//             alt='mypicture'
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

