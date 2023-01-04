import React from 'react';
import { useLocation} from "react-router-dom";

const Product = (props) => {
    const location = useLocation();
    return (
        <div>
            <h1>Product</h1>
        </div>
    );
};

export default Product;