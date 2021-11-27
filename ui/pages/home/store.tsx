import { Link } from "solid-app-router";
import type { Component } from "solid-js";
import Space from "../../assets/images/space.jpg";

const Store: Component = () => {
  return (
    <Link href="/shop" class="w-6/12 h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
      <div class="z-10 relative">Shop</div>
      <img src={Space} class="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
    </Link>
  )
};

export default Store;
