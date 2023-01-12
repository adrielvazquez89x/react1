import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    // Seteo del carrito
    const [cart, setCart] = useState([])

    // Funcion para agregar al carrito
    const addToCart = (product) => {

        // Si existe el producto en el cart, lo trae
        const existingProduct = cart.find((current) => current.id === product.id)

        if (existingProduct) {
            // Filtra el item duplicado y la quita del array, dejando el resto.
            const existingCart = cart.filter((current) => current.id !== product.id) 

            //Suma la cantidad del item duplicado con el "nuevo" 
            const newProduct = {...product, quantity: product.quantity + existingProduct.quantity}

            //Crea un "nuevo" carrito con el existente, y el producto nuevo con las cantidades correctas
            setCart([...existingCart, newProduct])
        }
        else {
            const newCart = [...cart, product]
            setCart(newCart)
        }

    }
    // Borrar item
    const deleteProductCart = (product) => {
        const existingCart = cart.filter((current) => current.id !== product.id) 
        setCart(existingCart)

    }
    //Vaciar Carrito
    const emptyCart = () => {
        setCart([])
    }
    // Subtotal
    const subtotal = (price, quantity) => {
        return price * quantity

    }

    const total = ()=> {
        return cart.reduce ((acc, product) => acc + product.quantity * product.price, 0)
    }

    // Cantidad de elementos en carrito
    const cartCountProducts = ()=> {
        return cart.reduce ((acc, product) => acc + product.quantity, 0)
    }

    //console.log(cart)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            deleteProductCart,
            emptyCart,
            subtotal,
            total,
            cartCountProducts
        }}>
            {children}

        </CartContext.Provider>


    )

}