import './cart_item.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import PriceFormat from '../../../Context/PriceFormat';

const CartItem = ({ index, item, size, quantity, isCheck, Delete }) => {

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
    }

    function handleDelete() {
        Delete(index)
    }

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
                        <p>
                            <PriceFormat>
                                {item.price}
                            </PriceFormat>
                            VNĐ</p>
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

            </div>
        </div>
    );
}
export default CartItem;