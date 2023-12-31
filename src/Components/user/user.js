import './user.css'
import React, { useState } from 'react';
import avt from '../../asset/Images/avt.jpg'
import Delivery from './user components/delivery';
import Ordered from './user components/ordered';

const User = () => {

    const [isLoad, setIsLoad] = useState('Order')

    function chose(event) {
        const listItem = event.currentTarget;
        const liText = event.currentTarget.querySelector('p').textContent
        const allListItems = document.querySelectorAll('ul li');

        setIsLoad(liText)

        // Remove the "chose" class from all <li> elements
        allListItems.forEach(item => {
            item.classList.remove('chose');
        });

        // Add the "chose" class to the clicked <li> element
        listItem.classList.add('chose');
    }

    return (
        <div className="user-container">
            <div className="user">
                <ul className="user-info">
                    <li>
                        <img
                            className="avt"
                            src={avt}
                            alt="avt"
                        />
                    </li>
                    <li>
                        <p>Pham Qui</p>
                    </li>
                </ul>
                <ul className="user-button">
                    <li onClick={chose}><p>Order</p></li>
                    <li onClick={chose}><p>Deliveried</p></li>
                </ul>
            </div>
            <div className="user-main">
                {isLoad === 'Order' && (
                    <Ordered />
                )}
                {isLoad === 'Deliveried' && (
                    <Delivery />
                )}
            </div>
        </div>
    );
}

export default User;