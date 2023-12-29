import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './item_display.css'
import Item from '../item/item';
import { AppContext } from '../../Context/AppContext';

const ItemDisplay = () => {
    const { productTypes, products } = useContext(AppContext)
    const params = useParams()

    if (params.id == 'all-item') params.id = 'All Items'

    const [isSort, setIsSort] = useState(false)
    const [buttonText, setButtonText] = useState('Sort By')

    function sortText(event) {
        setButtonText(event.currentTarget.querySelector('p').textContent)
    }

    function showSort() {
        if (isSort) setIsSort(false)
        else setIsSort(true)
    }

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };
    const navigate = useNavigate()

    function choseType(event) {
        const liText = event.currentTarget.querySelector('p').textContent
        navigate(`/d/${liText}`)
    }

    return (
        <div className="display-container">
            <div className="display-header">
                <div className="display-title">
                    <h3>{params.id}</h3>
                </div>
                <div className="button-header" onClick={showSort}>
                    <div className="button-context">
                        <p>{buttonText}</p>
                        <FontAwesomeIcon icon={faSort} />
                    </div>
                    {isSort && (
                        <ul className="button-dropdown">
                            <li onClick={sortText}><p>A-Z</p></li>
                            <li onClick={sortText}><p>Z-A</p></li>
                            <li onClick={sortText}><p>Giá giảm dần</p></li>
                            <li onClick={sortText}><p>Giá tăng dần</p></li>
                        </ul>
                    )}
                </div>

            </div>
            <div className="display-content">
                <ul className="display-side">
                    {productTypes.map((value, index) =>
                        <li key={index} onClick={choseType}><p>{value.name}</p></li>
                    )}

                </ul>
                <div className="display-main">
                    {params.id === 'All Items' ? (
                        products.map((value, index) => (
                            <Link to={`/i/${value.id}/${value.name}`} style={linkStyle} key={index}>
                                <Item
                                    name={value.name}
                                    types={value.type.name}
                                    price={value.price}
                                    image={value.images[0]}
                                />
                            </Link>
                        ))
                    ) : (
                        products.map((value, index) => {
                            if (value.type.name === params.id) {
                                return (
                                    <Link to={`/i/${value.id}/${value.name}`} style={linkStyle} key={index}>
                                        <Item
                                            name={value.name}
                                            types={value.type.name}
                                            price={value.price}
                                            image={value.images[0]}
                                        />
                                    </Link>
                                );
                            }
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDisplay;