import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';


const Product = (props) => {

    const {id, productName, price, photo} = props.data;
    const {addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];

  return (
    <div className='product'>
        <img src={photo} alt="" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                <b>$ {price}</b>
            </p>
        </div>
        <button className='addToCartBtn' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} </button>
    </div>
  )
}

export default Product