import nft1 from '../../public/assets/nfts/nft1.png';
import nft2 from '../../public/assets/nfts/nft2.png';
import nft3 from '../../public/assets/nfts/nft3.png';
import nft4 from '../../public/assets/nfts/nft4.png';
import nft5 from '../../public/assets/nfts/nft5.png';
import nft6 from '../../public/assets/nfts/nft6.png';

interface NftsType{
  id: number;
  name: string;
  author: string;
  eth: string;
  floor: string;
  img: string;
}

export const nfts: NftsType[] = [
  { id: 1, author: "765BB5", name: "Travel Tiger", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft1 },
  { id: 2, author: "RKL-Kongs-Deployer", name: "Rumble Kong League", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft2 },
  { id: 3, author: "AngelsOfAether", name: "Angels of Aether", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft3 },
  { id: 4, author: "CachorroCarameloNFT", name: "Cachorro Caramelo NFT", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft4 },
  { id: 5, author: "LongshanksNFT", name: "The Quilling", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft5 },
  { id: 6, author: "Author 6", name: "Mutant Ape Yacht Club", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft6 },
  { id: 7, author: "Author 7", name: "Name 7", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft1 },
  { id: 8, author: "Author 8", name: "Name 8", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft1 },
  { id: 9, author: "Author 9", name: "Name 9", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft1 },
  { id: 10, author: "Author 10", name: "Name 10", "eth": "4.3 ETH", floor: "0.91 ETH", img: nft1 },
];