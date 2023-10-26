import React, { useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick=()=>{
        setNav(!nav);
    }
  return (
    <div className='w-full h-[70px] fixed flex justify-between items-center px-4 bg-[black] text-gray-300'>
        <div>
            <img src={Logo} alt='logo img' style={{width:"40px",height:"30px"}} />
        </div>
        {/* menu bar */}
           <ul className=' md:flex hidden' style={{color:"white"}}>
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='education' smooth={true} duration={500}>Education</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
                <li><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>E-Mail</Link></li>
                <li><Link to='footer' smooth={true} duration={500}>contact</Link></li>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {/* <FaBars /> */}
            {!nav?<FaBars/>:<FaTimes/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav?"hidden":'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'} style={{color:"white"}}>
                <li className='py-6 text-4xl'><Link to='home' smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
                <li className='py-6 text-4xl'><Link to='about' smooth={true} duration={500} onClick={handleClick}>About</Link></li>
                <li className='py-6 text-4xl'><Link to='education' smooth={true} duration={500} onClick={handleClick}>Education</Link></li>
                <li className='py-6 text-4xl'><Link to='skills' smooth={true} duration={500} onClick={handleClick}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link to='work' smooth={true} duration={500} onClick={handleClick}>Work</Link></li>
                <li className='py-6 text-4xl'><Link to='experience' smooth={true} duration={500} onClick={handleClick}>Experience</Link></li>
                <li className='py-6 text-4xl'><Link to='contact' smooth={true} duration={500} onClick={handleClick}>Contact</Link></li>
            </ul>
        {/* social icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
               <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/kanishka-gupta-0695891b0'>
                Linkedin 
                <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/kanishka-web'>
                GitHub 
                <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#65c2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto:gkanishka101@gmail.com'>
                EMail 
                
                <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'  href='https://drive.google.com/file/d/10IaEmpWuQyxtyH8ggE6904e093ngaHb0/view?usp=sharing'>
                Resume
                <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
               </ul>
        </div>
    </div>
  )
}

export default Navbar