import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div className="mb-10">
        <h1 className="text-5xl flex justify-center">
          <span className="text-red-600">Contact</span> Us
        </h1>
      </div>
      <div className="w-4/5 h-3/5 bg-gradient-to-r from-pink-500 to-purple-500  rounded-2xl flex">
        <div className="w-full h-full">
          <form style={{ fontSize: "22px" }} className="w-2/4 mt-20 ml-28">
            <h1 className="text-2xl font-bold text-white">Get In Touch</h1>
            <input
              style={{
                width: "90%",
                borderBottom: "2px dotted white",
                outline: "none",
              }}
              className="bg-transparent mt-7 mb-3 text-white placeholder-white"
              type="text"
              placeholder="Name"
            />
            <br />
            <input
              style={{
                width: "90%",
                borderBottom: "2px dotted white",
                outline: "none",
              }}
              className="bg-transparent mb-3 text-white placeholder-white"
              type="email"
              placeholder="Email"
            />
            <br />
            <input
              style={{
                width: "90%",
                borderBottom: "2px dotted white",
                outline: "none",
              }}
              className="bg-transparent mb-3 text-white placeholder-white"
              type="text"
              placeholder="Subject"
            />
            <br />
            <input
              style={{
                width: "90%",
                borderBottom: "2px dotted white",
                outline: "none",
              }}
              className="bg-transparent mb-3 text-white placeholder-white"
              type="text"
              placeholder="Message"
            />
          </form>
          <button className="py-1 px-2 bg-black text-white rounded-xl ml-28 mt-5 hover:scale-105">
            Send Message
          </button>
        </div>
        <div className="w-2/4">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1343.3535742101649!2d90.42080081045394!3d23.742976136639097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1731266556600!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer flex gap-52 mt-10">
        <div>
          <h1 className="text-2xl">
            <span className="text-red-600">Foodi</span>Fy
          </h1>
          <p className="mt-4">
            Copyright &copy; Owned by <a href="#">foodify.com</a>
          </p>
          <div className="flex text-2xl gap-4 mt-5">
            <CiFacebook />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
            Quick Links
          </h2>
          <ul className="ml-2 cursor-pointer">
            <li className="hover:text-red-500 hover:underline">Home</li>
            <li className="hover:text-red-500 hover:underline">Contact</li>
            <li className="hover:text-red-500 hover:underline">About</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>About</h2>
          <ul className="ml-2 cursor-pointer">
            <li className="hover:text-red-500 hover:underline">About us</li>
            <li className="hover:text-red-500 hover:underline">Contact</li>
            <li className="hover:text-red-500 hover:underline">Jobs</li>
            <li className="hover:text-red-500 hover:underline">Presskit</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Support</h2>
          <ul className="ml-2 cursor-pointer">
            <li className="hover:text-red-500 hover:underline">Terms of use</li>
            <li className="hover:text-red-500 hover:underline">
              Privacy Policy
            </li>
            <li className="hover:text-red-500 hover:underline">
              Cookie Pollicy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
