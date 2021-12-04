import type { Component } from "solid-js";
import { ShopArticle } from "../../../app/shop/domain/core/article";
import ShopArticleSlider from "../../components/shop/slider";
import WatchesArticle from "../../assets/images/shop/watches.jpg";
import JeweleryArticle from "../../assets/images/shop/jewelery.jpg";
import CapArticle from "../../assets/images/shop/cap.jpg";
import { shopStore } from "../../store/domain/core/shop.store";
import { useNavigate } from "solid-app-router";


const ShopAccessories: Component = () => {
  const { setSelectedArticle } = shopStore();
  const navigate = useNavigate();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    navigate("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Watches", image: WatchesArticle }),
    new ShopArticle({name: "Jewelery", image: JeweleryArticle }),
    new ShopArticle({name: "Caps", image: CapArticle }),
  ]
  
  return (
    <ShopArticleSlider articles={articles} category={"Accessories"} onClick={openArticle}/>
  );
};

export default ShopAccessories;
