import React from "react";
import star from "components/assets/star.svg";

type props = {
  img: string;
  name: string;
  organisation: string;
};
const ProfileCard = ({ img, name, organisation }: props) => {
  return (
    <div className="w-[226px] h-[70px] justify-start items-center gap-6 inline-flex">
      <img className="w-[70px] h-[70px] rounded-[56.50px]" src={img} />
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="w-22 h-4  font-bold">{name}</div>
          <div className="w-[65px] h-4 text-sm ">{organisation}</div>
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
          {Array.from({ length: 5 }).map(() => (
            <img src={star} className="w-5 h-5 relative" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
