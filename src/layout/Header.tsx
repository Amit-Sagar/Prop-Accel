import React from "react";
import polygon2 from "components/assets/Polygon2.svg";
import polygon1 from "components/assets/Polygon1.svg";
import ellipse from "components/assets/Ellipse.svg";

const Header = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-[91px] px-[175px] justify-center items-center gap-[684px] flex absolute top-0 z-10">
        <div className="text-white font-bold z-[9999]">Logo</div>
        <div className="self-stretch justify-start items-center gap-[107px] inline-flex text-white ">
          <a href="#about" className="cursor-pointer">
            About
          </a>
          <a href="#pricing" className="cursor-pointer">
            Pricing
          </a>
          <a href="#review " className="cursor-pointer">
            Review
          </a>
        </div>
      </div>
      <div className="z-[-1]">
        <img className="absolute top-0 left-0" src={ellipse} alt="/polygon2" />
        <img src={polygon2} alt="/polygon2" className="absolute top-0 left-0" />
        <img
          className="absolute top-0 right-0"
          src={polygon1}
          alt="/polygon1"
        />
      </div>
    </div>
  );
};

export default Header;
