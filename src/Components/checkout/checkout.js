import './checkout.css'
import CheckoutItem from './checkout item/checkout-item';

const CheckOut = () => {
    return (
        <div className="checkout-container">
            <div className="address">
                <h3>Checkout Infomation</h3>
                <div className="address-input">
                    <input
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                    />
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
                            <p>3,000,000 VNĐ</p>
                        </div>
                        <div className="summary-content">
                            <p>Delivery/Shipping</p>
                            <p>250,000 VNĐ</p>
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Total</p>
                            <p>3,250,000 VNĐ</p>
                        </div>
                    </div>
                </div>
                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />
            </div>
        </div>
    );
}

export default CheckOut;