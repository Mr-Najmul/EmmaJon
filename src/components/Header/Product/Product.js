import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //console.log(props);

    function add(a,b){
        return a+b;
    }
     
    const {img, name, seller, price, stoke} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <br/>
                <p>${price}</p>
                <br/>
                <p>Only {stoke} left in stoke order soon</p>
                <button 
                className = "main-button" 
                onClick = {() =>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add to card</button>
            </div>
            
        </div>
    );
};

export default Product;