import React, { useContext, useState, useEffect } from 'react';
import CartItem from './cart item/cart_item';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import './cart.css'


const Cart = () => {

    const navigate = useNavigate()
    const { cart } = useContext(AppContext)


    // Get product (using useParams to get id in url)
    // useEffect(() => {
    //     for (let index = 0; index < cart.length; index++) {
    //         fetch('http://localhost:5000/api/product' + '/' + cart[index].id)
    //             .then((response) => response.json())
    //             .then(resJson => {
    //                 console.log(resJson.prduct)
    //             })
    //     }
    // }, [cart])

    console.log(cart)



    function GotoCheckout() {
        navigate("/Checkout")
    }

    return (
        <div className="cart-container">
            <div className="cart">
                <h3>Bag</h3>
                <div className="cart-main">
                    {cart.map((value, index) =>
                        <CartItem
                            key={index}
                            id={value.id}
                            size={value.size}
                        />
                    )}
                </div>
            </div>
            <div className="summary">
                <h3>Summary</h3>
                <div className="summary-main">
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Subtotal</p>
                            <p>3,000,000 VNĐ</p>
                        </div>
                        <div className="summary-content">
                            <p>Estimated Delivery & Handling</p>
                            <p>250,000 VNĐ</p>
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Total</p>
                            <p>3,250,000 VNĐ</p>
                        </div>
                    </div>
                    <button className="summary-button" onClick={GotoCheckout}>
                        <p>Checkout</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Cart;