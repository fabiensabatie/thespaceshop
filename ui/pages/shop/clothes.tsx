import type { Component } from "solid-js";
import ShopArticle from "../../components/shop/article";
import ShirtArticle from "../../assets/images/shop/shirt.jpg";
import JeanArticle from "../../assets/images/shop/jeans.jpg";
import HoodieArticle from "../../assets/images/shop/hoodie.jpg";
import ShoeArticle from "../../assets/images/shop/shoes.jpg";
import createSlider from "solid-slider";

const ShopClothes: Component = () => {
  const options = { vertical: true };
  const [slider, { current, next, prev, moveTo }] = createSlider(options);

  return (
    <div class={"w-full h-full flex flex-col box-border"}>
      <div class="font-bold uppercase text-2xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">Clothes</div>
      <div class="w-full h-full flex flex-row mt-8 data-keen-slider-scrollable overflow-x-scroll" data-keen-slider-scrollable  use:slider>
        <div class="p-4 w-1/4">
          <ShopArticle title={"Shirts"} image={ShirtArticle} />
        </div>
        <div class="p-4 w-1/4">
          <ShopArticle title={"Jeans"} image={JeanArticle} />
        </div>
        <div class="p-4 w-1/4">
          <ShopArticle title={"Sweaters"} image={HoodieArticle} />
        </div>
        <div class="p-4 w-1/4">
          <ShopArticle title={"Shoes"} image={ShoeArticle} />
        </div>
      </div>
    </div>
  );
};

export default ShopClothes;
