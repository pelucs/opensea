import { Cardholder, List, MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react';
import { useState } from 'react';
import clsx from 'clsx';

import logowhite from '../../public/assets/logotipo-white.svg';
import logoblack from '../../public/assets/logotipo-black.svg';

export default () => {

  const [activeHeader, setActiveHeader] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    let scrollY = document.documentElement.scrollTop;

    if(scrollY > 20){
      setActiveHeader(true);
    } else{
      setActiveHeader(false);
    }
  });

  return(
    <div className="sticky top-0 z-50">
      <div className={clsx("w-full py-3 bg-white centralized gap-1", {
        "border-b border-zinc-300": activeHeader,
        "border-none": !activeHeader
      })}>
        <span className="leading-tight text-center">
          Declaro todos os direitos autorais para <a href="https://opensea.io/" target="_blank" className="underline"> OpenSea</a>
        </span>
      </div>

      <div className={clsx("w-full h-[75px] px-5 md:px-7 flex items-center justify-between md:justify-start gap-5 transition-colors", {
        "bg-white text-black border-b border-zinc-300": activeHeader,
        "bg-transparent text-zinc-100 border-none": !activeHeader
      })}>
        <div className="flex items-center gap-4">
          <button className={clsx("p-3 centralized md:hidden rounded-xl", {
            "bg-transparent border border-zinc-300": activeHeader,
            "bg-white/20": !activeHeader
          })}>
            <List
              size={24}
              weight="bold"
            />
          </button>
          
          {activeHeader ? (
            <img src={logoblack} className="w-[170px]"/>
          ) : (
            <img src={logowhite} className="w-[170px]"/>
          )}
        </div>

        <hr className="w-[1px] hidden md:block h-8 bg-zinc-500 border-none"/>

        <div className="hidden md:flex items-center gap-7">
          <a href="">
            Drops
          </a>

          <a href="">
            Stats
          </a>
        </div>

        <div className="md:w-full flex items-center gap-2 md:gap-5">
          <div className={clsx("md:flex-1 py-3 flex items-center justify-between gap-3 px-3 rounded-xl", {
            "bg-transparent border border-zinc-300": activeHeader,
            "bg-white/20": !activeHeader
          })}>
            <div className="w-full flex items-center gap-3">
              <MagnifyingGlass 
                size={24} 
                weight="bold"
              />

              <input
                placeholder="Search items, collection, and accounts"
                className={clsx("w-full h-full hidden md:block bg-transparent font-normal outline-none", {
                  "placeholder:text-zinc-500": activeHeader,
                  "placeholder:text-zinc-100": !activeHeader
                })}
              />
            </div>

            <span className={clsx("w-7 h-7 rounded hidden md:centralized text-xs bg-white/20", {
              "bg-zinc-200": activeHeader,
              "bg-white/20": !activeHeader
            })}>
              /
            </span>
          </div>

          <div className={clsx("h-[50px] hidden md:flex items-center gap-4 px-3 rounded-xl", {
            "bg-transparent border border-zinc-300": activeHeader,
            "bg-white/20": !activeHeader
          })}>
            <a 
              href=""
              className="h-full flex pr-4 items-center gap-2 border-r border-zinc-300"
            >
              <Cardholder 
                size={24} 
                weight="fill"
              />

              Connect wallet
            </a>

            <a href="">
              <UserCircle 
                size={24} 
                weight="bold"
              />
            </a>
          </div>

          <button className={clsx("p-3 centralized rounded-xl", {
            "bg-transparent border border-zinc-300": activeHeader,
            "bg-white/20": !activeHeader
          })}>
            <ShoppingCart
              size={24}
              weight="bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
}