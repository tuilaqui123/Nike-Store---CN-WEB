import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [productTypes, setProductTypes] = useState([])
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])
    const [cart, setCart] = useState([])
    const [bag, setBag] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [customer, setCustomer] = useState(null)

    const [sportSide, setSportSide] = useState([])
    const [nikeSide, setNikeSide] = useState([])


    useEffect(() => {
        //Get product type 
        fetch(`http://localhost:5000/api/product-type`)
            .then((response) => response.json())
            .then(resJsonProductTypes => {
                var tempNike = []
                var tempSport = []
                for (let index = 0; index < resJsonProductTypes.productTypes.length; index++) {
                    const types = resJsonProductTypes.productTypes[index].name
                    const IsNike = types.includes('Nike')
                    if (IsNike) {
                        const modifiedTypes = types.replace('Nike', '');
                        tempNike.push(modifiedTypes);
                    }
                    else if (types !== 'Jordan') tempSport.push(types)
                }
                setProductTypes(resJsonProductTypes.productTypes)
                setNikeSide(tempNike)
                setSportSide(tempSport)
            })
        //Get product 
        fetch(`http://localhost:5000/api/product`)
            .then((response) => response.json())
            .then(resJsonProducts => {
                setProducts(resJsonProducts.products)
            })

        // Get order
        fetch(`http://localhost:5000/api/order`)
            .then((response) => response.json())
            .then(resJsonOrder => {
                console.log(resJsonOrder)
            })

    }, [])


    return <AppContext.Provider value={{
        productTypes,
        products,
        cart, setCart,
        bag, setBag,
        subTotal, setSubTotal,
        nikeSide, sportSide,
        customer, setCustomer
    }}>
        {children}
    </AppContext.Provider>
}