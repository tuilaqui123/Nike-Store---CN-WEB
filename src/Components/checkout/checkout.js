import './checkout.css'
import CheckoutItem from './checkout item/checkout-item';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import PriceFormat from '../../Context/PriceFormat';

const CheckOut = () => {

    const { bag, subTotal } = useContext(AppContext)

    return (
        <div className="checkout-container">
            <div className="address">
                <h3>Checkout Infomation</h3>
                <div className="address-input">
                    <div className="input-box">
                        <p>First name:</p>
                        <input
                            type="text"
                            placeholder="First name"
                        />
                    </div>
                    <div className="input-box">
                        <p>Last name:</p>
                        <input
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="input-box">
                        <p>Email:</p>
                        <input
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-box">
                        <p>Phone number:</p>
                        <input
                            type="text"
                            placeholder="Phone number"
                        />
                    </div>
                    <div className="input-box">
                        <p>Address:</p>
                        <input
                            type="text"
                            placeholder="Address"
                        />
                    </div>
                </div>
                <button className="address-button">
                    <p>Order</p>
                </button>
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
                            <p>Delivery/Shipping</p>
                            <p>250,000 VNĐ</p>
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Total</p>
                            <p>
                                <PriceFormat>
                                    {subTotal + 250000}
                                </PriceFormat>
                                VNĐ</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-items">
                    {bag.map((item, index) =>
                        <CheckoutItem
                            key={index}
                            item={item}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckOut;