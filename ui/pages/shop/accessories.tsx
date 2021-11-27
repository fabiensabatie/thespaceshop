import type { Component } from "solid-js";
import ShopArticle from "../../components/shop/article";

const ShopAccessories: Component = () => {
  return (
    <div class={"w-full h-full flex flex-col box-border"}>
      <div class="font-bold uppercase text-2xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">Accessories</div>
      <div class="w-full h-full flex flex-row mt-8 gap-6">
        <ShopArticle title={"Watches"}/>
        <ShopArticle title={"Jewelery"}/>
        <ShopArticle title={"Caps"}/>
        <ShopArticle title={"Scarfs"}/>
      </div>
    </div>
  );
};

export default ShopAccessories;
