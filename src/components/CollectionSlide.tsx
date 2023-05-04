import { SwiperProps, SwiperSlide } from 'swiper/react';
import { CheckCircle } from 'phosphor-react';

import SlideSettings from './SlideSettings';
import { nfts } from '../utils/nfts';
import { useEffect, useState } from 'react';

export default () => {

  const [slidesView, setSlidesView] = useState<number>(5);

  //MANIPULAR O NÚMERO DE ITENS NO SLIDE 
  useEffect(() => {
    handleWidthWindow();
  }, []);

  window.addEventListener("resize", () => handleWidthWindow());

  const handleWidthWindow = () => {
    let widthX = document.documentElement.clientWidth;

    if(widthX > 880){
      setSlidesView(5);
    } else{
      setSlidesView(1);
    }
  }
  
  const settings: SwiperProps = {
    slidesPerView: slidesView,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      waitForTransition: false
    },
    navigation: true
  }

  return(
    <div className="w-full mt-14">
      <strong className="text-2xl px-7">
        Notable Collections
      </strong>

      <div className="mt-7">
        <SlideSettings settings={settings}>
          {nfts.map((nft, i) => (
            <SwiperSlide 
              key={i}
              className="w-full hover:-translate-y-2 transition-all pb-5 shadow-sm hover:shadow-lg"  
            >
              <img src={nft.img} className="w-full rounded-tl-xl rounded-tr-xl"/>
              

              <div className="mt-5 px-3">
                <strong className="font-medium flex items-center gap-2">
                  {nft.author}

                  <CheckCircle size={16} weight="fill"/>
                </strong>

                <div className="mt-3 flex items-center justify-between">
                  <div className="font-semibold">
                    <strong className="uppercase text-xs text-zinc-600">
                      Floor
                    </strong>

                    <p>
                      {nft.floor}
                    </p>
                  </div>

                  <div className="font-semibold">
                    <strong className="uppercase text-xs text-zinc-600">
                      Total volume
                    </strong>

                    <p>
                      3.489 ETH
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SlideSettings>
      </div>
    </div>
  );
}