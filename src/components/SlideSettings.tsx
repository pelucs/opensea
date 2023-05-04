import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface SliedProps{
  children: ReactNode;
  settings: SwiperProps;
}

export default ({ children, settings }: SliedProps) => {
  return(
    <Swiper modules={[ Autoplay, Navigation, Thumbs ]} {...settings} className="px-7 py-2">
      {children}
    </Swiper>
  );
}