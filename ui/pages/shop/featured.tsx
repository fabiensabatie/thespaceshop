import type { Component } from "solid-js";
import ShopArticle from "../../components/shop/article";
import TshirtArticle from "../../assets/images/shop/model.jpg";
import WatchArticle from "../../assets/images/shop/model1.jpg";
import SpaceArticle from "../../assets/images/shop/model2.jpg";
import Model from "../../assets/images/shop/model3.jpg";
import "solid-slider/dist/slider.css";
import createSlider from "solid-slider";

const ShopFeatured: Component = () => {
  const options = { vertical: true };
  const [slider, { current, next, prev, moveTo }] = createSlider(options);
  
  return (
    <div class={"w-full h-full flex flex-col box-border"}>
      <div class="font-bold uppercase text-2xl bg-black p-4 transform -skew-x-6 w-min whitespace-nowrap -ml-10 text-white">Featured sellers</div>
      <div class="w-full h-full flex flex-row mt-8 data-keen-slider-scrollable overflow-x-scroll" data-keen-slider-scrollable  use:slider>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Aiden Pearce"} image={TshirtArticle} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Vincent Lay"} image={WatchArticle} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Daniel Saadia"} image={SpaceArticle} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Astro"} image={Model} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Aiden Pearce"} image={Model} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Vincent Lay"} image={SpaceArticle} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Daniel Saadia"} image={TshirtArticle} />
        </div>
        <div class="p-4 w-1/5">
          <ShopArticle title={"Astro"} image={WatchArticle} />
        </div>
      </div>
    </div>
  );
};

export default ShopFeatured;
