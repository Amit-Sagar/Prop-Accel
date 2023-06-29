import footerPolygon from "components/assets/footerpolygon.svg";
import Button from "components/common/Button";
import facebook from "components/assets/facebook.svg";
import youtube from "components/assets/youtube.svg";
import instagram from "components/assets/instagram.svg";
import twitter from "components/assets/twitter.svg";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[493px] relative">
      <img
        src={footerPolygon}
        alt="/footerpolygon"
        className="absolute bottom-0"
      ></img>
      <div className="w-[995px] h-[74px] py-5 left-[222px] top-[419px] absolute border-t border-white justify-center items-center gap-48 inline-flex">
        <div className="text-white text-xs">
          All Right Reserved @Copyright 2023
        </div>
        <div className="justify-start items-center gap-16 flex">
          <div className="justify-start items-start gap-6 flex text-white text-xs">
            <div className="cursor-pointer">Terms of Service</div>
            <div className="cursor-pointer">Privacy Policy</div>
            <div className="cursor-pointer">Product</div>
          </div>
          <div className="h-6 justify-start items-center gap-4 flex">
            <img src={facebook} className="w-6 h-6 cursor-pointer" />
            <img src={youtube} className="w-6 h-6 cursor-pointer" />
            <img src={instagram} className="w-6 h-6 cursor-pointer" />
            <img src={twitter} className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="left-[422px] top-[68px] absolute flex-col justify-start items-center gap-16 inline-flex">
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="text-black text-[32px] font-bold">
            We have what you’re looking for
          </div>
          <div className="w-[596px] text-center text-xs text-[#5f63e3]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </div>
        </div>
        <Button
          label="Get Started Now"
          styles="text-white text-xl font-bold w-[237px] h-[60px] hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Footer;
