import type { Component } from "solid-js";
import Mask from "../../assets/images/mask.jpg";

const UpcomingEvents: Component = () => {
  return (<div class="w-full h-full bg-black text-white p-4 box-border rounded-xl font-bold text-xl relative overflow-hidden cursor-pointer">
    <div class="z-10 relative w-full flex flex-end">Upcoming events</div>
    <img src={Mask} class="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
  </div>
  );
};

export default UpcomingEvents;
