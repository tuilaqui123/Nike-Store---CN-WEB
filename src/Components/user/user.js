import './user.css'
import React from 'react';
import avt from '../../asset/Images/avt.jpg'
import Order from './user components/order';
import Setting from './user components/setting';
import History from './user components/history';

const User = () => {

    function chose(event) {
        const listItem = event.currentTarget;
        const allListItems = document.querySelectorAll('ul li');

        // Remove the "chose" class from all <li> elements
        allListItems.forEach(item => {
            item.classList.remove('chose');
        });

        // Add the "chose" class to the clicked <li> element
        listItem.classList.add('chose');
    }

    return (
        <div className="user-container">
            <ul className="user-info">
                <li>
                    <img
                        className="avt"
                        src={avt}
                        alt="avt"
                    />
                </li>
                <li><p>Name: Qui</p></li>
                <li><p>Phone: 0999888777</p></li>
            </ul>
            <div className="user">
                <ul className="user-button">
                    <li><p>Order</p></li>
                    <li><p>Order History</p></li>
                    <li><p>Setting</p></li>
                </ul>
                <div className="user-main">
                    <History />
                </div>
            </div>
        </div>
    );
}

export default User;