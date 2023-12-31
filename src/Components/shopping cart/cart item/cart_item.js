import './cart_item.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ index, item, size, quantity, isCheck }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        if (checked) {
            setChecked(false)
            isCheck(index, false)
        }
        else {
            setChecked(true)
            isCheck(index, true)
        }
    };

    return (
        <div className="cart-item-container">
            <img
                className="item-img"
                src={item.image}
                alt="shoe"
            />
            <div className="cart-item-detail">
                <div className="detail">
                    <div className="detail-header">
                        <p>{item.name}</p>
                        <p>{item.price} VNĐ</p>
                    </div>
                    <div className="detail-mid">
                        <p>{item.type}</p>
                        <input type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="detail-content">
                        <p>Size: {size}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                </div>
                <div className="detail-button">
                    <FontAwesomeIcon icon={faHeart} className="detail-icon" />
                    <FontAwesomeIcon icon={faTrash} className="detail-icon" />
                </div>
            </div>
        </div>
    );
}
export default CartItem;