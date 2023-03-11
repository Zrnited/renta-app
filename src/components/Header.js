import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-3 bg-customBlue'>
        <nav className='p-1 bg-slate-500 flex flex-row justify-between'>
            <h1>renta</h1>
            <div className='flex flex-row'>
              <ul className='flex flex-row'>
                <li>
                  <Link>
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link>
                    About
                  </Link>
                </li>
              </ul>
              <button>
                <Link>
                  Get Started
                </Link>
              </button>
            </div>
        </nav>
    </header>
  )
}

export default Header