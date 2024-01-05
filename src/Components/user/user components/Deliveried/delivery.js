import OrderedItem from "../Ordered/ordered-item";
import '../user-comp.css'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../Context/AppContext";

const Delivery = () => {
    const { order } = useContext(AppContext)

    return (
        <div className="container">
            <h1>DELIVERIED</h1>
            <div className="main">
                {order.map((item, index) =>
                    <OrderedItem
                        key={index}
                        item={item}
                    />
                )}
            </div>
        </div>
    );
}

export default Delivery;