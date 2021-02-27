import React from 'react';

const Card = (props) => {
    const card = props.card;
    //const total = card.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price
        
    }
    let shipping = 0
    if(total>35){
        shipping = 0;
    }
    else if(total >15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order:{card.length}</p>
            <p>Shipping Charge:{shipping}</p>
            <p>TAX + VAT:{tax}</p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Card;