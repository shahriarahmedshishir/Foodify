const Hero = () => {
  return (
    <div className="h-[calc(100vh-5rem)] w-full flex items-center">
      <div className="w-3/5">
        <h1 className="text-6xl mb-3 ml-12">
          <span className="text-red-600">Foodi</span>
          <span className="text-black">Fy</span>:
        </h1>
        <h2 className="text-4xl text-black mt-4 mb-4 ml-12">
          Where Taste take Shape
        </h2>
        <p className="text-2xl text-slate-800 mb-8 ml-12">
          Foodify redefnes fast food with bold flovour and <br /> gourment
          creation.Discover high quality meals <br /> Where taste take Shape
        </p>
        <button className="bg-black text-1xl text-white py-1 px-2 rounded-xl hover:scale-105 cursor-pointer ml-12">
          Order Now
        </button>
      </div>
      <div className="w-2/5">
        <img
          className=""
          src="https://i.ibb.co.com/dpRmGDD/fastfood.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
