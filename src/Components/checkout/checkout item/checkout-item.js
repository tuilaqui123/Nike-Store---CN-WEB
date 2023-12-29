import './checkout-item.css'
import img_shoe from '../../../asset/Images/img-shoe.jpg'

const CheckoutItem = () => {
    return (
        <div className="checkout-item">
            <img
                className="checkout-img"
                src={img_shoe}
                alt="shoe"
            />
            <div className="checkout-item-detail">
                <p className="item-name">Nike Dunk Retro Low</p>
                <p className="item-category">Basketball</p>
                <div className="checkout-item-content">
                    <p>Size: 42</p>
                    <p>Quantity: 1</p>
                </div>
                <p className="item-price">3,000,000 VNĐ</p>
            </div>
        </div>
    );
}

export default CheckoutItem;