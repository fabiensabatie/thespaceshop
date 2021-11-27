import { Component, createEffect, createSignal } from "solid-js";
import MenuComponent from "../../components/menu.component";
import PageTitle from "../../components/page-title";
import ShopFeatured from "./featured";
import ShopOthers from "./others";
import ShopClothes from "./clothes";
import ShopMenu, { Page } from "./shop-menu";
import ShopArt from "./art";
import ShopAccessories from "./accessories";
import ShopProtesis from "./protesis";

const ShopPage: Component = () => {
  const [page, setPage] = createSignal<Page>("featured");

  const shopPage = () =>  {
    switch (page()) {
      case "featured": return <ShopFeatured />;
      case "clothes": return <ShopClothes />;
      case "accessories": return <ShopAccessories />;
      case "protesis": return <ShopProtesis />;
      case "art": return <ShopArt />;
      case "others": return <ShopOthers />;
    }
  }

  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="shop" />
      <PageTitle content="Shop"></PageTitle>
      <div class="w-full h-full p-8 flex flex-row m-auto px-16">
        <div class="w-2/12 h-full pt-16 box-border">
          <ShopMenu page={page} setPage={setPage}/>
        </div>
        <div class="w-10/12 h-full pb-10">
          { shopPage }
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
