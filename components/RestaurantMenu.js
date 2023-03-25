import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [restaurant, setRestaurant] = useState({});

  const restaurant = useRestaurant(resId);

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h1>{restaurant.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
