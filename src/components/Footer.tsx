import { DiscordLogo, Envelope, InstagramLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

import logo from '../../public/assets/logo.svg';

export default () => {
  return(
    <div className="mt-10 w-full px-5 md:px-7 bg-[#1868b7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-14 border-b border-zinc-400/50">
        <div className="text-zinc-100 flex flex-col gap-3">
          <strong className="text-xl">
            Stay in the loop
          </strong>

          <p className="font-normal">
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips 
            and tricks for navigating OpenSea.
          </p>

          <div className="flex items-center flex-col md:flex-row gap-3">
            <input 
              placeholder="Your email address"
              className="w-full max-w-sm p-3 rounded-xl outline-none placeholder:text-zinc-500 
              font-normal"
            />

            <button className="w-full rounded-xl centralized py-3 px-6 bg-[#2081e2]">
              Sign up
            </button>
          </div>
        </div>

        <div className="text-zinc-100 flex flex-col gap-3">
          <strong className="text-xl">
            Join the community
          </strong>

          <div className="flex items-center gap-3">
            <a href="#" className="w-14 h-14 rounded-xl bg-[#2081e2] centralized">
              <TwitterLogo size={26} weight="fill"/>
            </a>

            <a href="#" className="w-14 h-14 rounded-xl bg-[#2081e2] centralized">
              <InstagramLogo size={26} weight="fill"/>
            </a>

            <a href="#" className="w-14 h-14 rounded-xl bg-[#2081e2] centralized">
              <DiscordLogo size={26} weight="fill"/>
            </a>

            <a href="#" className="w-14 h-14 rounded-xl bg-[#2081e2] centralized">
              <YoutubeLogo size={26} weight="fill"/>
            </a>

            <a href="#" className="w-14 h-14 rounded-xl bg-[#2081e2] centralized">
              <TiktokLogo size={26} weight="fill"/>
            </a>

            <a href="#" className="w-14 h-14 rounded-xl bg-[#2081e2] centralized">
              <Envelope size={26} weight="bold"/>
            </a>
          </div>
        </div>
      </div>

      <div className="py-14 flex items-start flex-col md:flex-row gap-10 md:gap-20 border-b border-zinc-400/50">
        <div className="w-full max-w-xs flex flex-col gap-3 text-white">
          <img src={logo} className="w-[50px]"/>

          <strong className="text-xl">
            OpenSea
          </strong>

          <p className="font-normal text-zinc-300">
            The world’s first and largest digital marketplace for crypto collectibles and non-fungible 
            tokens (NFTs). Buy, sell, and discover exclusive digital items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-32">
          <div className="text-zinc-100">
            <strong>
              Marketplace
            </strong>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="#" className="font-normal">All NFTs</a>
              <a href="#" className="font-normal">Art</a>
              <a href="#" className="font-normal">Gaming</a>
              <a href="#" className="font-normal">Memberships</a>
              <a href="#" className="font-normal">PFPs</a>
              <a href="#" className="font-normal">Photography</a>
            </div>
          </div>

          <div className="text-zinc-100">
            <strong>
              My Account
            </strong>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="#" className="font-normal">Profile</a>
              <a href="#" className="font-normal">Favorites</a>
              <a href="#" className="font-normal">Watchlist</a>
              <a href="#" className="font-normal">My Collections</a>
              <a href="#" className="font-normal">Create</a>
              <a href="#" className="font-normal">OpenSea Pro</a>
              <a href="#" className="font-normal">Settings</a>
            </div>
          </div>

          <div className="text-zinc-100">
            <strong>
              Stats
            </strong>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="#" className="font-normal">Ranking</a>
              <a href="#" className="font-normal">Activy</a>
            </div>
          </div>

          <div className="text-zinc-100">
            <strong>
              Company
            </strong>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="#" className="font-normal">About</a>
              <a href="#" className="font-normal">Careers</a>
              <a href="#" className="font-normal">Ventures</a>
              <a href="#" className="font-normal">Grants</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 md:py-10 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-xs font-normal text-zinc-100">
          &copy;2018 - 2023 Ozone Networks, Inc
        </h1>

        <h1 className="text-xs font-normal text-zinc-100">
          Desenvolvido por
        </h1>
      </div>
    </div>
  );
}