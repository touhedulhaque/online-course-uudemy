import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalValue = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const course = cart[i];
    //     totalValue = totalValue + course.price;
        
    // }

    const totalValue = cart.reduce( (sum, course) => sum + course.price,0)
    return (
        <div>
            <h3>Total Course Value to pay: ${totalValue}</h3>
        </div>
    );
};

export default Cart;