import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartView = () => {

    const { cart, deleteProductCart, subtotal, emptyCart, total } = useContext(CartContext)


    console.log(cart, "Desde Cartview")
    console.log(total, "Desde Cartview")

    return (
        <>
            {
                cart.length == 0 ?

                    (<div className='mx-auto mt-64'>
                        <p className='text-center m-auto font-bold'>Tu carrito está vacío! </p>
                        <Link to={'/'}>
                            <p className='text-center'>Volver</p>
                        </Link>

                    </div>)

                    :

                    (<div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(product => (
                                        <>
                                            <tr>
                                                <th className='flex items-center gap-x-4'><img className='max-w-xs' src={product.img} alt={product.title} />{product.title}</th>
                                                <td>{product.price}</td>
                                                <td>{product.quantity}</td>
                                                <td>${subtotal(product.price, product.quantity)}</td>
                                                <td><button onClick={() => deleteProductCart(product)} className='btn'>Eliminar</button></td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                            <div><button onClick={emptyCart} className='btn btn-error mx-10'>Vaciar Carrito</button>  </div>

                        </table>
                        <div className='flex justify-end m-20'>
                            <p className='text-xl'> El total a pagar es de ${total()}</p>

                        </div>
                    </div>)
            }
        </>
    )
}

export default CartView