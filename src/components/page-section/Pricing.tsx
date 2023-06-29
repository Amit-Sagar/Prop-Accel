import podcast from "components/assets/podcast.svg";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { useState } from "react";
import { PRICING_DATA } from "utils/constant";

const Pricing = () => {
  const [selectedType, setSelectedType] = useState(1);

  return (
    <div id="pricing" className="h-[691px] relative">
      <div className="w-full h-[568px] left-[1px] top-0 absolute">
        <img src={podcast} alt="/" />
      </div>
      <div className="h-[577px] left-[175px] top-[76px] absolute">
        <div className="w-[455px] h-[166px] left-[317px] top-0 absolute flex-col justify-start items-center gap-6 inline-flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="text-[32px] font-bold">{PRICING_DATA.title}</div>
            <div className="w-[455px] text-center text-sm">
              {PRICING_DATA.description}
            </div>
          </div>
          <div className="h-[37px] pl-1.5 pr-4 py-1.5 bg-white rounded-lg shadow justify-start items-center gap-2.5 inline-flex">
            {PRICING_DATA.planType.map((item, index) => (
              <div
                className={`text-center text-sm cursor-pointer ${
                  item.id == selectedType &&
                  "bg-fuchsia-300 bg-opacity-40 rounded-lg px-2 py-0.5"
                }`}
                key={item.id}
                onClick={() => setSelectedType(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1090px] left-0 top-[220px] absolute flex justify-between gap-5">
          {PRICING_DATA.cardData.map((item) => (
            <Card
              bordered={true}
              styles={`w-[303px] px-[27px] py-[35px] gap-6 ${
                item.id == 2 ? "bg-purple-800 text-white" : "bg-white"
              }`}
              key={item.id}
            >
              <div className="flex flex-col gap-4 justify-start items-start">
                <h1 className="font-bold">{item.planName}</h1>
                <p className="text-xs">{item.description}</p>
              </div>
              <div
                className={`justify-start items-center gap-[19px] inline-flex ${
                  item.id == 2 ? "text-white" : "text-purple-800"
                } `}
              >
                <div className="text-[32px] font-bold">
                  $ {selectedType === 1 ? "54" : "599"}
                </div>
                <div className=" text-sm">
                  / {selectedType === 1 ? "month" : "year"}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                {item.benifits.map((benifit, index) => (
                  <div
                    className="justify-start items-center gap-2.5 inline-flex"
                    key={index + "A"}
                  >
                    <svg
                      width="5"
                      height="5"
                      viewBox="0 0 5 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.75 2.5C4.75 3.12989 4.49978 3.73398 4.05438 4.17938C3.60898 4.62478 3.00489 4.875 2.375 4.875C1.74511 4.875 1.14102 4.62478 0.695621 4.17938C0.250223 3.73398 0 3.12989 0 2.5C0 1.87011 0.250223 1.26602 0.695621 0.820621C1.14102 0.375223 1.74511 0.125 2.375 0.125C3.00489 0.125 3.60898 0.375223 4.05438 0.820621C4.49978 1.26602 4.75 1.87011 4.75 2.5Z"
                        fill={item.id == 2 ? "white" : "black"}
                      />
                    </svg>
                    <div className="text-[12px] font-bold">{benifit}</div>
                  </div>
                ))}
              </div>
              <Button
                label={item.btnLabel}
                bordered={true}
                styles="text-purple-800 text-xs px-7 py-3 w-[149px] h-11 hover:scale-105"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
