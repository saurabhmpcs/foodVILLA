import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo;
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch("");
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h1>{restaurant.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
