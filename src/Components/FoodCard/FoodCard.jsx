import React from "react";

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Food"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className="font-bold text-yellow-600">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn border-0 border-b-4 border-yellow-600 hover:bg-black hover:text-yellow-600 mx-auto uppercase">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
