import React, { useContext } from "react";
import { CartContext } from "./Cart";


export const Items = ({rating, title, price, img, id, quantity})=>{
    const {removeItem, increment,decrement } = useContext(CartContext);

  return(
      <>
      <div className="items-info">
                     <div className="product-img">
                        <img src= {img} alt="productimg" />

                     </div>
                     <div className="title">
                        <h2>{title}</h2>
                        <p>{rating}</p>

                     </div>
                     <div className="add-minus-quantity">
                        <i class="fas fa-minus minus" onClick={() => decrement(id)}></i>
                        <input type="text" placeholder={quantity} />
                        <i class="fas fa-plus add"  onClick={() => increment(id)}></i>
                     </div>
                     <div className="price">
                        <h3> {price}$</h3>
                     </div>
                     <div className="remove-item">
                        <i class="fas fa-trash-alt remove" onClick={()=> removeItem(id)}></i>

                     </div>

                  </div>
                  <hr/>
      
      </>
  )

}