import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import CartWidget from '../NavBar/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className='flex justify-between bg-gray-700 p-2 '>
            <Link to={'/'}>
                <div className='text-xl text-white mt-2 font-logo flex  items-center justify-center '>
                    <p>AleJSXanware</p>
                    <FontAwesomeIcon icon={faCode} size="l" className='text-white' />
                </div>
            </Link>
            <ul className='flex justify-evenly items-center'>
                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-sky-500 font-bold' : 'text-white')}  >
                    <li className='p-1 hover:text-sky-500  text-hover hover:font-bold active:text-sky-500'>Inicio</li>
                </NavLink>
                <NavLink to={`category/development`} className={({ isActive }) => (isActive ? 'text-sky-500 font-bold' : 'text-white')}>
                    <li className='p-1 hover:text-sky-500  text-hover hover:font-bold active:text-sky-500'>Desarrollo</li>
                </NavLink>
                <NavLink to={`category/design`} className={({ isActive }) => (isActive ? 'text-sky-500 font-bold' : 'text-white')}>
                    <li className='p-1 hover:text-sky-500  text-hover hover:font-bold active:text-sky-500'>Diseño</li>
                </NavLink>
            </ul>
            <Link to={'/cart'}>
                <div>
                    <CartWidget />
                </div>
            </Link>
        </div>
    )
}

export default NavBar