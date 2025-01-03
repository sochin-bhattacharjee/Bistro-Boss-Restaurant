import React from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, tittle, img }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order`}>
        <button className="btn btn-outline border-0 border-b-4 mt-5">
          Order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
