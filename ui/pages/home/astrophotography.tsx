import type { Component } from "solid-js";
import Universe from "../../assets/images/universe.jpeg";

const Astrophotography: Component = () => {
  return (
    <div class="w-full h-full bg-black p-4 box-border relative rounded-xl overflow-hidden cursor-pointer">
      <span class="text-white font-bold text-xl relative z-10">Astrophotography</span>
      {/* <p class="text-white text-base font-extralight relative z-10">Buy physical, digital or NFT astropictures</p> */}
      <img src={Universe} class="w-full h-full absolute z-0 top-0 left-0 object-cover transform-gpu hover:scale-125 transition duration-700 ease-in-out"/>
    </div>
    );
};

export default Astrophotography;
