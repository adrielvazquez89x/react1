import { useState } from 'react'
import onAdd from '../ItemDetail/ItemDetail'

const Contador = ({stock, onAdd, initial}) => {

    const [count, setCount] = useState(initial)


    const clickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }

        else {
            console.log('No hay stock')

        }
    }

    const clickRemove = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className='flex gap-5'>
            <div className='flex gap-5'>
                <button type='button' className='btn btn-error' onClick={clickRemove}>-</button>
                <div className='m-auto'>{count}</div>
                <button type='button' className='btn btn-info' onClick={clickAdd}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)} type='button' className='btn btn-success' >
                    Agregar al Carrito
                </button>
            </div>
            <div>
                <p>Nuestro stock disponible es {stock} </p>
            </div>
        </div>

    )
}

export default Contador