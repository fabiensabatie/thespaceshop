import Link from "next/link";
import Starship from "../../assets/images/starship.gif";

const Stories = () => {
  return (<Link href="/stories">
    <div className="w-8/12 h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
      <div className="z-10 relative">Stories</div>
      <img src={Starship.src} className="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
    </div>
  </Link>
  );
};

export default Stories;
