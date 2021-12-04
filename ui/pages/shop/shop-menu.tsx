import { Accessor, createEffect } from "solid-js";
import Star from "../../assets/images/star.png";
import Tshirt from "../../assets/images/tshirt.png";
import Glasses from "../../assets/images/glasses.png";
import Prothesis from "../../assets/images/prothesis.png";
import Art from "../../assets/images/mona-lisa.png";
import Others from "../../assets/images/more.png";

const pageOptions = ["featured", "clothes", "accessories", "prothesis", "art", "others"] as const;

export type Page = typeof pageOptions[number] | "article";

interface ShopMenuProps {
  page : Accessor<Page>;
  setPage : (prev: Page) => Page;
}

interface ShopMenuItemProps {
  page: Accessor<Page>;
  name: Page;
  setPage : (prev: Page) => Page;
}

type ShopMenuItemIconMap = {
  [page: string] : string;
}

const Icons: ShopMenuItemIconMap = {
  featured: Star,
  clothes: Tshirt,
  accessories: Glasses,
  prothesis: Prothesis,
  art: Art,
  others: Others
}

const ShopMenuItem = ({ page, name, setPage }: ShopMenuItemProps) =>
  <div onClick={() => setPage(name)} class={`items-center text-base flex flex-row cursor-pointer capitalize font-${page() === name ? "bold text-black" : "semibold text-gray-500"}`}>
    <img src={Icons[name]} class={`w-6 h-6 mr-5 opacity-${page() === name ? "100" : "50"}`}/>
    {name}
  </div>



const ShopMenu = ({ page, setPage }: ShopMenuProps) => {
  return (
    <div class={"w-full h-full flex flex-col box-border gap-6"}>
      { pageOptions.map(name => <ShopMenuItem page={page} name={name} setPage={() => setPage(name)}/>) }
    </div>
  );
};

export default ShopMenu;
