import { SwiperProps, SwiperSlide } from 'swiper/react';
import { nfts } from '../utils/nfts';

import SlideSettings from './SlideSettings';
import { useEffect, useState } from 'react';

interface AccountsSlideProps{
  setImgIndex: (newIndex: number) => void;
}

export default ({ setImgIndex }: AccountsSlideProps) => {

  const [slidesView, setSlidesView] = useState<number>(4);

  //MANIPULAR O NÚMERO DE ITENS NO SLIDE 
  useEffect(() => {
    handleWidthWindow();
  }, []);

  window.addEventListener("resize", () => handleWidthWindow());

  const handleWidthWindow = () => {
    let widthX = document.documentElement.clientWidth;

    if(widthX > 880){
      setSlidesView(4);
    } else{
      setSlidesView(1);
    }
  }
  
  const settings: SwiperProps = {
    slidesPerView: slidesView,
    spaceBetween: 15,
    onActiveIndexChange: e => setImgIndex(e.activeIndex),
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      waitForTransition: false
    },
    navigation: true
  }

  return(
    <div className="w-full mt-5">
      <div className="text-zinc-100 hidden md:flex items-center gap-5 px-7">
        <a href="#" className="py-2 px-3 bg-white/20 rounded-lg">
          All
        </a>

        <a href="#" className="link">
          Art
        </a>

        <a href="#" className="link">
          Gaming
        </a>

        <a href="#" className="link">
          Memberships
        </a>

        <a href="#" className="link">
          PFPs
        </a>

        <a href="#" className="link">
          Photography
        </a>
      </div>

      <div className="mt-10">
        <SlideSettings settings={settings}>
          {nfts.map((nft, i) => (
            <SwiperSlide 
              key={i}
              className="w-72 h-72 bg-zinc-300 rounded-3xl flex items-end relative overflow-hidden group"  
            >
              <img src={nft.img} className="w-full group-hover:scale-110 duration-500 transition-all"/>

              <div className="w-full h-full flex flex-col justify-end gap-1 leading-tight absolute 
              inset-0 p-5 bg-gradient-to-t to-transparent from-black/70 from-5% text-white">
                <strong>
                  {nft.name}
                </strong>

                <p className="font-medium">
                  Floor: {nft.eth}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </SlideSettings>
      </div>
    </div>
  );
}