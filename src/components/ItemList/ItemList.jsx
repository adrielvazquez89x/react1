import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import products from '../../mock/products'
import Loader from '../Loader/Loader'


const ItemList = () => {

    //Array de los productos en venta
    const [items, setItems] = useState([])

    const getItems = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products)
            }, 2000);

        })
    }
    //Ver los items por categorias
    const { category } = useParams()
    //    console.log(category)

    //Cada vez que haya un cambio en la categoria, se produce un render nuevo
    useEffect(() => {
        if (category) {
            getItems().then(response => {
                setItems(response.filter(product => product.category === category))
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
                    <div className='flex h-screen justify-center items-center '><Loader/></div>

            }

        </>

    )
}

export default ItemList