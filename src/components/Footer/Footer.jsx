import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode, } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-gray-500 my-5 flex flex-col items-center'>
            <div className='flex items-center gap-1 text-white font-logo mt-5'>
                <p className=''>AleJSXanware</p>
                <FontAwesomeIcon icon={faCode} size="xs" className='text-white' />
            </div>
            <p className='text-white'>2023, todos los derechos reservados</p>
            <div className='text-white'>
                <p>Desarrollado por Adriel Vazquez</p>
            </div>
            <div className='mb-5'>
                <a href="https://www.linkedin.com/in/adriel-alejandro-vazquez-268977239/">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" className='text-white mx-1' />
                </a>
                <a href="https://github.com/adrielvazquez89x">
                    <FontAwesomeIcon icon={faGithub} size="lg" className='text-white' />
                </a>

            </div>


        </div>
    )
}

export default Footer