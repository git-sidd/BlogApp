import React from "react";
import { FaFileCode } from "react-icons/fa6";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer = () => {
  return (
    <div className="bottom-0 w-full  bg-gradient-to-r from-cyan-500 to-blue-500 ... p-2 fixed  ">
      <h1 className="flex justify-center items-center gap-1">
        <span>
          <FaFileCode className="text-xl" />
        </span>{" "}
        with{" "}
        <span>
          <FavoriteIcon />
        </span>{" "}
        by Siddhesh P.R. Patole
      </h1>
    </div>
  );
};

export default Footer;
