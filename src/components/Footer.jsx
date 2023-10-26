import React from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const Footer = () => {
   
  return (
    <div className='w-full h-[100px] flex text-center px-4 bg-[black] text-gray-300' name="footer">
 <div className='w-full'>
               <ul className='flex items-center justify-center py-4'>
                <li className='w-[60px] h-[60px] flex items-center bg-blue-600'>
                    <a className='flex  items-center w-full text-gray-300' href='https://www.linkedin.com/in/kanishka-gupta-0695891b0'>
                <FaLinkedin size={30}/>
                    </a>
                </li>
                
                <li className='w-[60px] h-[60px] flex items-center mx-4 bg-[#333333]'>
                    <a className='flex items-center w-full text-gray-300' href='https://github.com/kanishka-web'>
       
                <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex  items-center bg-blue-600'>
                    <a className='flex  items-center w-full text-gray-300' href='https://www.facebook.com/profile.php?id=61550249212269&mibextid=LQQJ4d'>

                <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center mx-4 bg-[#65c2b0]'>
                    <a className='flex  items-center w-full text-gray-300' href='mailto:gkanishka101@gmail.com'>
            
                <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex items-center  bg-[#565f69]'>
                    <a className='flex  items-center w-full text-gray-300'  href='https://drive.google.com/file/d/10IaEmpWuQyxtyH8ggE6904e093ngaHb0/view?usp=sharing'>
    
                <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
               </ul>
        </div>
    </div>
  )
}

export default Footer;