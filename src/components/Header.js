import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';

const Header = ({ setSidebar, sidebar }) => {
  return (
    <header className='p-2 shadow-md fixed top-0 left-0 right-0 bg-white z-20'>
        <nav className='p-1 flex flex-row justify-between items-center lg:justify-around'>
            <h1 className='uppercase text-customBlue font-extrabold text-xl tracking-wider lg:text-2xl'>renta</h1>
            <div className='hidden sm:flex sm:flex-row items-center gap-3 lg:gap-10'>
              <ul className='flex flex-row gap-5 lg:gap-8'>
                <li>
                  <Link className='hover:text-customBlue transition delay-100'>
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-customBlue transition delay-100'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-customBlue transition delay-100'>
                    About
                  </Link>
                </li>
              </ul>
              <button className='bg-customBlue py-2 px-5 text-white text-sm rounded-lg hover:opacity-80 transition delay-100 cursor-pointer lg:text-base lg:px-12 lg:py-3'>
                <Link>
                  Get Started
                </Link>
              </button>
            </div>
            {/* Hamburger */}
            <motion.button animate={{ rotate: sidebar ? 90 : 0}} className='flex focus:outline-none sm:hidden' onClick={()=>{
              setSidebar(!sidebar);
            }}>
              <GiHamburgerMenu size={'20px'} />
            </motion.button>
        </nav>
    </header>
  )
}

export default Header