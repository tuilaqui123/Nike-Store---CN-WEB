import './item.css'

const Item = ({ name, types, price, image }) => {
    return (
        <div className="item-container">
            <img
                className="item-image"
                src={image}
                alt="shoe"
            />
            <div className="item-content">
                <p className="item-name">{name}</p>
                <p className="item-category">{types}</p>
                <p className="item-price">{price} VNĐ</p>
            </div>
        </div>
    );
}

export default Item;