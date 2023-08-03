import { Stacks } from '../../constants/stacks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const StackSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={6}
      loop={true}
      freeMode={{ momentum: false }}
      autoplay={{ delay: 0, pauseOnMouseEnter: false }}
      speed={2000}
      direction="vertical"
      className="ease-linear">
      {Stacks.map((stack) => (
        <SwiperSlide>
          <div
            key={stack.id}
            className="flex flex-col space-y-3 items-center w-6">
            <p className="[writing-mode:vertical-rl] -rotate-180">
              {stack.name}
            </p>
            <img
              className="h-6 -rotate-90"
              src={stack.image}
              alt={stack.name}
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default StackSlider;
