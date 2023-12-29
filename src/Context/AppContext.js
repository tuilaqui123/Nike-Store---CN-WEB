import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [productTypes, setProductTypes] = useState([])
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);


    useEffect(() => {
        //Get product type 
        fetch(`http://localhost:5000/api/product-type`)
            .then((response) => response.json())
            .then(resJsonProductTypes => {
                setProductTypes(resJsonProductTypes.productTypes)
            })

        //Get product 
        fetch(`http://localhost:5000/api/product`)
            .then((response) => response.json())
            .then(resJsonProducts => {
                setProducts(resJsonProducts.products)
            })
    }, [])

    return <AppContext.Provider value={{ productTypes, products, cart, setCart }}>
        {children}
    </AppContext.Provider>
}