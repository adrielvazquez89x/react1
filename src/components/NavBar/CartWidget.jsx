import React, { useContext } from 'react'
import cartIcon from '../../assets/img/shopping-cart.png'
import { CartContext } from '../../context/CartContext'



const CartWidget = () => {

    const {cartCountProducts} = useContext(CartContext)

    console.log(cartCountProducts)

    return (
        <div className='flex'>
            <img src={cartIcon} alt="" className='w-12' />
            <div className='bg-red-600 rounded-full'>{cartCountProducts()}</div>
        </div>
    )
}

export default CartWidget