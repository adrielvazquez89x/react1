import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import Loader from '../Loader/Loader'


const ItemList = () => {

    //Array de los productos en venta
    const [items, setItems] = useState([])
    //const [categoryFilter, setCategoryFilter] = useState()

    const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'products')
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))

    }
    //Ver los items por categorias
    const { category } = useParams()
    //    console.log(category)

    const getItemsCategory = async () => {
        const db = getFirestore()
        const collectionRef = query(collection(db, 'products'), where('category', '==', category))
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    }

    //Cada vez que haya un cambio en la categoria, se produce un render nuevo
    useEffect(() => {
        category ? getItemsCategory() : getItems()


    }, [category])

    return (
        <>
            {
                items.length

                    ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-full lg:max-w-7xl m-auto' >
                        {items.map(i => <Item key={i.id} {...i} />)}
                    </div>
                    :
                    <div className='flex h-screen justify-center items-center '><Loader /></div>

            }

        </>

    )
}

export default ItemList