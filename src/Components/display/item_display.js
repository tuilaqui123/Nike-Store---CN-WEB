import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import './item_display.css'
import Item from '../item/item';
import { AppContext } from '../../Context/AppContext';
import DisplaySide from './display-side';
import Display from './display';

const ItemDisplay = () => {
    const { products } = useContext(AppContext)
    const params = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (params.id === 'nikes') params.id = 'Explore Nike'

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

    return (
        <div className="display-container">
            <div className="display-header">
                <div className="display-title">
                    {params.cate ? (
                        <>
                            <h3>{params.id.toUpperCase() + ' / '}</h3>
                            <p> {params.cate.toUpperCase()}</p>
                        </>
                    ) : (
                        <h3>{params.id.toUpperCase()}</h3>
                    )}
                </div>
                <div className="button-header" onClick={showSort}>
                    <div className="button-context">
                        <p>{buttonText}</p>
                        <FontAwesomeIcon icon={faSort} />
                    </div>
                    {isSort && (
                        <ul className="button-dropdown">
                            <li onClick={sortText}><p>Low to High</p></li>
                            <li onClick={sortText}><p>High to Low</p></li>
                        </ul>
                    )}
                </div>

            </div>
            <div className="display-content">
                <DisplaySide
                    tag={params.id}
                />
                <div className="display-main">
                    <Display
                        sortBtn={buttonText}
                    />
                </div>
            </div>
        </div>
    );
}

export default ItemDisplay;