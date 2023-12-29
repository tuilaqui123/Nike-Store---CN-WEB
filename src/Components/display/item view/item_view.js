import './item_view.css'
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom'


const ItemView = () => {
    const params = useParams();
    const { cart, setCart } = useContext(AppContext)

    const [product, setProduct] = useState({})
    const [mainImg, setMainImg] = useState()
    const [size, setSize] = useState()

    // Get product (using useParams to get id in url)
    useEffect(() => {
        fetch('http://localhost:5000/api/product' + '/' + params.id)
            .then((response) => response.json())
            .then(resJson => {
                setProduct(resJson.product)
            })
    }, [params])

    // Set main image
    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setMainImg(product.images[0]);
        }
    }, [product.images]);

    function changeMainImage(e) {
        // Replace main image with the clicked side image
        setMainImg(e.target.src)
    }

    function choseSize(event) {
        const listItem = event.currentTarget;
        const allListItems = document.querySelectorAll('ul li');

        // Remove the "chose" class from all <li> elements
        allListItems.forEach(item => {
            item.classList.remove('chose');
        });

        // Add the "chose" class to the clicked <li> element
        listItem.classList.add('chose');
        setSize(event.currentTarget.querySelector('p').textContent)
    }

    function AddToBag() {
        var temp = { id: params.id, size: size }
        setCart([...cart, temp])
    }

    return (
        <div className="itemview-container">
            <div className="image-container">
                <div className="image-side">
                    {product.images?.map((image, index) => (
                        <img
                            key={index}
                            className="img-side"
                            src={image}
                            alt="side image"
                            onClick={changeMainImage}
                        />
                    ))}
                </div>
                <div className="image-main">
                    <img
                        className="img-main"
                        src={mainImg}
                        alt="side image"
                    />
                </div>
            </div>
            <div className="detail-container">
                <div className="detail-content">
                    <p className="item-name">{product.name}</p>
                    <p className="item-category">{product.type?.name}</p>
                    <p className="item-price">{product.price} VNĐ</p>
                </div>
                <div className="detail-size">
                    <p>Select Size</p>
                    <ul className="size-table">
                        {product.sizes?.map((value, index) =>
                            <li
                                key={index}
                                onClick={choseSize}
                                className=''
                            >
                                <p>{value.size}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="detail-button">
                    <button className="add-bag" onClick={AddToBag}>
                        <p>Add to Bag</p>
                    </button>
                    <button className="add-fav">
                        <p>Favourite</p>
                    </button>
                </div>
                <div className="description">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemView;