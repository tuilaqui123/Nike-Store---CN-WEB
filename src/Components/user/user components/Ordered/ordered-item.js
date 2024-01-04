import { useEffect, useState } from 'react';
import OrderItem from '../component/order-item';
import '../user-comp.css'

const OrderedItem = ({ item }) => {

    const [orderItem, setOrderItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/order/` + item.id)
            .then((response) => response.json())
            .then(resJsonOrderItem => {
                setOrderItem(resJsonOrderItem.order.details)
            })
    }, [])

    console.log(orderItem)

    return (
        <div className="order-container">
            <div className="order-info">
                <p><b>ID:</b> {item.id}</p>
                <p><b>Date:</b> {item.createAt}</p>
                <p><b>Delivery:</b> {item.deliveryStatus}</p>
                <p><b>Payment:</b> {item.paymentStatus}</p>
                <p><b>Phone:</b> {item?.phone}</p>
                <p><b>Address:</b> {item?.address}</p>
            </div>
            <div className="order-items">
                {orderItem.productSize?.product.map((value, index) => {
                    <OrderItem
                        key={index}
                        item={value}
                    />
                })}
            </div>
        </div>
    );
}

export default OrderedItem;