import type { Component } from "solid-js";
import ShirtArticle from "../../assets/images/shop/shirt.jpg";
import JeanArticle from "../../assets/images/shop/jeans.jpg";
import HoodieArticle from "../../assets/images/shop/hoodie.jpg";
import ShoeArticle from "../../assets/images/shop/shoes.jpg";
import ShopArticleSlider from "../../components/shop/slider";
import { ShopArticle } from "../../../app/shop/domain/core/article";
import { shopStore } from "../../store/domain/core/shop.store";
import { useNavigate } from "solid-app-router";

const ShopClothes: Component = () => {
  const { setSelectedArticle } = shopStore();
  const navigate = useNavigate();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    navigate("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Shirts", image: ShirtArticle }),
    new ShopArticle({name: "Jeans", image: JeanArticle }),
    new ShopArticle({name: "Hoodies", image: HoodieArticle }),
    new ShopArticle({name: "Shoes", image: ShoeArticle }),
    new ShopArticle({name: "Jeans", image: JeanArticle }),
    new ShopArticle({name: "Hoodies", image: HoodieArticle }),
    new ShopArticle({name: "Shirts", image: ShirtArticle }),
  ]
  
  return (
    <ShopArticleSlider articles={articles} category={"Clothes"} onClick={openArticle}/>
  );
};

export default ShopClothes;
