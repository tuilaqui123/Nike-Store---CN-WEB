import './cart_item.css'
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import img_shoe from '../../../asset/Images/img-shoe.jpg'

const CartItem = ({ id, size }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/api/product' + '/' + id)
            .then((response) => response.json())
            .then(resJson => {
                setProduct(resJson.product)
            })
    })

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
                        <p>{product.name}</p>
                        <p>{product.price} VNĐ</p>
                    </div>
                    <p></p>
                    <div className="detail-content">
                        <p>Size: {size}</p>
                        <p>Quantity: 1</p>
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