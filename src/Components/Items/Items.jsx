import { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="w-full mb-5 ml-12">
      <div className="flex items-center justify-center text-4xl mb-10">
        <h1>
          <span className="text-red-600">Foodi</span>fy's Flavour Favourites
        </h1>
      </div>
      <div className="grid grid-cols-4">
        {items.map((item) => (
          <Item item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
