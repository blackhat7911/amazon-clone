import React from 'react';
import './Product.css';

function Product({title, imageUrl, price}) {
    return (
        <div className="product">
            <img src={imageUrl} alt="" />
            <div className="product__description">
                <div className="product__title">{title}</div>
                <div className="product__price">{price}</div>
            </div>
            <button className="addButton">Add to cart</button>
        </div>
    )
}

export default Product;
