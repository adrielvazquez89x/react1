import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Contador from '../Contador/Contador'

const ItemDetail = ({ item }) => {

    const { addToCart } = useContext(CartContext)
    const [purchase, setPurchase] = useState(false)

    //Destructuración del item en cuestion
    const { title, description, price, img } = item

    const onAdd = (quantity) => {
        const newProduct = { ...item, quantity }
        addToCart(newProduct)
        setPurchase(!purchase)
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-left'>{description}</p>
                <p className='text-lg font-bold text-green-600'> ${price}</p>

                {!purchase ? (
                    <div className="card-actions justify-end">
                        <Contador stock={item.stock} onAdd={onAdd} initial={1} />
                    </div>

                ) : (
                    <>
                        <Link to={'/cart'}>
                            <button className='btn btn-success'> Finalizar Compra</button>
                        </Link>
                        <Link to={'/'}>
                            <p className='mt-4 hover:font-bold'> Seguir Comprando</p>
                        </Link>

                    </>

                )
                }
            </div>
        </div>

    )
}

export default ItemDetail