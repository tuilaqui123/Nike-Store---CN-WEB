import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import './item_display.css'
import Item from '../item/item';
import { AppContext } from '../../Context/AppContext';
import DisplaySide from './display-side';

const Display = () => {
    const { products } = useContext(AppContext)
    const params = useParams()

    if (params.id === 'nikes') params.id = 'Explore Nike'

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    return (

        <div className="display-main">
            {/* {products.map((value, index) => (
                <Link to={`/i/${value.id}/${value.name}`} style={linkStyle} key={index}>
                    <Item
                        name={value.name}
                        types={value.type.name}
                        price={value.price}
                        image={value.images[0]}
                    />
                </Link>
            ))} */}
            {params.cate ? (
                products.map((value, index) => {
                    const isMatch = (value.type.name.toUpperCase()).includes(params.cate.toUpperCase())
                    if (isMatch) {
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

            ) : (
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
            )}
        </div>

    );
}

export default Display;