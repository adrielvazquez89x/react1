import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState({});

    useEffect(() => {

        const getItem = async () => {
            const db = getFirestore()
            // filtro con doc con el parámetro que definimos en useParams
            const queryRef = doc(db, "products", id);
            // recibimos los datos
            const response = await getDoc(queryRef);
            // creamos un nuevo objeto con esos datos
            const newItem = {
                id: response.id,
                ...response.data(),
            };

                setItem(newItem);
        };
        getItem();

    }, [id]);


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
                        <div className='flex'>
                            <ItemDetail item={item} />
                        </div>
                    </div>

                    :

                    <div className='flex h-screen justify-center items-center '><Loader /></div>

            }


        </>

    )
}

export default ItemDetailContainer