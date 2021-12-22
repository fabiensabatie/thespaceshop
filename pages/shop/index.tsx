import MenuComponent from "../../components/menu.component";
import PageTitle from "../../components/page-title";
import ShopFeatured from "./featured";
import ShopOthers from "./others";
import ShopClothes from "./clothes";
import ShopMenu from "./shop-menu";
import ShopArt from "./art";
import ShopAccessories from "./accessories";
import ShopProthesis from "./prothesis";
import { shopStore } from "../../app/shop/store/domain/core/shop.store";

const ShopPage = () => {
  const shop = shopStore();
  const { selectedShopCategory, setSelectedShopCategory } = shop;

  const shopPage = () =>  {
    switch (selectedShopCategory) {
      case "featured": return <ShopFeatured />;
      case "clothes": return <ShopClothes />;
      case "accessories": return <ShopAccessories />;
      case "prothesis": return <ShopProthesis />;
      case "art": return <ShopArt />;
      case "others": return <ShopOthers />;
    }
  }

  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      <MenuComponent page="shop" />
      <PageTitle content="Shop"></PageTitle>
      <div className="w-full h-full overflow-hidden p-8 flex flex-row m-auto px-16">
        <div className="w-2/12 h-full pt-16 box-border">
          <ShopMenu category={selectedShopCategory} setSelectedShopCategory={setSelectedShopCategory}/>
        </div>
        <div className="w-10/12 h-full pb-10">
          { shopPage() }
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
