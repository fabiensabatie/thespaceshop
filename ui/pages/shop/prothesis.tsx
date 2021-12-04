import type { Component } from "solid-js";
import { ShopArticle } from "../../../app/shop/domain/core/article";
import ShopArticleSlider from "../../components/shop/slider";
import LegArticle from "../../assets/images/shop/leg.jpg";
import ArmArticle from "../../assets/images/shop/arm.jpg";
import { shopStore } from "../../store/domain/core/shop.store";
import { useNavigate } from "solid-app-router";

const ShopProthesis: Component = () => {
  const { setSelectedArticle } = shopStore();
  const navigate = useNavigate();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    navigate("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Legs", image: LegArticle }),
    new ShopArticle({name: "Arms", image: ArmArticle })
  ]
  
  return (
    <ShopArticleSlider articles={articles} category={"Prothesis"} onClick={openArticle}/>
  );
};

export default ShopProthesis;
