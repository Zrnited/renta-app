import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import carret from "../assets/caret.png";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = ({ scroll }) => {
  return (
    <div className="bg-customBlue mt-10 pt-20 pb-5 relative">
      <div className="text-white px-5">
        <div className="md:flex md:flex-row md:justify-around">
          <div className="text-left flex flex-col gap-5 md:w-350">
            <h1 className="font-bold uppercase text-3xl tracking-wider">
              Renta
            </h1>
            <p className="pr-2">
              Discover perfect homes and lands at affordable prices
            </p>
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://facebook.com/renta"
                target={"_blank"}
                rel="noreferrer"
              >
                <i>
                  {" "}
                  <BsFacebook color="white" />{" "}
                </i>
              </a>
              <a
                a
                href="https://twitter.com/renta"
                target={"_blank"}
                rel="noreferrer"
              >
                <i>
                  {" "}
                  <BsTwitter color="white" />
                </i>
              </a>
              <a
                a
                href="https://linkedin.com/renta"
                target={"_blank"}
                rel="noreferrer"
              >
                <i>
                  {" "}
                  <BsLinkedin color="white" />
                </i>
              </a>
              <a
                a
                href="https://instagram.com/renta"
                target={"_blank"}
                rel="noreferrer"
              >
                <i>
                  {" "}
                  <BsInstagram color="white" />
                </i>
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:gap-10 md:mt-0">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-lg font-bold">Company</h1>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Become agent</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-lg font-bold">Useful Links</h1>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link>Insurance</Link>
                </li>
                <li>
                  <Link>Zeenah Pay</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-lg font-bold">Support</h1>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link>Knowledge base</Link>
                </li>
                <li>
                  <Link>Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-10 mb-5 border-black" />
        <div className="text-left flex flex-col gap-5 md:flex-row md:justify-around">
          <div className="flex flex-row gap-1 items-center">
            <p>Copyright</p>
            <i>
              {" "}
              <AiOutlineCopyrightCircle color="white" />{" "}
            </i>
            <p>Renta</p>
          </div>
          <div>
            <p>Privacy | Terms and conditions</p>
          </div>
        </div>
      </div>

      <button className="absolute bg-white bottom-5 right-5 px-2 py-2 rounded-lg" onClick={scroll}>
        <img src={carret} alt="icon" />
      </button>
    </div>
  );
};

export default Footer;
