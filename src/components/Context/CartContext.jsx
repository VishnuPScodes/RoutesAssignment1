import { createContext, useState } from "react";


export const CartContext=createContext();

export const CartContextProvider=(({children})=>{
    const [test,setTest]=useState("Done")
    return(
        <CartContext.Provider value={test} >
            {children}
        </CartContext.Provider>
    )
})