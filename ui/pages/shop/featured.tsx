import type { Component } from "solid-js";
import TshirtArticle from "../../assets/images/shop/model.jpg";
import WatchArticle from "../../assets/images/shop/model1.jpg";
import SpaceArticle from "../../assets/images/shop/model2.jpg";
import Model from "../../assets/images/shop/model3.jpg";
import "solid-slider/dist/slider.css";
import createSlider from "solid-slider";
import { ShopArticle } from "../../../app/shop/domain/core/article";
import ShopArticleSlider from "../../components/shop/slider";
import { useNavigate } from "solid-app-router";
import { shopStore } from "../../store/domain/core/shop.store";

const ShopFeatured = () => {
  const { setSelectedArticle } = shopStore();
  const navigate = useNavigate();

  const openArticle = (article: ShopArticle) => {
    setSelectedArticle(article);
    navigate("/shop/article");
  };

  const articles = [
    new ShopArticle({name: "Aiden Pearce", image: TshirtArticle, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
    new ShopArticle({name: "Vincent Lay", image: WatchArticle, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
    new ShopArticle({name: "Daniel Saadia", image: SpaceArticle, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
    new ShopArticle({name: "Astro", image: Model, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
    new ShopArticle({name: "Aiden Pearce", image: SpaceArticle, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
    new ShopArticle({name: "Vincent Lay", image: TshirtArticle, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
    new ShopArticle({name: "Daniel Saadia", image: Model, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque tortor a est ultrices, in sagittis nulla hendrerit. Curabitur congue imperdiet neque vitae pulvinar. Etiam risus neque, suscipit ac est sit amet, eleifend semper orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque blandit malesuada justo, fermentum commodo magna maximus sit amet. Etiam ac fringilla quam, vitae euismod ex." }),
  ];

  return (
    <ShopArticleSlider articles={articles} category={"Featured sellers"} onClick={openArticle}/>
  );
};

export default ShopFeatured;

