const Herotwo = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div className="mb-10">
        <h1 className="text-5xl">
          <span className="text-red-600">Customer's</span> Choise
        </h1>
      </div>
      <div className="w-4/5 h-3/5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex">
        <div className="w-3/4 mt-24 ml-16">
          <h1 className="text-3xl text-white font-bold mb-3">
            Discover Delicious Food <br /> Just for you!
          </h1>
          <p className="text-white mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur provident corporis laborum assumenda. Cupiditate cum
            maiores, assumenda saepe amet alias nemo voluptatibus eius quaerat
            ipsam blanditiis praesentium, commodi fuga officia!
          </p>
          <button className="py-1 px-2 bg-black text-white rounded-xl hover:scale-105 cursor-pointer">
            Order Now
          </button>
        </div>
        <div className="flex items-center">
          <img
            className="rounded-full"
            src="https://i.ibb.co.com/XDb8zNm/photo-1576458088443-04a19bb13da6.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Herotwo;
