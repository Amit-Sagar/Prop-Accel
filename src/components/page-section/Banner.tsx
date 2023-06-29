import dots from "components/assets/Groupdots.png";
import business from "components/assets/business.png";
import classroom from "components/assets/classroom.png";
import microphone from "components/assets/microphone.svg";
import micHeadphone from "components/assets/micHeadphone.svg";
import Button from "components/common/Button";

const Banner = () => {
  return (
    <div className="h-[652px] relative  z-50">
      <div className="w-[580px] left-[175px] top-[94px] absolute">
        <div className="w-[580px] h-[214.45px] left-0 top-0 absolute">
          <div className="w-[433px] h-[62.75px] left-0 top-[151.70px] absolute text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </div>
          <div className="w-[580px] h-[127.70px] left-0 top-0 absolute text-white text-[48px] font-bold">
            Learn how to launch a successful podcast
          </div>
        </div>
        <Button
          label="Sign up Now"
          styles="left-0 top-[296.14px] absolute text-white text-xl font-bold w-[237px] h-[75px] hover:scale-110"
        />
      </div>
      <div className="w-[550px] h-[370px] left-[774.10px] top-[153.96px] absolute">
        <img src={dots} alt="/dots" />
      </div>
      <img
        className="w-[491px] h-[281px] left-[773px] top-[94px] absolute rounded-lg"
        src={classroom}
        alt="/classroom"
      />
      <img
        className="w-[491px] h-[281px] left-[720px] top-[184px] absolute rounded-lg"
        src={business}
        alt="/business"
      />
      <div className="w-[63px] h-[62px] px-[7px] py-0.5 left-[1253.19px] top-[431px] absolute origin-top-left rotate-[15.14deg] bg-white rounded shadow justify-center items-center gap-2.5 inline-flex">
        <div className="w-[35.71px] h-[46.43px] relative">
          <img src={microphone} alt="/microphone" />
        </div>
      </div>
      <div className="w-[65px] h-[65px] px-[3px] py-[7px] left-[1295px] top-[264.82px] absolute origin-top-left rotate-[-16.83deg] bg-white rounded shadow flex-col justify-center items-center gap-2.5 inline-flex">
        <img src={micHeadphone} alt="/micHeadphone" />
      </div>
    </div>
  );
};

export default Banner;
