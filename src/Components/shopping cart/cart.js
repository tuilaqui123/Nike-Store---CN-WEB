import React, { useContext, useState, useEffect } from 'react';
import CartItem from './cart item/cart_item';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import './cart.css'
import PriceFormat from '../../Context/PriceFormat';

const Cart = () => {

    const navigate = useNavigate()
    const { cart, bag, setBag, subTotal, setSubTotal } = useContext(AppContext)

    const [isSelect, setIsSelect] = useState(false)

    useEffect(() => {
        setBag([])
        setSubTotal(0)
    }, [])

    function isCheck(index, checked) {
        if (checked) {
            setBag([...bag, cart[index]])
            var temp = subTotal + cart[index].item.price
            setSubTotal(temp)
        }
        else {
            setBag(bag.filter(item => item !== cart[index]))
            var temp = subTotal - cart[index].item.price
            setSubTotal(temp)
        }
    }


    function GotoCheckout() {
        if (subTotal !== 0) {
            setIsSelect(false)
            navigate("/Checkout")
        }
        else setIsSelect(true)

    }

    return (
        <div className="cart-container">
            <div className="cart">
                <h3>Bag</h3>
                <div className="cart-main">
                    {cart !== null ? (
                        <>
                            {cart.map((value, index) =>
                                <CartItem
                                    key={index}
                                    index={index}
                                    item={value.item}
                                    size={value.size}
                                    quantity={value.quantity}
                                    isCheck={isCheck}
                                />
                            )}
                        </>
                    ) : (
                        <p>No item display.</p>
                    )}
                </div>
            </div>
            <div className="summary">
                <h3>Summary</h3>
                <div className="summary-main">
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Subtotal</p>
                            <p>
                                <PriceFormat>
                                    {subTotal}
                                </PriceFormat>
                                VNĐ</p>
                        </div>
                        <div className="summary-content">
                            <p>Estimated Delivery & Handling</p>
                            {subTotal !== 0 ? (
                                <p>250,000 VNĐ</p>
                            ) : (
                                <p>0 VNĐ</p>
                            )}
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Total</p>
                            {subTotal !== 0 ? (
                                <p>
                                    <PriceFormat>
                                        {subTotal + 250000}
                                    </PriceFormat>
                                    VNĐ</p>
                            ) : (
                                <p>0 VNĐ</p>
                            )}
                        </div>
                    </div>
                    {isSelect && (
                        <p className="alert-text">Please select at least one item.</p>
                    )}
                    <button className="summary-button" onClick={GotoCheckout}>
                        <p>Checkout</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Cart;