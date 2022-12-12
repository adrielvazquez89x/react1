import React from 'react'
import Contador from '../Contador/Contador'

const ItemDetail = ({item}) => {

    const {title, description, price, img} = item

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-40">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-left'>{description}</p>
                <p className='text-lg font-bold text-green-600'> ${price}</p>
                <div className="card-actions justify-end">
                    <Contador/>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail