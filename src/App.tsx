import { useState } from 'react';
import { nfts } from './utils/nfts';

import Header from './components/Header';
import AccountsSlide from './components/AccountsSlide';

import TopTrending from './components/TopTrending';
import CollectionSlide from './components/CollectionSlide';
import Footer from './components/Footer';
import clsx from 'clsx';

export default () => {

  const [imgIndex, setImgIndex] = useState<number>(0);

  return(
    <div className="w-full">
      <div className={`w-full h-[45vh] overflow-hidden relative`}>
        {nfts.map((nft, i) => (
          <img 
            key={i}
            src={nft.img} 
            className={clsx("w-full transition-all duration-500 absolute inset-0", {
              "opacity-1": imgIndex === i,
              "opacity-0": imgIndex !== i
            })}
          />
        ))}
      </div>

      <div className="w-full min-h-screen absolute inset-0 bg-gradient-to-t from-white to-transparent 
      backdrop-blur-2xl">
        <Header/>
        <AccountsSlide setImgIndex={setImgIndex}/>
        <TopTrending/>
        <CollectionSlide/>
        <Footer/>
      </div>
    </div>
  );
}