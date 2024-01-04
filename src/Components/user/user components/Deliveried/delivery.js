import OrderedItem from "../Ordered/ordered-item";
import '../user-comp.css'

const Delivery = () => {
    return (
        <div className="container">
            <h1>DELIVERIED</h1>
            <div className="main">
                <OrderedItem />
                <OrderedItem />
                <OrderedItem />
            </div>
        </div>
    );
}

export default Delivery;