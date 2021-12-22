import Cart from "../assets/images/shopping-cart.png";
import Heart from "../assets/images/heart.png";
import Box from "../assets/images/box.png";
import Search from "../assets/images/search.png";
import Link from "next/link";
import { shopStore } from "../app/shop/store/domain/core/shop.store";

interface Props {
  page ?: "home" | "about-us" | "shop" | "support" | "favorites" | "orders" | "cart";
}

const MenuComponent = ({ page } : Props) => {
  const shop = shopStore();
  const { cart } = shop;

  return (<div className="p-8 pb-4">
      <div className={"w-full flex flex-row items-center justify-between flex-wrap lg:flex-nowrap"}>
        <h2 className={"lg:w-3/12 w-full"} style={{"minWidth": "220px"}}>
          <Link href="/">
            The Space Shop
          </Link>
        </h2>
        <div className="flex flex-row items-center flex-nowrap w-full lg:w-4/12 my-4 lg:my-0 justify-around lg:justify-center" style={{minWidth: "250px"}}>
          <div className="w-6 h-6 mx-4"> 
            <Link href="/orders" >
              <img src={Box.src} className={`w-6 h-6 cursor-pointer opacity-${page === "orders" ? "100" : "50" }`} />
            </Link>
          </div>
          <div className="mx-8">
            <Link href="/favorites" >
              <img className={`w-6 h-6 cursor-pointer opacity-${page === "favorites" ? "100" : "50" }`}  src={Heart.src} />
            </Link>
          </div>
          <Link href="/cart">
            <div className="w-6 h-6 mx-4 relative"> 
              { !!cart.length && <div style={{"paddingLeft": "3px"}} className={`${page === "cart" ?  "text-black font-bold" : "text-gray-500"} absolute -top-4 rounded-full  w-4 h-4  ml-6 text-xs`}>{cart.length}</div>}
              <img className={`w-6 h-6  cursor-pointer opacity-${page === "cart" ? "100" : "50" }`}  src={Cart.src} />
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center flex-nowrap w-full my-4 lg:my-0 justify-center">
          <input className="ml-4 w-full p-4 border-2 border-solid border-gray-200 rounded-lg" placeholder="Search..."></input>
          <img src={Search.src} className="ml-6 w-6 cursor-pointer" />
        </div>
        <div className="flex flex-row items-center flex-nowrap w-full my-4 lg:my-0 lg:w-auto justify-center">
          <Link href="/login">
            <div className={"bg-white text-black p-5 transform -skew-x-6 hover:bg-gray-100 ml-4 cursor-pointer"}>
              <span className="text-base transform font-bold uppercase skew-x-6">Login</span>
            </div>
          </Link>
          <div className={"bg-black text-white p-5 transform -skew-x-6 hover:bg-gray-200 hover:text-black cursor-pointer"} >
            <Link href="/register">
              <span className="text-base transform font-bold uppercase skew-x-6">Register</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={"w-full flex flex-row box-border lg:justify-start justify-around"}>
      <Link href="/">
        <div className={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "home" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>Home</div>
      </Link>
      <Link href="/shop">
        <div className={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "shop" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>Shop</div>
      </Link>
      <Link href="/about-us">
        <div className={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "about-us" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>About us</div>
      </Link>
      <Link href="/support">
        <div className={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "support" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>Support</div>
      </Link>
      </div>
    </div>
  );
};

export default MenuComponent;
