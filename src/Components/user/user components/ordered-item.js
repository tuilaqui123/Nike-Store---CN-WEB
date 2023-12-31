import OrderItem from './component/order-item';
import './user-comp.css'

const OrderedItem = () => {
    return (
        <div className="order-container">
            <p className="ID">ID: 21520419</p>
            <OrderItem />
            <OrderItem />
            <p className="total">Total: 3,000,000 VNĐ</p>
        </div>
    );
}

export default OrderedItem;