import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="relative min-h-[33vh] flex flex-col">
      {/* Top Section */}
      <div
        className="bg-zinc-900 flex items-center justify-center"
        style={{height: "33%"}}
      >
        <div className="text-white text-center bg-black p-4 w-80 mt-5 shadow-lg">
          <h1
            className="text-3xl font-semibold"
            style={{fontFamily: "Allura, cursive"}}
          >
            Get in Touch
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-orange-600 flex flex-col md:flex-row items-center justify-center flex-grow">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-4 space-y-10 md:space-x-10 md:space-y-0">
          {/* Logo */}
          <div className="  mb-10 md:mb-0">
            <img src={logo} alt="Logo" className="w-52 h-auto" />
          </div>

          {/* Form */}
          <div className="w-full max-w-xs flex items-center justify-center bg-black p-4 shadow-lg">
            <form
              action="https://fabform.io/f/{form-id}"
              method="post"
              className="space-y-3 w-full"
            >
              <input
                className="w-full p-2 rounded border-b border-dashed bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="w-full p-2 rounded bg-black border-b border-dashed text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="w-full p-2 rounded bg-black border-b border-dashed text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Message"
                name="_subject"
              />
              <div className="flex justify-center">
                <button className="border-orange-700 border text-white hover:bg-orange-700 py-2 px-4 rounded-md shadow-md transition duration-300">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Location Information */}
          <div className="text-white text-sm flex flex-col items-center">
            <div
              className="text-5xl mb-2"
              style={{fontFamily: "Allura, cursive"}}
            >
              Our Location
            </div>
            <div className="text-4xl font-thin" style={{fontFamily: "Aldhabi, serif", fontWeight:'100'}}>Khaldeh, Lebanon</div>
            <div className="text-4xl font-thin" style={{fontFamily: "Aldhabi, serif" ,fontWeight:'100'}}>+961 03 730 627</div>
            <div className="text-3xl font-thin" style={{fontFamily: "Aldhabi, serif" ,fontWeight:'100'}}>spicyfood1@hotmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
