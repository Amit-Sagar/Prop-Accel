import Button from "components/common/Button";
import Card from "components/common/Card";
import { ABOUT_DATA } from "utils/constant";
import pngwing from "components/assets/pngwing.png";

const About = () => {
  return (
    <div id="about" className="h-[525px] relative">
      <img
        className="w-[500px] h-[400px]  absolute right-0 -top-40"
        src={pngwing}
      />
      <div className="w-[552px] h-[397px] left-[175.50px] top-[49px] absolute">
        <div className="flex flex-wrap gap-3">
          {ABOUT_DATA?.cardData?.map((item) => (
            <Card
              styles={`w-[268px] h-40 p-8 gap-4 ${item.id % 2 == 0 && "mt-4"}`}
              bordered={true}
            >
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-xs max-w-52">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="left-[847.50px] top-[125.50px] absolute flex-col justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-[48px] font-bold">{ABOUT_DATA.title}</div>
          <div className="w-[367px] text-sm">{ABOUT_DATA.description}</div>
        </div>
        <Button
          label={ABOUT_DATA.btnLabel}
          styles="text-white text-xl font-bold w-[237px] h-[60px] hover:scale-110"
        />
      </div>
    </div>
  );
};

export default About;
