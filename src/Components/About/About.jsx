const About = () => {
  return (
    <div className="h-screen w-full">
      <h1 className="text-3xl flex items-center justify-center mb-6">
        <span className="text-red-600 ">About </span> Us
      </h1>
      <div className="flex w-full">
        <div className="w-1/2 ml-10 mt-28">
          <h1 className="text-3xl text-black mb-6">
            About <span className="text-red-600">Foodify</span>
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Iure magni repellat velit dolore veniam! <br />
            Laudantium animi qui eum aspernatur ipsum.
          </p>
          <h3 className="font-bold text-2xl">Our values</h3>
          <ul className="list-disc list-inside space-y-2 ml-6 mb-6">
            <li>Quality Ingredients</li>
            <li>Customers satisfaction</li>
            <li>Speed and Effeciency</li>
            <li>Innovation</li>
            <li>Integrity</li>
          </ul>
          <button className="py-1 px-2 bg-black text-white rounded-xl mt-7  hover:scale-105">
            Learn More
          </button>
        </div>
        <div className="flex gap-6 mt-20">
          <img
            className="mt-4"
            style={{ height: "500px", width: " 300px", borderRadius: "13px" }}
            src="https://i.ibb.co.com/N9xY8Yd/photo-1562050147-fda1cc9a6378.jpg"
            alt=""
          />
          <img
            className="mt-16"
            style={{ height: "500px", width: " 300px", borderRadius: "13px" }}
            src="https://i.ibb.co.com/XzPMVVR/premium-photo-1675676541760-a1db82652731.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
