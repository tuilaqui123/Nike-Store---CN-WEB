import './order-item.css'
import img_shoe from '../../../../asset/Images/img-shoe.jpg'

const OrderItem = ({ item }) => {
    console.log(item)
    return (
        <div className="cart-item-container">
            <img
                className="item-img"
                src={img_shoe}
                alt="shoe"
            />
            <div className="cart-item-detail">
                <div className="detail">
                    <div className="detail-header">
                        <p>Nike Retro Dunk Low</p>
                        <p>3,000,000 VNĐ</p>
                    </div>
                    <p>Basketball</p>
                    <div className="detail-content">
                        <p>Size: 42</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;