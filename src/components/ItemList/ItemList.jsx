import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Item from '../Item/Item'
import products from '../../mock/products'

const ItemList = () => {

    const [items, setItems] = useState([])

    const getItems = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products)
            }, 2000);

        })
    }

    const { category } = useParams()
    //    console.log(category)

    useEffect(() => {

        if (category) {

            getItems().then(response => {
                setItems(response.filter(product => product.category == category))
            }).catch(error => { console.log(error); })

        }
        else {

            getItems().then(response => {
                setItems(response)

            }).catch(error => { console.log(error); })

        }

        return () => setItems([])

    }, [category])

    return (
        <>
            {
                items.length

                    ?
                    <div className='flex justify-evenly' >
                        {items.map(i => <Item key={i.id} {...i} />)}
                    </div>
                    :
                    <h1 className='text-center'>Cargando...</h1>

            }

        </>

    )
}

export default ItemList