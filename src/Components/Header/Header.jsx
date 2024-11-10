import { FaStoreAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-20 flex items-center w-full bg-slate-200">
      <div className="w-1/4 flex items-center justify-center text-3xl">
        <span className="text-red-600">Foodi</span>
        <span className="text-black">fy</span>
      </div>
      <div className="w-2/4">
        <ul className="flex items-center justify-center gap-8 text-2xl text-slate-700">
          <li className="hover:text-red-500 hover:underline cursor-pointer hover:scale-110 duration-300">
            Home
          </li>
          <li className="hover:text-red-500 hover:underline cursor-pointer hover:scale-110 duration-300">
            Menu
          </li>
          <li className="hover:text-red-500 hover:underline cursor-pointer hover:scale-110 duration-300">
            About Us
          </li>
          <li className="hover:text-red-500 hover:underline cursor-pointer hover:scale-110 duration-300">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex w-1/4 items-center justify-end gap-2 text-2xl">
        <div className="hover:scale-105 cursor-pointer">
          <FaStoreAlt />
        </div>
        <button className="bg-black text-white mx-8 py-1 px-2 rounded-xl cursor-pointer hover:scale-105">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
