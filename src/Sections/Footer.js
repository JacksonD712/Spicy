import React from "react";
import logo from "../assets/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="relative min-h-[33vh] flex flex-col">
      <div
        className="bg-zinc-900 flex items-center justify-center"
        style={{height: "33%"}}
      >
        <div className="text-white text-center bg-black p-4 w-80 mt-5 ml-5 shadow-lg">
          <h1
            className="text-3xl font-semibold"
            style={{fontFamily: "Allura, cursive"}}
          >
            Get in Touch
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-screen bg-orange-700">
        {/* Logo Column */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-52 h-auto" />
        </div>

        {/* Form Column */}
        <div className="flex items-center justify-center">
          <div className="w-80 max-w-xs bg-black p-4 shadow-lg">
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
                <button className="border-orange-500 border text-white hover:bg-orange-700 py-2 px-4 rounded-md shadow-md transition duration-300">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Location Column */}
        <div className="flex items-start justify-start">
          <div className="text-white text-sm">
            <div
              className="text-6xl mb-2"
              style={{fontFamily: "Aldhabi, serif"}}
            >
              Our Location
            </div>
            <div
              className="text-4xl font-thin flex items-start"
              style={{fontFamily: "Aldhabi, serif", fontWeight: "100"}}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2"
                style={{fontSize: "1.5rem"}}
              />
              Khaldeh, Lebanon
            </div>
            <div className="text-xl font-thin flex items-start">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2"
                style={{fontFamily: "Aldhabi, serif", fontWeight: "300"}}
              />
              +961 03 730 627
            </div>
            <div
              className="text-3xl font-thin flex items-start"
              style={{fontFamily: "Aldhabi, serif", fontWeight: "100"}}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2"
                style={{fontSize: "1.5rem"}}
              />
              info@spicyfoodlb.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
