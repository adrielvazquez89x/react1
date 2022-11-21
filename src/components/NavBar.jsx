import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className='flex justify-between bg-blue-400'>
            <div className='text-xl text-white font-bold mt-2'>
                MarcaProvisoria.jpg
            </div>
            <ul className='flex justify-evenly'>
                <li className='p-1 text-white'><a href='#'>Inicio</a></li>
                <li className='p-1 text-white'><a href='#'>Tienda</a></li>
                <li className='p-1 text-white'><a href='#'>Nosotros</a></li>
                <li className='p-1 text-white'><a href='#'>Contacto</a></li>
            </ul>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar