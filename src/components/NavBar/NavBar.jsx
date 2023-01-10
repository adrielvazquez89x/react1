import React from 'react'
import CartWidget from '../NavBar/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className='flex justify-between bg-blue-400'>
            <Link to={'/'}>
                <div className='text-xl text-white font-bold mt-2'>
                    WebMasters2000
                </div>
            </Link>
            <ul className='flex justify-evenly'>
                <Link to={'/'}>
                    <li className='p-1 text-white'>Inicio</li>
                </Link>
                <Link to={`category/development`}>
                    <li className='p-1 text-white'>Desarrollo</li>
                </Link>
                <Link to={`category/design`}>
                    <li className='p-1 text-white'>Diseño</li>
                </Link>
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