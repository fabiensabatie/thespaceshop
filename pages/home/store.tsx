import Link from "next/link";
import Space from "../../assets/images/space.jpg";

const Store = () => {
  return (
    <Link href="/shop">
      <div  className="w-6/12 h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
        <div className="z-10 relative">Shop</div>
        <img src={Space.src} className="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
      </div>
    </Link>
  )
};

export default Store;
