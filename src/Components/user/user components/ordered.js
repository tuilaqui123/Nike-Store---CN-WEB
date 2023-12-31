import OrderedItem from "./ordered-item";
import './user-comp.css'

const Ordered = () => {
    return (
        <div className="container">
            <h1>ORDER</h1>
            <div className="main">
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
            </div>
        </div>
    );
}

export default Ordered;