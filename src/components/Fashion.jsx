import { useContext } from "react"
import { CartContext } from "./Context/CartContext"



export const Fashion=(()=>{
    const value2=useContext(CartContext)
    return <div>
        Fashions {value2}
    </div>
})