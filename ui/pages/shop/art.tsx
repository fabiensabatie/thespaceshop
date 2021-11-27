import type { Component } from "solid-js";

const ShopArt: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border"}>
      <div class="font-bold uppercase text-2xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">Art</div>
      <div class="w-full h-full flex flex-row mt-8 gap-6">
        <div class="w-1/4 h-full bg-black rounded-3xl">
          
        </div>
        <div class="w-1/4 h-full bg-black rounded-3xl">
          
        </div>
        <div class="w-1/4 h-full bg-black rounded-3xl">
          
        </div>
        <div class="w-1/4 h-full bg-black rounded-3xl">
          
        </div>
      </div>
    </div>
  );
};

export default ShopArt;
