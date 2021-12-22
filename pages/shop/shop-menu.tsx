import Star from "../../assets/images/star.png";
import Tshirt from "../../assets/images/tshirt.png";
import Glasses from "../../assets/images/glasses.png";
import Prothesis from "../../assets/images/prothesis.png";
import Art from "../../assets/images/mona-lisa.png";
import Others from "../../assets/images/more.png";
import { Dispatch, SetStateAction } from "react";
import { ShopCategory, categories } from "../../app/shop/domain/core/shop-category";


interface ShopMenuProps {
  category : ShopCategory;
  setSelectedShopCategory : (category: ShopCategory) => void;
}

interface ShopMenuItemProps {
  category: ShopCategory;
  name: ShopCategory;
  setSelectedShopCategory : (category: ShopCategory) => void;
}

type ShopMenuItemIconMap = {
  [category: string] : string;
}

const Icons: ShopMenuItemIconMap = {
  featured: Star.src,
  clothes: Tshirt.src,
  accessories: Glasses.src,
  prothesis: Prothesis.src,
  art: Art.src,
  others: Others.src
}

const ShopMenuItem = ({ category, name, setSelectedShopCategory }: ShopMenuItemProps) =>
  <div onClick={() => setSelectedShopCategory(name)} className={`items-center text-base flex flex-row cursor-pointer capitalize font-${category === name ? "bold text-black" : "semibold text-gray-500"}`}>
    <img src={Icons[name]} className={`w-6 h-6 mr-5 opacity-${category === name ? "100" : "50"}`}/>
    {name}
  </div>



const ShopMenu = ({ category, setSelectedShopCategory }: ShopMenuProps) => {
  return (
    <div className={"w-full h-full flex flex-col box-border gap-6"}>
      { categories.map(name => <ShopMenuItem category={category} key={name} name={name} setSelectedShopCategory={() => setSelectedShopCategory(name)}/>) }
    </div>
  );
};

export default ShopMenu;
