import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const CartWidget = () => {

    const { cartCountProducts } = useContext(CartContext)

    //console.log(cartCountProducts)

    return (
        <div className='flex'>
            <FontAwesomeIcon icon={faCartShopping} size="2x" className='text-white my-2' />
            <span className='bg-red-600 w-[18px] h-[18px] rounded-full flex items-center justify-center'> <p className='text-white text-sm font-bold'>{cartCountProducts()}</p></span>
        </div>
    )
}

export default CartWidget