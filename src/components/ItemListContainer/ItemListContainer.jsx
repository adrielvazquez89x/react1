import React from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            <div className='h1 text-center text-3xl font-bold my-5'>{greeting}</div>
            <div><ItemList /></div>
        </div>

    )
}

export default ItemListContainer