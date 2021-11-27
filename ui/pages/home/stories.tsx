import { Link } from "solid-app-router";
import type { Component } from "solid-js";
import Starship from "../../assets/images/starship.gif";

const Stories: Component = () => {
  return (<Link href="/stories" class="w-8/12 h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
    <div class="z-10 relative">Stories</div>
    <img src={Starship} class="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
  </Link>
  );
};

export default Stories;
