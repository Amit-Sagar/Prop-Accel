import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ReactNode } from "react";

type props = {
  classes?: string;
  children: ReactNode;
};
const SwipableView = ({ children, classes }: props) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper"
    >
      {children}
    </Swiper>
  );
};

export default SwipableView;
