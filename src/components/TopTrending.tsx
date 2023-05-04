import { CaretDown } from "phosphor-react";
import { nfts } from "../utils/nfts";

export default () => {
  return(
    <div className="mt-10 px-5 md:px-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 md:gap-8">
          <a href="#" className="md:text-2xl after:content-[''] after:w-full after:h-1 after:bg-black 
          after:block after:relative after:top-1 md:after:top-3">
            Trending
          </a>

          <a href="#" className="md:text-2xl text-zinc-600">
            Top
          </a>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden md:grid grid-cols-4 border border-zinc-300 rounded-xl">
            <button className="px-3 py-2 centralized border-r border-zinc-300">
              1h
            </button>

            <button className="px-3 py-2 text-zinc-600 centralized border-r border-zinc-300">
              6h
            </button>

            <button className="px-3 py-2 text-zinc-600 centralized border-r border-zinc-300">
              24h
            </button>

            <button className="px-3 py-2 text-zinc-600 centralized">
              7d
            </button>
          </div>

          <button className="hidden md:centralized gap-3 px-6 py-2 rounded-xl border border-zinc-300">
            All chains

            <CaretDown size={18} weight="bold" className="text-zinc-600"/>
          </button>

          <button className="px-6 py-2 rounded-xl border border-zinc-300">
            View all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <table className="w-full border-collapse mt-10 flex flex-col gap-5">
          <thead>
            <tr>
              <td className="w-full px-3 uppercase text-xs text-zinc-600 font-semibold">Collection</td>
              <td className="w-full px-3 uppercase text-xs text-zinc-600 font-semibold">Price</td>
              <td className="w-full px-3 uppercase text-xs text-zinc-600 font-semibold">Volume</td>
            </tr>
          </thead>

          {nfts.slice(0, 5).map(nft => (
            <tbody key={nft.id}>
              <tr className="w-full">
                <td>
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-zinc-500">
                      {nft.id}
                    </span>

                    <div className="w-16 h-16 rounded-xl bg-zinc-300 overflow-hidden border">
                      <img src={nft.img} className="w-full"/>
                    </div>
                  </div>
                </td>

                <td className="w-full px-5 font-medium">
                  {nft.name}
                </td>

                <td className="w-full px-5 font-medium">
                  {nft.floor}
                </td>

                <td className="w-full px-5 font-medium">
                  {nft.eth}
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <table className="w-full mt-5 md:mt-10 flex flex-col gap-5">
          <thead className="hidden md:block">
            <tr>
              <td className="w-full px-3 uppercase text-xs text-zinc-600 font-semibold">Collection</td>
              <td className="w-full px-3 uppercase text-xs text-zinc-600 font-semibold">Price</td>
              <td className="w-full px-3 uppercase text-xs text-zinc-600 font-semibold">Volume</td>
            </tr>
          </thead>

          {nfts.slice(5, 10).map(nft => (
            <tbody key={nft.id}>
              <tr className="w-full">
                <td>
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-zinc-500">
                      {nft.id}
                    </span>

                    <div className="w-16 h-16 rounded-xl bg-zinc-300 overflow-hidden border">
                      <img src={nft.img} className="w-full"/>
                    </div>
                  </div>
                </td>

                <td className="w-full px-5 font-medium">
                  {nft.name}
                </td>

                <td className="w-full px-5 font-medium">
                  {nft.floor}
                </td>

                <td className="w-full px-5 font-medium">
                  {nft.eth}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}