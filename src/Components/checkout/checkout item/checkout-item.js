import './checkout-item.css'
import img_shoe from '../../../asset/Images/img-shoe.jpg'

const CheckoutItem = ({ item }) => {
    return (
        <div className="checkout-item">
            <img
                className="checkout-img"
                src={item.item.image}
                alt="shoe"
            />
            <div className="checkout-item-detail">
                <p className="item-name">{item.item.name}</p>
                <p className="item-category">{item.item.type}</p>
                <div className="checkout-item-content">
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
                <p className="item-price">{item.item.price} VNĐ</p>
            </div>
        </div>
    );
}

export default CheckoutItem;