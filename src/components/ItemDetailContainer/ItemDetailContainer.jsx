import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../mock/products'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const { id } = useParams()

    //console.log(useParams)

    const [item, setItem] = useState({});

    const getItems = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id == id))

        }, 2000);
    })

    useEffect(() => {
        getItems().then(response => setItem(response))

    }, [])
    console.log(item)
    return (
        <>
            {
                item.id

                    ?

                    <div>
                        <div>
                            <h2 className='text-3xl text-center my-6'>
                                Excelente elección!
                            </h2>
                        </div>
                        <div>
                            <ItemDetail item={item} />
                        </div>
                    </div>
                    
                    :

                    <div className='flex h-screen justify-center items-center '><Loader/></div>
        
        }


        </>

    )
}

export default ItemDetailContainer