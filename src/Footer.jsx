import React from "react";
import logo from "./logo.png";
import goodGovernance from "./goodGovernance.docx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav id="footer" className="mt-24 bg-gray-400">
      <div className="container mx-auto pt-8 pb-4">
        <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            <img
              style={{ maxWidth: "70%", height: "auto" }}
              className=""
              src={logo}
              alt="Logo"
            ></img>
          </div>

          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            <h4 className="text-gray-800">Redes Sociais</h4>
            <ul className="nav navbar-nav">
              <li id="navi-2" className="text-sm">
                <a
                  className="text-gray-700 underline text-small"
                  href="/instagram.com/atenalgpd"
                >
                  Instagram{" "}
                </a>
              </li>
              <li id="navi-1" className="text-sm"></li>
            </ul>
          </div>

          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            <h4 className="text-gray-700">Paginas</h4>
            <ul className="">
              <li id="navi-2" className="leading-7 text-sm">
                <Link to="/">Principal</Link>
              </li>
              <li className="text-sm">
                <Link to="/infographic">Informações sobre a LGPD</Link>
              </li>
            </ul>
          </div>

          <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            <h4 className="text-gray-700">Paginas</h4>
            <ul className="">
              <li id="navi-2" className="leading-7 text-sm">
                <Link to="/requirement">Requerimento da LGPD</Link>
              </li>
              <li className="text-sm">
                <Link to="/company">Para Empresas</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-4 md:flex md:items-center md:justify-center ">
        <ul className="">
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <a
              className="text-gray-800 underline text-small"
              href={goodGovernance}
            >
              Política de Práticas e Governança
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
