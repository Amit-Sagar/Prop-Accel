import Card from "components/common/Card";
import ProfileCard from "components/common/ProfileCard";
import SwipableView from "components/common/Slider";
import { SwiperSlide } from "swiper/react";
import { REVIEW_DATA } from "../../utils/constant";

const Review = () => {
  return (
    <div
      id="review"
      className="flex flex-col gap-8 justify-center items-start w-[1090px] mx-auto mt-10"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px] font-bold">Review from customers</h1>
        <div className="w-[399px] text-black text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </div>
      </div>
      <SwipableView>
        {REVIEW_DATA.cardData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card styles="w-[465px] px-12 py-9 bg-white border order-fuchsia-300 flex flex-col gap-6">
                <ProfileCard
                  img={item.img}
                  name={item.name}
                  organisation={item.org}
                />
                <p>{item.review}</p>
              </Card>
            </SwiperSlide>
          );
        })}
      </SwipableView>
    </div>
  );
};

export default Review;
