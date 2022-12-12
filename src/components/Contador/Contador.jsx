import { useState } from 'react'

const Contador = () => {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(5)

    const clickAdd = () => {

        if (stock == 0) {
            console.log('No tenemos stock')
        }
        else {
            setCount(count + 1)
            setStock(stock - 1)
        }
    }
    const clickRemove = () => {

        if (count == 1) {
            console.log('Agrega un producto!')
        }
        else {
            setCount(count - 1)
            setStock(stock + 1)
            console.log(stock)
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
                <button type='button' className='btn btn-success' >
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