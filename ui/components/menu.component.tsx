import type { Component } from "solid-js";
import Cart from "../assets/images/shopping-cart.png";
import Heart from "../assets/images/heart.png";
import Box from "../assets/images/box.png";
import Search from "../assets/images/search.png";
import { Link } from "solid-app-router";

interface Props {
  page ?: "home" | "about-us" | "shop" | "support" | "favorites" | "orders" | "cart";
}

const MenuComponent = ({ page } : Props) => {
  return (<div class="p-8 pb-4">
      <div class={"w-full flex flex-row items-center justify-between flex-wrap lg:flex-nowrap"}>
        <h2 class={"lg:w-3/12 w-full"} style={{"min-width": "220px"}}>
          <Link href="/">
            The Space Shop
          </Link>
        </h2>
        <div class="flex flex-row items-center flex-nowrap w-full my-4 lg:my-0 lg:w-auto justify-around lg:justify-center">
          <Link href="/orders" class="mx-6">
            <img src={Box} class={`mx-4 w-6 cursor-pointer opacity-${page === "orders" ? "100" : "50" }`} />
          </Link>
          <Link href="/favorites" >
            <img class={`mx-4 w-6 cursor-pointer opacity-${page === "favorites" ? "100" : "50" }`}  src={Heart} />
          </Link>
          <Link href="/cart" class="mx-6">
            <img class={`mx-4 w-6 cursor-pointer opacity-${page === "cart" ? "100" : "50" }`}  src={Cart} />
          </Link>
        </div>
        <div class="flex flex-row items-center flex-nowrap w-full my-4 lg:my-0  justify-center">
          <input class="ml-4 w-full p-4 border-2 border-solid border-gray-200 rounded-lg" placeholder="Search..."></input>
          <img src={Search} class="ml-6 w-6 cursor-pointer" />
        </div>
        <div class="flex flex-row items-center flex-nowrap w-full my-4 lg:my-0 lg:w-auto justify-center">
          <Link class={"bg-white text-black p-5 transform -skew-x-6 hover:bg-gray-100 ml-4 cursor-pointer"} href="/login">
            <span class="text-base transform font-bold uppercase skew-x-6">Login</span>
          </Link>
          <Link class={"bg-black text-white p-5 transform -skew-x-6 hover:bg-gray-200 hover:text-black cursor-pointer"} href="/register">
            <span class="text-base transform font-bold uppercase skew-x-6">Register</span>
          </Link>
        </div>
      </div>
      <div class={"w-full flex flex-row box-border justify-start"}>
      <Link href="/">
        <div class={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "home" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>Home</div>
      </Link>
      <Link href="/shop">
        <div class={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "shop" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>Shop</div>
      </Link>
      <Link href="/about-us">
        <div class={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "about-us" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>About us</div>
      </Link>
      <Link href="/support">
        <div class={`h-full p-2 box-border cursor-pointer text-base rounded-full font-${page === "support" ? "bold" : "semibold text-gray-500"} mr-4 text-black`}>Support</div>
      </Link>
      </div>
    </div>
  );
};

export default MenuComponent;
