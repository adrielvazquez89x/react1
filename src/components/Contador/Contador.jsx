import { useState } from 'react'

const Contador = ({stock, onAdd, initial}) => {

    const [count, setCount] = useState(initial)


    const clickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
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
            <div className='m-auto'>
                <p>Stock disponible: {stock} </p>
            </div>
        </div>

    )
}

export default Contador