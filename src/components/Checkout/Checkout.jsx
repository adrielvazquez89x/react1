import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const { cart, total, emptyCart } = useContext(CartContext)
    const [purchaseId, setPurchaseId] = useState("")
    const [modal, setModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    })

    //reg Expressions
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    const makeOrder = () => {
        const order = {
            buyer: buyer,
            items: cart
        }
        saveOrder(order)
    }

    const saveOrder = async (order) => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        const { id } = await addDoc(orderCollection, order)
        setPurchaseId(id)
        console.log(id)

    }

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    console.log(buyer)

    return (

        <div className='container m-auto'>
            <h1 className='text-center text-xl my-5'>Completa con tus datos para finalizar la compra</h1>
            <form action="">
                <div className="mb-5">
                    <input
                        id='name'
                        required
                        name="name"
                        className="border-2 p-2 mt-2 placeholder-gray-500 w-full"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleSubmitChange}
                    />
                </div>
                <div className="mb-5">
                    <input
                        id='surname'
                        required
                        name="surname"
                        className="border-2 p-2 mt-2 placeholder-gray-500 w-full"
                        type="text"
                        placeholder="Apellido"
                        onChange={handleSubmitChange}
                    />
                </div>
                <div className="mb-5">
                    <input
                        id='phone'
                        required
                        name="phone"
                        className="border-2 p-2 mt-2 placeholder-gray-500 w-full"
                        type="tel"
                        placeholder="Teléfono"
                        onChange={handleSubmitChange}
                    />
                </div>
                <div className="mb-5">
                    <input
                        id='email'
                        required
                        name="email"
                        className="border-2 p-2 mt-2 placeholder-gray-500 w-full"
                        type="email"
                        placeholder="Email"
                        onChange={handleSubmitChange}
                    />
                </div>
                <div>
                    <p>El total a pagar es de ${total()}</p>
                </div>

            </form>

            {console.log(buyer)}

            {buyer.name && buyer.surname && buyer.phone && (buyer.email) && (buyer.phone.length >= 7) && emailRegex.test(buyer.email)
                ? (
                    //Boton habilitado
                    <button onClick={() => { makeOrder(); setModal(true) }} className='btn justify-self-end my-3' >Finalizar</button>
                ) : (
                    // Botón deshabilitado
                    <button onClick={makeOrder} className='btn justify-self-end my-3' disabled>Finalizar</button>

                )
            }

            <div className={`${modal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h2 className="text-center md:w-9/12 lg:w-7/12">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                        <p className="mt-6 text-center md:w-9/12 lg:w-7/12 ">Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {purchaseId}. Gracias por confiar en nosotros!</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={emptyCart} className={"focus:outline-none text-white bg-gray-700 focus:ring-transparent w-40 text-center py-3 cursor-pointer font-bold"}>
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Checkout