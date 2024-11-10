import { CiCirclePlus } from "react-icons/ci";

const Item = ({ item }) => {
  const { food_photo, food_name, title, price } = item;
  const divStyle = {
    height: "320px",
    width: "260px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  };
  return (
    <div
      style={divStyle}
      className="border-solid shadow-lg shadow-indigo-500/40 "
    >
      <img
        style={{ height: "180px" }}
        className="w-full rounded-xl"
        src={food_photo}
        alt=""
      />
      <h2 className="ml-4 text-2xl mb-6 font-bold mt-1">{food_name}</h2>
      <p className="ml-4 mb-3">{title}</p>
      <div className="flex justify-between">
        <p className="ml-4">{price}$</p>
        <button>
          <CiCirclePlus className="bg-red-600 text-white rounded-full text-2xl mr-4" />
        </button>
      </div>
    </div>
  );
};

export default Item;
