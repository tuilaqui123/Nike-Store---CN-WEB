import './user.css'
import React, { useContext, useState } from 'react';
import avt from '../../asset/Images/avt.jpg'
import Delivery from './user components/Deliveried/delivery';
import Ordered from './user components/Ordered/ordered';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom'

const User = () => {

    const navigate = useNavigate()
    const { customer, setCustomer, order } = useContext(AppContext)


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

    function LogOut() {
        setCustomer(null)
        navigate('/')
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
                        <p>{customer?.name}</p>
                    </li>
                </ul>
                <ul className="user-button">
                    <li onClick={chose} className="chose"><p>Order</p></li>
                    <li onClick={chose}><p>Deliveried</p></li>
                    <li onClick={LogOut}><p>Log out</p></li>
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