import React from 'react'
import cartIcon from '../assets/img/shopping-cart.png'


const CartWidget = () => {
    return (
        <div className='flex'>
            <img src={cartIcon} alt="" className='w-12' />
            <div className='bg-red-600 rounded-full'>3</div>
        </div>
    )
}

export default CartWidget