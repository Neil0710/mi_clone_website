import React from "react";
import "../styles/ProductReviewsCard.css";

const ProductReviewsCard = ({image, review, name, price, index}) => {
  return (
  <div className="ProductReviewsCard">
    <div>
        <img src={image} alt={`${index} review`} />
    </div>
    <div>
        <h5>{review}</h5>
        <span>{name}</span>
        <span id="price">{price}</span>
        
    </div>

  </div>
  );
};

export default ProductReviewsCard;
