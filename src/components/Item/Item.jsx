import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ title, description, price, id, img }) => {

    console.log(img)
    return (
        <div className='flex'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div>
                        <p className='text-lg font-bold'>
                            ${price}
                        </p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/item/${id}`}>
                            <button className="btn btn-success">Comprar</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item